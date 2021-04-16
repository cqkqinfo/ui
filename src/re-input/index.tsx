import React from 'react';
import { Input } from 'remax/one';
import useInput, { UseInputOption } from './useInput';

export type Props = UseInputOption;

export default (props: UseInputOption) => {
  const newProps = useInput(props);
  return <Input {...newProps} />;
};
