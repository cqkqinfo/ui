import { useCallback, useState } from 'react';
import { useEffectState } from 'parsec-hooks';
import { InputProps, TextareaProps } from 'remax/one';

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
  wait = 5000,
  ...props
}: UseInputOption) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value2] = useEffectState(value, {
    wait: isFocus ? wait : 0,
    immediate: isFocus,
  });
  return {
    ...props,
    value: value2,
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
