import React, { useEffect } from 'react';
import { RichText, RichTextProps, RichTextNode } from 'remax/ali';
import useProps from './useProps';
import parse from 'mini-html-parser2';

export default (props: RichTextProps) => {
  const { nodes, ...newProps } = useProps(props);
  let nodesParse: RichTextNode[] = [];
  useEffect(() => {
    parse(nodes, (err: any, htmlNodes: RichTextNode[]) => {
      if (!err) {
        nodesParse = htmlNodes;
      }
    });
  });
  return <RichText nodes={nodesParse} {...newProps} />;
};
