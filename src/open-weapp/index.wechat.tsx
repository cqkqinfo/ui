import React from 'react';
import { View } from 'remax/one';
import {
  navigateToMiniProgram,
  navigateTo,
  getAccountInfoSync,
} from 'remax/wechat';
import { Props } from './index';

export default ({
  appId = getAccountInfoSync().miniProgram.appId,
  path,
  onLaunch,
  ...props
}: Props) => {
  return (
    <View
      {...props}
      onTap={e => {
        props.onTap?.(e);
        if (appId === getAccountInfoSync().miniProgram.appId && path) {
          navigateTo({ url: path }).then(onLaunch);
        } else {
          navigateToMiniProgram({
            appId,
            path,
          }).then(onLaunch);
        }
      }}
    />
  );
};
