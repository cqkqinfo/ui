import React, { useEffect, useState } from 'react';
import { RichText, RichTextProps, RichTextNode } from 'remax/ali';
import useProps from './useProps';
import parse from 'mini-html-parser2';

export default (props: RichTextProps) => {
  const { nodes, ...newProps } = useProps(props);
  const [nodesParse, setNodesParse] = useState<RichTextNode[]>([]);

  useEffect(() => {
    parse(nodes, (err: any, htmlNodes: RichTextNode[]) => {
      if (!err) {
        setNodesParse(htmlNodes);
      }
    });
  }, [nodes]);

  return <RichText nodes={nodesParse} {...newProps} />;
};
