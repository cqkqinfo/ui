/* eslint-disable @typescript-eslint/ban-ts-comment */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import React from 'react';
import { NativeInstance, Props } from './index';
import { View } from 'remax/one';
import { useForceUpdate } from 'parsec-hooks';

export default React.memo(
  forwardRef<NativeInstance, Props>(({ initData, children, onTap }, ref) => {
    const { forceUpdate } = useForceUpdate();
    const returnsRef = useRef<NativeInstance>({
      data: {
        style: {
          // @ts-ignore
          ...initData?.className,
          // @ts-ignore
          ...initData?.style,
        },
      },
      setData: ({ visible, style, content, className }: any) => {
        style = {
          // @ts-ignore
          ...initData?.className,
          // @ts-ignore
          ...initData?.style,
          ...className,
          ...style,
        };
        if (style.position === 'fixed') {
          delete style.position;
        }
        if (visible === false) {
          style.display = 'none';
        }
        if (content !== returnsRef.current.data.content) {
          returnsRef.current.data.content = content;
          forceUpdate();
        }
        if (
          JSON.stringify(style) !==
          JSON.stringify(returnsRef.current.data.style)
        ) {
          console.log(style, returnsRef.current.data.style);
          returnsRef.current.data.style = style;
          setNativePropsRef.current?.({
            style,
          });
        }
      },
    });
    const setNativePropsRef = useRef<any>(null);
    useImperativeHandle(ref, () => returnsRef.current, []);
    const initRef = useRef(false);
    return (
      <View
        onTap={onTap}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref => {
          setNativePropsRef.current = ref?.view?.current?.setNativeProps;
          if (!initRef.current && setNativePropsRef.current) {
            // @ts-ignore
            returnsRef.current.setData(initData);
            initRef.current = true;
          }
        }}
        className={initData?.className}
        style={initData?.style as any}
      >
        {children}
        {returnsRef.current.data.content}
      </View>
    );
  }),
  ({ reRender = true }: any) => reRender,
);
