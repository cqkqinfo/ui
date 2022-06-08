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
  useState,
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
    const [thisRef, setThisRef] = useState<NativeInstance>({
      data: {},
      setData: data => (dataRef.current = data),
    });
    useImperativeHandle(ref, () => thisRef, [thisRef]);
    const preInitData = usePrevious(initData);
    useEffect(() => {
      if (
        JSON.stringify(preInitData) !== JSON.stringify(initData) &&
        initData
      ) {
        thisRef.setData(initData);
      }
    }, [initData, preInitData, thisRef]);
    const preDataStr = useRef(JSON.stringify(dataRef.current));
    return flex ? (
      <FlexNative
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindtap={(e: any) => onTap?.(e.detail)}
        bindthis={({ detail }: any) => {
          detail.setData(dataRef.current);
          setThisRef({
            ...detail,
            setData: data => {
              if (preDataStr.current !== JSON.stringify(data)) {
                detail.setData({ visible, className, style, content, ...data });
                preDataStr.current = JSON.stringify(data);
              }
            },
          });
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
        bindtap={(e: any) => onTap?.(e.detail)}
        bindthis={({ detail }: any) => {
          detail.setData(dataRef.current);
          setThisRef({
            ...detail,
            setData: data => {
              if (preDataStr.current !== JSON.stringify(data)) {
                detail.setData({ visible, className, style, content, ...data });
                preDataStr.current = JSON.stringify(data);
              }
            },
          });
        }}
      >
        {children}
      </Native>
    );
  },
);
