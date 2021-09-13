import React from 'react';
import { View } from 'remax/one';
import { navigateToMiniProgram } from 'remax/wechat';
import { Props } from './index';

export default ({ appId, path, onLaunch, ...props }: Props) => {
  return (
    <View
      {...props}
      onTap={e => {
        props.onTap?.(e);
        if (appId) {
          navigateToMiniProgram({
            appId,
            path,
          }).then(onLaunch);
        }
      }}
    />
  );
};
