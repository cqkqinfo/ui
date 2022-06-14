/* eslint-disable @typescript-eslint/ban-ts-comment */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import React from 'react';
import { NativeInstance, Props } from './index';
import { View } from 'remax/one';

export default forwardRef<NativeInstance, Props>(
  ({ initData, children, onTap }, ref) => {
    const returnsRef = useRef<NativeInstance>({
      data: {
        style: {
          // @ts-ignore
          ...initData?.className,
          // @ts-ignore
          ...initData?.style,
        },
      },
      setData: ({ visible, style, content, className }: any = {}) => {
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
          setTextNativePropsRef.current?.({
            text: content,
          });
        }
        if (
          JSON.stringify(style) !==
          JSON.stringify(returnsRef.current.data.style)
        ) {
          returnsRef.current.data.style = style;
          setTextNativePropsRef.current?.({
            style: {
              color: style.color,
            },
          });
          setViewNativePropsRef.current?.({
            style,
          });
        }
      },
    });
    const setViewNativePropsRef = useRef<any>(null);
    const setTextNativePropsRef = useRef<any>(null);
    useImperativeHandle(ref, () => returnsRef.current, []);
    const initRef = useRef(false);
    return (
      <View
        onTap={onTap}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref => {
          setViewNativePropsRef.current = ref?.view?.current?.setNativeProps;
          setTextNativePropsRef.current = ref?.text?.current?.setNativeProps;
          if (!initRef.current && setViewNativePropsRef.current) {
            // @ts-ignore
            returnsRef.current.setData(initData);
            initRef.current = true;
          }
        }}
        className={initData?.className}
        style={initData?.style as any}
      >
        {children || ''}
      </View>
    );
  },
);
