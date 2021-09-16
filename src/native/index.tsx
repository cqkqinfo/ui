import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import React from 'react';
import { useId } from 'parsec-hooks';

export interface Data {
  /**
   * 行内样式
   */
  style?: string;
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
}

export default forwardRef<NativeInstance, Props>(
  ({ initData = {}, children }, ref) => {
    const [returns, setReturns] = useState<NativeInstance>({
      data: initData,
      setData: () => {},
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
                dom.setAttribute('style', style);
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
      >
        {children}
      </div>
    );
  },
);
