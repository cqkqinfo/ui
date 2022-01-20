import { forwardRef, useImperativeHandle, useRef } from 'react';
import React from 'react';
import { useId, useRefState } from 'parsec-hooks';
import { TapEvent } from '@remax/one/esm/types';
import plainStyle from '@remax/one/esm/useWebPlaceholderStyle/plainStyle';

export interface Data {
  /**
   * 行内样式
   */
  style?: string | React.CSSProperties;
  content?: string | number;
  className?: string;
  /**
   * 是否显示
   */
  visible?: boolean;
}

export type NativeInstance = {
  setData: (data: Data, callBack?: () => void) => void;
  data: Data;
};

export interface Props {
  children?: React.ReactNode;
  /**
   * 初始数据
   */
  initData?: Data;
  /**
   * flex模式
   */
  flex?: boolean;
  onTap?: (event: TapEvent) => void;
}

export default forwardRef<NativeInstance, Props>(
  ({ initData = {}, children, onTap }, ref) => {
    const [returns, setReturns, returnsRef] = useRefState<NativeInstance>({
      data: initData,
      setData: data => {
        returnsRef.current.setData(data);
      },
    });
    useImperativeHandle(ref, () => returns, [returns]);
    const id = useId();
    const initRef = useRef(true);
    return (
      <div
        id={id}
        ref={() => {
          const dom = document.getElementById(id);
          if (dom && initRef.current) {
            initRef.current = false;
            const newReturns: NativeInstance = {
              data: returns.data,
              setData: (newData, callBack) => {
                const {
                  style = (returns.data.style = ''),
                  visible = (returns.data.visible = true),
                  content = returns.data.content,
                  className = (returns.data.className = ''),
                } = newData;
                dom.setAttribute(
                  'style',
                  typeof style === 'object' ? plainStyle(style) : style,
                );
                dom.hidden = !visible;
                if (content !== undefined) {
                  dom.innerText = content + '';
                }
                dom.className = className;
                newReturns.data = { style, content, visible, className };
                callBack?.();
              },
            };
            setReturns(newReturns);
            if (initData) {
              newReturns.setData(initData);
            }
          }
        }}
        onClick={onTap as any}
      >
        {children}
      </div>
    );
  },
);
