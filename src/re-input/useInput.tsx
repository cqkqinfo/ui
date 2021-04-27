import { useCallback, useState } from 'react';
import { useEffectState } from 'parsec-hooks';
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
  /**
   * 防抖优化等待时间
   * @default 5000
   */
  wait?: number;
}

export default ({
  value,
  onChange,
  onConfirm,
  onFocus,
  onBlur,
  className,
  wait = 5000,
  placeholderStyle,
  ...props
}: UseInputOption) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value2] = useEffectState(value, {
    wait: isFocus ? wait : 0,
    immediate: isFocus,
  });
  return {
    ...props,
    className: classNames(styles.input, className),
    value: value2,
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
