import { forwardRef, useImperativeHandle, useState } from 'react';
import React from 'react';
import { NativeInstance, Props } from './index';
import { View } from 'react-native';

export default forwardRef<NativeInstance, Props>(
  ({ initData = {}, children }, ref) => {
    const [{ style, content, className, visible }, setData] = useState(
      initData,
    );
    const [returns, setReturns] = useState<NativeInstance>({
      data: initData,
      setData,
    });
    useImperativeHandle(ref, () => returns, [returns]);
    return (
      <View style={{ display: visible ? undefined : 'none' }}>{children}</View>
    );
  },
);
