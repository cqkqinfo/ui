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
      key={+new Date()}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      dangerouslySetInnerHTML={{
        __html: `<${tagName}
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
      this.onclick = e => {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('launch', {}));
      };
      const content = templateElem.content.cloneNode(true);
      this.appendChild(content);
    }
  }
}

// Define the new element
customElements.define('open-weapp', OpenWeapp);
