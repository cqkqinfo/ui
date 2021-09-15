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

const KqFilter: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M394.16825023 528.24920891L23.4106472 157.49160588A58.91587557 58.91587557 0 0 1 65.06417183 56.92220707h893.87165634a58.91587557 58.91587557 0 0 1 41.65352463 100.56939881L629.83174977 528.24920891v471.32700048l-235.66349954-117.83174978v-353.4952507z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqFilter.defaultProps = {
  size: 18,
};

export default KqFilter;
