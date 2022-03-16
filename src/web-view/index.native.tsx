import { WebView } from 'react-native-webview';
import React from 'react';
import { useForceUpdate } from 'parsec-hooks';

export default ({ src, ...props }: any) => {
  const { forceUpdate, updateTime } = useForceUpdate();
  return (
    <WebView
      key={updateTime}
      source={{ uri: src }}
      {...props}
      onContentProcessDidTerminate={forceUpdate}
    />
  );
};
