import React from 'react';
import { View, navigateTo } from 'remax/one';
import { Props } from './index';

export default ({
  // appId = getAccountInfoSync().miniProgram.appId,
  path,
  onLaunch,
  ...props
}: Props) => {
  return (
    <View
      {...props}
      onTap={e => {
        props.onTap?.(e);
        if (path) {
          // if (appId === getAccountInfoSync().miniProgram.appId) {
          navigateTo({ url: path }).then(onLaunch);
          // } else {
          //   navigateToMiniProgram({
          //     appId,
          //     path,
          //   }).then(onLaunch);
          // }
        }
      }}
    />
  );
};
