import React from 'react';
import { Textarea } from 'remax/one';
import { InputProps } from '@remax/one/esm/hostComponents/Input/props';
import { useEffectState } from 'parsec-hooks';

export default ({
  value,
  onChange,
  onConfirm,
  ...props
}: Omit<InputProps, 'onInput' | 'onConfirm'> & {
  /**
   * 输入事件
   */
  onChange?: (value?: string) => void;
  /**
   * 确认事件
   */
  onConfirm?: (value?: string) => void;
}) => {
  const [value2, setValue2] = useEffectState(value, { wait: 300 });
  return (
    <Textarea
      {...props}
      value={value2}
      onBlur={() => onChange?.(value2)}
      onConfirm={() => onConfirm?.(value2)}
      onInput={e => {
        const value = e.target.value;
        setValue2(value);
      }}
    />
  );
};
