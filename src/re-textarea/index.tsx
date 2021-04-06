import React from 'react';
import { Textarea } from 'remax/one';
import { InputProps } from '@remax/one/esm/hostComponents/Input/props';
import { useEffectState } from 'parsec-hooks';

export default ({
  value,
  onChange,
  ...props
}: Omit<InputProps, 'onInput'> & {
  onChange?: (value: string) => void;
}) => {
  const [value2, setValue2] = useEffectState(value, { wait: 300 });
  return (
    <Textarea
      {...props}
      value={value2}
      onInput={e => {
        const value = e.target.value;
        setValue2(value);
        onChange?.(value);
      }}
    />
  );
};
