import React from 'react';

export interface Props {
  children: React.ReactElement;
  style?: React.CSSProperties;
}

export default ({ children, ...props }: Props) =>
  React.cloneElement(children, {
    ...children.props,
    ...props,
    style: {
      ...children.props.style,
      ...props.style,
      boxShadow: `2px 2px 20px rgb(39, 128, 217, 0.15)`,
    },
  });
