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

const KqEye: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M511.968 870.4C312.096 870.4 122.4 738.368 4.512 517.248a38.336 38.336 0 0 1 0-36.096C122.4 260.032 312.096 128 511.968 128s389.568 132.032 507.52 353.152c6.016 11.264 6.016 24.832 0 36.096-117.952 221.12-307.648 353.152-507.52 353.152M82.208 499.2c105.792 187.392 261.568 294.464 429.76 294.464s323.968-107.072 429.824-294.464c-105.856-187.392-261.632-294.4-429.824-294.4S188 311.808 82.208 499.2M512 697.6a198.656 198.656 0 0 1-198.4-198.4c0-109.44 89.024-198.4 198.4-198.4s198.4 88.96 198.4 198.4c0 109.376-89.024 198.4-198.4 198.4m0-320c-67.072 0-121.6 54.528-121.6 121.6s54.528 121.6 121.6 121.6 121.6-54.528 121.6-121.6-54.528-121.6-121.6-121.6"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqEye.defaultProps = {
  size: 18,
};

export default KqEye;
