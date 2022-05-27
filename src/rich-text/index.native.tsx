import React, { useState } from 'react';
import { RichTextProps } from 'remax/wechat';
import useProps from './useProps';
import WebView from 'react-native-webview';

export default (props: RichTextProps) => {
  const { nodes, style } = useProps(props);
  const [height, setHeight] = useState(0);
  return (
    <WebView
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={{
        width: '100%',
        height,
        ...style,
      }}
      originWhitelist={['*']}
      injectedJavaScript={`(function() {
    window.ReactNativeWebView.postMessage(document.body.offsetHeight);
})();`}
      onMessage={({ nativeEvent: { data } }) => {
        setHeight(+data + 20);
      }}
      source={{
        html: `<html><meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"><body></body>${nodes}</body></html>`,
      }}
    />
  );
};
