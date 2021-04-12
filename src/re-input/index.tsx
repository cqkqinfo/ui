import React from 'react';
import { Input } from 'remax/one';
import { InputProps } from '@remax/one/esm/hostComponents/Input/props';
import { useEffectState } from 'parsec-hooks';

export interface Props extends Omit<InputProps, 'onInput' | 'onConfirm'> {
  /**
   * 输入事件
   */
  onChange?: (value?: string) => void;
  /**
   * 确认事件
   */
  onConfirm?: (value: string | undefined) => void;
}

export default ({ value, onChange, onConfirm, ...props }: Props) => {
  const [value2, setValue2] = useEffectState(value, { wait: 300 });
  return (
    <Input
      {...props}
      value={value2}
      onInput={e => {
        const value = e.target.value;
        setValue2(value);
        onChange?.(value);
      }}
      onConfirm={() => onConfirm?.(value2)}
    />
  );
};
