// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Native from './native';
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { NativeInstance, Props } from './index';

export default forwardRef<NativeInstance, Props>(
  (
    { children, initData: { visible, className, style, content } = {} },
    ref,
  ) => {
    const thisRef = useRef<any>({});
    useImperativeHandle(ref, () => thisRef.current);
    return (
      <Native
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindthis={({ detail }: any) => {
          thisRef.current = detail;
        }}
      >
        {children}
      </Native>
    );
  },
);
