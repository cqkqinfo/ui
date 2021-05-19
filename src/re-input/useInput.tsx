import { useCallback } from 'react';
import { InputProps, TextareaProps } from 'remax/one';
import styles from './index.module.less';
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
  onChange,
  onConfirm,
  className,
  placeholderStyle,
  value,
  ...props
}: UseInputOption) => {
  return {
    ...props,
    value,
    className: classNames(styles.input, className),
    placeholderStyle: {
      color: '#CCCCCC',
      ...placeholderStyle,
    },
    onInput: useCallback(
      (e: any) => {
        const value = e.detail?.value || e.target.value;
        onChange?.(value);
        return {
          value,
        };
      },
      [onChange],
    ),
    onConfirm: useCallback(() => onConfirm?.(value), [onConfirm, value]),
  };
};
