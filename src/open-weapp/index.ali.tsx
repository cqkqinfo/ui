import React from 'react';
import { View } from 'remax/one';
import { Props } from './index';

export default ({ appId, path, onLaunch, ...props }: Props) => {
  return (
    <View
      {...props}
      onTap={e => {
        props.onTap?.(e);
        if (appId) {
          console.log(appId, '阿里小程序暂不支持');
        }
      }}
    />
  );
};
