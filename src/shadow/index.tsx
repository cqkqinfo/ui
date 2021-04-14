import React from 'react';
import provider from '../config-provider';

const ColorRNA = require('color-rna').default;

export interface Props {
  children: React.ReactElement;
  style?: React.CSSProperties;
}

export default ({ children, ...props }: Props) => {
  const { brandPrimary, shadowColor = brandPrimary } = provider.useContainer();
  return React.cloneElement(children, {
    ...children.props,
    ...props,
    style: {
      ...children.props.style,
      ...props.style,
      boxShadow: `2px 2px 20px rgba(${new ColorRNA(shadowColor)
        .rgb()
        .join(',')}, 0.15)`,
    },
  });
};
