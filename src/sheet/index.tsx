import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import Native, { NativeInstance } from '../native';
import styles from './index.module.less';
import classNames from 'classnames';
import Space from '../space';
import { switchVariable } from '@kqinfo/ui';
import getCurrentPage from '../get-current-page';

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
  onClose?: () => void;
}

export interface SheetInstance {
  setVisible: (visible: boolean) => void;
}

const Sheet = forwardRef<SheetInstance, SheetProps>(
  (
    { children, className, direction = 'bottom', contentCls, center, onClose },
    ref,
  ) => {
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
          onTap={() => {
            sheetInstanceRef.current.setVisible(false);
            onClose?.();
          }}
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
      [center, children, contentCls, direction, onClose],
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

export default Sheet;

export interface SheetWrapInstance {
  promiseRef: { resolve: (data?: any) => {}; reject: (data?: any) => {} };
  sheetRef: SheetInstance | null;
}

export interface SheetWrapData {
  [page: string]: {
    fn: (options: any) => Promise<any>;
    setVisible?: (visible: boolean) => void;
  };
}
export const SheetWrap = forwardRef(
  (
    {
      data,
      children,
      setOptions,
      ...props
    }: {
      children: React.ReactNode;
      setOptions: (options: any) => void;
      data: SheetWrapData;
    } & SheetProps,
    ref: ForwardedRef<SheetWrapInstance>,
  ) => {
    const page = getCurrentPage();
    const sheetRef = useRef<SheetInstance>(null);
    const [promiseFn, setPromiseFn] = useState<any>({
      resolve: () => {},
      reject: () => {},
    });
    useEffect(() => {
      data[page] = {
        fn: options =>
          new Promise((resolve, reject) => {
            setOptions(options);
            sheetRef.current?.setVisible(true);
            setPromiseFn({ reject, resolve });
          }),
        setVisible: sheetRef.current?.setVisible,
      };
    }, [data, page, setOptions]);
    useImperativeHandle(
      ref,
      () => ({ promiseRef: promiseFn, sheetRef: sheetRef.current }),
      [promiseFn],
    );
    return (
      <Sheet ref={sheetRef} {...props}>
        {children}
      </Sheet>
    );
  },
);
