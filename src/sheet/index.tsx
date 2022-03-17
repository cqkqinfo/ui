import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  createContext,
} from 'react';
import Native, { NativeInstance } from '../native';
import styles from './index.module.less';
import classNames from 'classnames';
import Space from '../space';
import switchVariable from '../switch-variable';
import getCurrentPage from '../get-current-page';
import { useConfig } from '../config-provider';

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
  style?: React.CSSProperties;
}

export interface SheetInstance {
  setVisible: (visible: boolean) => void;
}

export const SheetContent = createContext(false);

const Sheet = forwardRef<SheetInstance, SheetProps>(
  (
    {
      style,
      children,
      className,
      direction = 'bottom',
      contentCls,
      center,
      onClose,
    },
    ref,
  ) => {
    const { setIsShowSheetPage } = useConfig();
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
    const currentPage = getCurrentPage();
    const [visible, setVisible] = useState(false);
    useImperativeHandle(ref, () => ({
      ...sheetInstanceRef.current,
      setVisible: visible => {
        setVisible(visible);
        setIsShowSheetPage?.(visible ? currentPage : '');
        sheetInstanceRef.current.setVisible(visible);
      },
    }));
    useEffect(() => {
      return () => {
        setIsShowSheetPage?.('');
      };
    }, [setIsShowSheetPage]);
    const content = useMemo(
      () => (
        <SheetContent.Provider value={true}>
          <Space
            className={classNames(
              styles.content,
              visible && styles.showContent,
              contentCls,
              styles[direction],
            )}
            style={style}
            onTap={() => {
              setIsShowSheetPage?.('');
              setVisible(false);
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
        </SheetContent.Provider>
      ),
      [
        center,
        children,
        contentCls,
        direction,
        onClose,
        setIsShowSheetPage,
        style,
        visible,
      ],
    );
    return useMemo(
      () => (
        <Native
          ref={nativeRef}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          reRender={false}
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
