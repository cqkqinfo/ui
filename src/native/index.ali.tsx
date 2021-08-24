/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import Native from './native-ali';
// @ts-ignore
import FlexNative from './flex-native-ali';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { NativeInstance, Props, Data } from './index';

export default forwardRef<NativeInstance, Props>(
  (
    {
      children,
      flex,
      initData: { visible = true, className, style, content } = {},
    },
    ref,
  ) => {
    const dataRef = useRef<Data>({ visible, className, style, content });
    const [thisRef, setRef] = useState<NativeInstance>({
      data: {},
      setData: data => (dataRef.current = data),
    });
    useImperativeHandle(ref, () => thisRef, [thisRef]);
    return flex ? (
      <FlexNative
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindthis={({ detail }: any) => {
          detail.setData(dataRef.current);
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
          detail.setData(dataRef.current);
          setRef(detail);
        }}
      >
        {children}
      </Native>
    );
  },
);
