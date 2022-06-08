/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import Native from './native';
// @ts-ignore
import FlexNative from './flex-native';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { NativeInstance, Props, Data } from './index';
import { usePrevious } from 'parsec-hooks';

export default forwardRef<NativeInstance, Props>(
  (
    {
      children,
      flex,
      initData: {
        visible = true,
        className = '',
        style = '',
        content = '',
      } = {},
      initData,
      onTap,
    },
    ref,
  ) => {
    const dataRef = useRef<Data>({ visible, className, style, content });
    const thisRef = useRef<NativeInstance>({
      data: {},
      setData: data => (dataRef.current = data),
    });
    useImperativeHandle(ref, () => thisRef.current, [thisRef]);
    const preInitData = usePrevious(initData);
    useEffect(() => {
      if (
        JSON.stringify(preInitData) !== JSON.stringify(initData) &&
        initData
      ) {
        thisRef.current.setData(initData);
      }
    }, [initData, preInitData, thisRef]);
    const preDataStr = useRef(JSON.stringify(dataRef.current));
    const props = {
      content,
      'class-name': className,
      style,
      visible,
      bindthis: ({ detail }: any) => {
        detail.setData(dataRef.current);
        thisRef.current = {
          ...detail,
          setData: data => {
            if (preDataStr.current !== JSON.stringify(data)) {
              detail.setData({ visible, className, style, content, ...data });
              preDataStr.current = JSON.stringify(data);
            }
          },
        };
      },
      bindtap: (e: any) => onTap?.(e.detail),
    };
    return flex ? (
      <FlexNative {...props}>{children}</FlexNative>
    ) : (
      <Native {...props}>{children}</Native>
    );
  },
);
