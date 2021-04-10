import React from 'react';
import { RichTextProps } from 'remax/wechat';
import useProps from './useProps';

export default (props: RichTextProps) => {
  const { nodes, ...newProps } = useProps(props);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: nodes as string }}
      {...(newProps as any)}
    />
  );
};
