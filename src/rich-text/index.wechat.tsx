import React from 'react';
import { RichText, RichTextProps } from 'remax/wechat';
import useProps from './useProps';

export default (props: RichTextProps) => {
  const newProps = useProps(props);
  return <RichText {...newProps} />;
};
