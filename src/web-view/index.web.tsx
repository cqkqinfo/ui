import React from 'react';
import { WebViewProps } from '@remax/wechat/esm/hostComponents/WebView';

export default (props: WebViewProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <iframe
      src=""
      frameBorder="0"
      {...props}
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
