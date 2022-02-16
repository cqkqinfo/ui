import { useCallback, useContext } from 'react';
import { InputProps, TextareaProps } from 'remax/one';
import styles from './index.module.less';
import classNames from 'classnames';
import { useConfig } from '../config-provider';
import { SheetContent } from '../sheet';
import getPlatform from '../get-platform';
import getCurrentPage from '../get-current-page';

export interface UseInputOption
  extends Omit<InputProps & TextareaProps, 'onConfirm' | 'onInput'> {
  /**
   * 值
   */
  value?: string;
  /**
   * 输入事件
   */
  onChange?: (value?: string) => void;
  /**
   * 确认事件
   */
  onConfirm?: (value?: string) => void;
  /**
   * 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
   */
  flex?: boolean;
  /**
   * 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离
   */
  cursorSpacing?: number;
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏
   */
  showConfirmBar?: boolean;
  /**
   * 键盘弹起时，是否自动上推页面
   */
  adjustPosition?: boolean;
  /**
   * 是否去掉 iOS 下的默认内边距
   */
  disableDefaultPadding?: boolean;
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   */
  confirmHold?: boolean;
  /**
   * 确认类型
   */
  confirmType?: string;
  /**
   * 占位字符类名
   */
  placeholderClassName?: string;
}

export default ({
  onChange,
  onConfirm,
  className,
  placeholderStyle,
  value,
  disabled,
  ...props
}: UseInputOption) => {
  const inSheet = useContext(SheetContent);
  const { isShowSheetPage } = useConfig();
  const page = getCurrentPage();
  const newProps = {
    adjustPosition: true,
    ...props,
    disabled: disabled || (page === isShowSheetPage && !inSheet),
    value,
    className: classNames(styles.input, className),
    placeholderStyle: {
      color: '#CCCCCC',
      ...placeholderStyle,
    },
    onInput: useCallback(
      (e: any) => {
        const value = e.detail?.value || e.target?.value;
        onChange?.(value);
        return {
          value: value || '',
        };
      },
      [onChange],
    ),
    onConfirm: useCallback(() => onConfirm?.(value), [onConfirm, value]),
  };
  if (getPlatform === 'web') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete newProps.adjustPosition;
    delete newProps.confirmType;
  }
  return newProps;
};
