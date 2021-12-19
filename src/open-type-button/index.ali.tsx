import { View } from 'remax/one';
import React from 'react';
import { Props } from './index';

export default ({ children, type, onGetUserInfo, ...props }: Props) => {
  return (
    <View
      {...props}
      onTap={() => {
        if (type === 'getUserInfo') {
          onGetUserInfo?.({});
        }
      }}
    >
      {children}
    </View>
  );
};
