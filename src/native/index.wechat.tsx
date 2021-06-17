/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import Native from './native';
// @ts-ignore
import FlexNative from './flex-native';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { NativeInstance, Props } from './index';

export default forwardRef<NativeInstance, Props>(
  (
    {
      children,
      flex,
      initData: { visible = true, className, style, content } = {},
    },
    ref,
  ) => {
    const [thisRef, setRef] = useState({} as NativeInstance);
    useImperativeHandle(ref, () => thisRef, [thisRef]);
    return flex ? (
      <FlexNative
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindthis={({ detail }: any) => {
          setRef(detail);
        }}
      >
        {children}
      </FlexNative>
    ) : (
      <Native
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindthis={({ detail }: any) => {
          console.log(6666666);
          setRef(detail);
        }}
      >
        {children}
      </Native>
    );
  },
);
