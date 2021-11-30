import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import Native, { NativeInstance } from '../native';
import styles from './index.module.less';
import classNames from 'classnames';
import { useRefState } from 'parsec-hooks';
import Space from '../space';

export interface SheetProps {
  children: React.ReactNode;
  /**
   * 是否垂直居中
   */
  center?: boolean;
  className?: string;
  contentCls?: string;
}

export interface SheetInstance {
  setVisible: (visible: boolean) => void;
}

export default forwardRef<SheetInstance, SheetProps>(
  ({ children, className, contentCls, center }, ref) => {
    const nativeRef = useRef<NativeInstance>(null);
    const sheetInstanceRef = useRef<SheetInstance>({
      setVisible: visible => {
        return nativeRef.current?.setData({
          className: classNames(
            styles.sheet,
            className,
            visible && styles.show,
          ),
        });
      },
    });
    useImperativeHandle(ref, () => sheetInstanceRef.current);
    const content = useMemo(
      () => (
        <Space
          className={classNames(styles.content, contentCls)}
          onTap={() => sheetInstanceRef.current.setVisible(false)}
          justify={'center'}
          alignItems={center ? 'center' : 'flex-end'}
        >
          <Space onTap={e => e.stopPropagation()}>{children}</Space>
        </Space>
      ),
      [center, children, contentCls, sheetInstanceRef],
    );
    return useMemo(
      () => (
        <Native
          ref={nativeRef}
          initData={{ className: classNames(styles.sheet, className) }}
        >
          {content}
        </Native>
      ),
      [className, content],
    );
  },
);
