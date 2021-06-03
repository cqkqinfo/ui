// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Native from './native';
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { NativeInstance, Props } from './index';

export default forwardRef<NativeInstance, Props>(
  ({ children, initData }, ref) => {
    const thisRef = useRef<any>({});
    useImperativeHandle(ref, () => thisRef.current);
    return (
      <Native
        bindthis={({ detail }: any) => {
          detail.setData(initData);
          thisRef.current = detail;
        }}
      >
        {children}
      </Native>
    );
  },
);
