import { useCallback, useState } from 'react';
import { InputProps, TextareaProps } from 'remax/one';
import styles from './index.less';
import classNames from 'classnames';

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
}

export default ({
  value,
  onChange,
  onConfirm,
  onFocus,
  onBlur,
  className,
  placeholderStyle,
  ...props
}: UseInputOption) => {
  const [isFocus, setIsFocus] = useState(false);
  return {
    ...props,
    className: classNames(styles.input, className),
    value: isFocus ? undefined : value,
    placeholderStyle: {
      color: '#CCCCCC',
      ...placeholderStyle,
    },
    onInput: useCallback(
      (e: any) => {
        const value = e.target.value;
        onChange?.(value);
      },
      [onChange],
    ),
    onFocus: useCallback(
      e => {
        setIsFocus(true);
        onFocus?.(e);
      },
      [onFocus],
    ),
    onBlur: useCallback(
      e => {
        setIsFocus(false);
        onBlur?.(e);
      },
      [onBlur],
    ),
    onConfirm: useCallback(() => onConfirm?.(value), [onConfirm, value]),
  };
};
