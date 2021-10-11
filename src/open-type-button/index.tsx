import { View, ViewProps } from 'remax/one';
import React from 'react';

export interface GetUserInfoData {
  encryptedData: string;
  errMsg: string;
  iv: string;
  rawData: string;
  signature: string;
  userInfo: string;
}

export interface Props extends React.PropsWithChildren<ViewProps> {
  type: 'getUserInfo';
  onGetUserInfo?: (data: GetUserInfoData) => void;
}

export default ({ children, type, ...props }: Props) => {
  return <View {...props}>{children}</View>;
};
