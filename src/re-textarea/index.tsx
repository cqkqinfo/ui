import React from 'react';
import { View } from 'remax/one';
import Textarea, { Props as TextareaProps } from './one';
import { useEffectState } from 'parsec-hooks';
export interface Props extends TextareaProps {
  showCount?: boolean;
}
export default ({ showCount, value, onChange, ...props }: Props) => {
  const [value2, setValue2] = useEffectState(value);
  return (
    <>
      <Textarea
        {...props}
        value={value2}
        onChange={v => {
          setValue2(v);
          onChange?.(v);
        }}
      />
      {showCount && (
        <View style={{ textAlign: 'right' }}>{`${value2?.length || 0} / ${
          props.maxLength
        }`}</View>
      )}
    </>
  );
};
