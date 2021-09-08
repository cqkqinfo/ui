import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { View, ViewProps } from 'remax/one';
import isWx from '../is-wx';

export interface Props extends ViewProps {
  /**
   * 显示的内容，只支持行内样式
   */
  children?: React.ReactElement;
  /**
   * web端跳转需要这个，小程序的username
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
}

export default ({
  children,
  username,
  path,
  id,
  className,
  ...props
}: Props) => {
  const childrenHtml = children ? ReactDOMServer.renderToString(children) : '';
  return (
    <View
      {...props}
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      dangerouslySetInnerHTML={{
        __html: isWx
          ? `
        <wx-open-launch-weapp
          className='${className}'
          id="${id}"
          username="${username}"
          path="${path}"
        >
          <template>
            ${childrenHtml}
          </template>
        </wx-open-launch-weapp>`
          : childrenHtml,
      }}
    />
  );
};
