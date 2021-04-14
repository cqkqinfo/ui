import React from 'react';
import provider from '../config-provider';

const ColorRNA = require('color-rna').default;

export interface Props {
  children: React.ReactElement;
  style?: React.CSSProperties;
}

export default ({ children, ...props }: Props) => {
  const { brandPrimary } = provider.useContainer();
  return React.cloneElement(children, {
    ...children.props,
    ...props,
    style: {
      ...children.props.style,
      ...props.style,
      boxShadow: `2px 2px 20px rgba(${new ColorRNA(brandPrimary)
        .rgb()
        .join(',')}, 0.15)`,
    },
  });
};
