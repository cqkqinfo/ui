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

const KqXihuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512.023 980.34l-426.403-428.521c-53.225-55.389-82.385-127.767-82.385-204.079 0-162.327 132.049-294.377 294.377-294.377 82.362 0 159.046 33.396 214.412 92.486 55.343-59.113 132.026-92.486 214.388-92.486 162.327 0 294.353 132.049 294.353 294.377 0 80.803-31.953 156.02-89.972 211.759l-418.769 420.841z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqXihuan.defaultProps = {
  size: 18,
};

export default KqXihuan;
