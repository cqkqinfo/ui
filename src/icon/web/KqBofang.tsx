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

const KqBofang: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M868.266667 618.666667L256 996.266667c-96 59.733333-172.8 19.2-172.8-89.6v-789.333334c0-108.8 76.8-149.333333 172.8-89.6L868.266667 405.333333c96 59.733333 96 153.6 0 213.333334z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqBofang.defaultProps = {
  size: 18,
};

export default KqBofang;
