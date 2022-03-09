import { forwardRef, useImperativeHandle, useState } from 'react';
import React from 'react';
import { NativeInstance, Props } from './index';
import { View } from 'remax/one';

export default forwardRef<NativeInstance, Props>(
  ({ initData = {}, children, onTap }, ref) => {
    const [{ style, content, className, visible }, setData] = useState(
      initData,
    );
    const [returns, setReturns] = useState<NativeInstance>({
      data: initData,
      setData,
    });
    useImperativeHandle(ref, () => returns, [returns]);
    return (
      <View onTap={onTap} className={className} style={style as any}>
        {visible ? children : null}
        {content}
      </View>
    );
  },
);
