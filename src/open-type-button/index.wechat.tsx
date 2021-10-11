import React from 'react';
import { Props } from './index';
import { View } from 'remax/one';

export default ({ children, type, onGetUserInfo, ...props }: Props) => {
  return (
    <View
      {...props}
      onTap={() => {
        if (type === 'getUserInfo') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          wx.getUserProfile({
            desc: '用于完善会员资料',
            success: async (res: any) => {
              onGetUserInfo?.(res);
            },
          });
        }
      }}
    >
      {children}
    </View>
  );
};
