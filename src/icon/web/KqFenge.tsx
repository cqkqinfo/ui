/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const KqFenge: FunctionComponent<Props> = ({
  size,
  color,
  style: _style,
  ...rest
}) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size + 'px'}
      height={size + 'px'}
      style={style}
      {...rest}
    >
      <path
        d="M512 1024c-22.016 0-39.936-17.92-39.936-39.936V39.936c0-22.016 17.92-39.936 39.936-39.936s39.936 17.92 39.936 39.936v943.616c0 22.528-17.92 40.448-39.936 40.448"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqFenge.defaultProps = {
  size: 18,
};

export default KqFenge;
