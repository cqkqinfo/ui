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

const KqZanting: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M165.73718099 0m36.755205 0l52.437425 0q36.755205 0 36.755205 36.755205l0 950.48959q0 36.755205-36.755205 36.755205l-52.437425 0q-36.755205 0-36.755205-36.755205l0-950.48959q0-36.755205 36.755205-36.755205Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M725.88649899 0m36.755205 0l52.437425 0q36.755205 0 36.755205 36.755205l0 950.48959q0 36.755205-36.755205 36.755205l-52.437425 0q-36.755205 0-36.755205-36.755205l0-950.48959q0-36.755205 36.755205-36.755205Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

KqZanting.defaultProps = {
  size: 18,
};

export default KqZanting;
