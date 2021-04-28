import React from 'react';
import { Textarea } from 'remax/wechat';
import useInput, { UseInputOption } from '../re-input/useInput';

export type Props = UseInputOption;

export default (props: UseInputOption) => {
  const newProps = useInput(props);
  return <Textarea {...(newProps as any)} />;
};
