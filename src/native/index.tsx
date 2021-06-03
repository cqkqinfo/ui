import { View } from 'remax/one';
import { forwardRef, useState } from 'react';
import React from 'react';

export interface Data {
  /**
   * 行内样式
   */
  style?: string;
  children?: string | number;
  className?: string;
  /**
   * 是否显示
   */
  visible?: boolean;
}

export type NativeInstance = {
  setData: (data: Data, callBack?: () => void) => void;
  data: Data;
};

export interface Props {
  children?: React.ReactNode;
  initData?: Data;
}

export default forwardRef<NativeInstance, Props>((props, ref) => {
  return <View />;
});
