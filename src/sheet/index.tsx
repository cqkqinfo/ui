import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import Native, { NativeInstance } from '../native';
import styles from './index.module.less';
import classNames from 'classnames';
import Space from '../space';
import { switchVariable } from '@kqinfo/ui';

export interface SheetProps {
  children: React.ReactNode;
  /**
   * 是否垂直居中
   */
  center?: boolean;
  className?: string;
  contentCls?: string;
  /**
   * 动画方向
   * @default bottom
   */
  direction?: 'left' | 'top' | 'right' | 'bottom';
}

export interface SheetInstance {
  setVisible: (visible: boolean) => void;
}

export default forwardRef<SheetInstance, SheetProps>(
  ({ children, className, direction = 'bottom', contentCls, center }, ref) => {
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
          className={classNames(styles.content, contentCls, styles[direction])}
          onTap={() => sheetInstanceRef.current.setVisible(false)}
          justify={switchVariable({
            default: 'center',
            left: 'flex-start',
            right: 'flex-end',
          })(direction)}
          alignItems={
            center
              ? 'center'
              : switchVariable({
                  bottom: 'flex-end',
                  default: 'flex-start',
                })(direction)
          }
        >
          <Space onTap={e => e.stopPropagation()}>{children}</Space>
        </Space>
      ),
      [center, children, contentCls, direction],
    );
    return useMemo(
      () => (
        <Native
          ref={nativeRef}
          initData={{
            className: classNames(styles.sheet, className),
          }}
        >
          {content}
        </Native>
      ),
      [className, content],
    );
  },
);
