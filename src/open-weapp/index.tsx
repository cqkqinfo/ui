import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { View, ViewProps } from 'remax/one';
import isWx from '../is-wx';
import { useId } from 'parsec-hooks';

export interface Props extends ViewProps {
  /**
   * 显示的内容，只支持行内样式
   */
  children?: React.ReactElement;
  /**
   * web端跳转需要这个，小程序的账号原始id
   */
  username?: string;
  /**
   * 跳转路径
   */
  path?: string;
  /**
   * 小程序端跳转需要这个，小程序的appId
   */
  appId?: string;
  /**
   * 打开成功事件
   */
  onLaunch?: (e: any) => void;
}

export default ({
  children,
  username,
  path,
  id = useId(),
  className,
  onLaunch,
  ...props
}: Props) => {
  const childrenHtml = children ? ReactDOMServer.renderToString(children) : '';
  const tagName = isWx ? 'wx-open-launch-weapp' : 'open-weapp';
  useEffect(() => {
    const event = function(e: any) {
      onLaunch?.(e);
    };
    setTimeout(() => {
      const btn = document.getElementById(id);
      btn?.addEventListener('launch', event);
    });
    return () => {
      const btn = document.getElementById(id);
      btn?.removeEventListener('launch', event);
    };
  });
  return (
    <View
      {...props}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      dangerouslySetInnerHTML={{
        __html: `<${tagName}
          key='${+new Date()}'
          className='${className}'
          id="${id}"
          username="${username}"
          path="${path}"
        >
          <template id='open-weapp'>
            ${childrenHtml}
          </template>
        </${tagName}>`,
      }}
    />
  );
};

// Create a class for the element
class OpenWeapp extends HTMLElement {
  constructor() {
    super();
    const templateElem = document.getElementById(
      'open-weapp',
    ) as HTMLTemplateElement;
    if (templateElem) {
      const content = templateElem.content.cloneNode(true);
      const iframe = document.createElement('iframe');
      iframe.style.verticalAlign = 'top';
      iframe.setAttribute('frameborder', 'no');
      this.appendChild(iframe);
      const newWindow = iframe.contentWindow;
      if (newWindow) {
        const wrap = document.createElement('div');
        wrap.style.display = 'inline-block';
        wrap.onclick = e => {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('launch', {}));
        };
        const wrap2 = document.createElement('div');
        wrap2.appendChild(content);
        wrap.appendChild(wrap2);
        newWindow.document.body.appendChild(wrap);
        newWindow.document.body.style.margin = '0px';
        setTimeout(() => {
          iframe.style.width = wrap.offsetWidth + 1 + 'px';
          iframe.style.height = wrap.offsetHeight + 1 + 'px';
        });
      }
    }
  }
}

// Define the new element
customElements.define('open-weapp', OpenWeapp);
