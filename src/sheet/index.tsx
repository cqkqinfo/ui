import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import Native from '../native';
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
    const [sheetInstance, setSheetInstance, sheetInstanceRef] = useRefState<
      SheetInstance
    >({
      setVisible: () => {},
    });
    useImperativeHandle(ref, () => sheetInstance, [sheetInstance]);
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
          ref={ref => {
            if (ref) {
              setSheetInstance({
                setVisible: visible => {
                  return ref.setData({
                    className: classNames(
                      styles.sheet,
                      className,
                      visible && styles.show,
                    ),
                  });
                },
              });
            }
          }}
          initData={{ className: classNames(styles.sheet, className) }}
        >
          {content}
        </Native>
      ),
      [className, content, setSheetInstance],
    );
  },
);
