// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Native from './native';
import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
} from 'react';
import { NativeInstance, Props } from './index';

export default forwardRef<NativeInstance, Props>(
  (
    { children, initData: { visible, className, style, content } = {} },
    ref,
  ) => {
    const [thisRef, setRef] = useState({} as NativeInstance);
    useImperativeHandle(ref, () => thisRef, [thisRef]);
    return (
      <Native
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindthis={({ detail }: any) => {
          setRef(detail);
        }}
      >
        {children}
      </Native>
    );
  },
);
