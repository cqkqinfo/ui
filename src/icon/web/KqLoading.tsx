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

const KqLoading: FunctionComponent<Props> = ({
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
        d="M512 1012.59946667a500.59946667 500.59946667 0 1 0-475.5456-343.72266667A45.53386667 45.53386667 0 1 0 122.88 640.34133333 409.6 409.6 0 1 1 512 921.6a45.53386667 45.53386667 0 1 0 0 90.99946667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqLoading.defaultProps = {
  size: 18,
};

export default KqLoading;
