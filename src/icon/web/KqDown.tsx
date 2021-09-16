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

const KqDown: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M965.46812628 219.26174551H58.53187372c-27.20256421 0-42.39181327 28.72148912-25.54555523 48.3294288l453.46812628 525.82418542c12.97990373 15.05116498 37.97312263 15.05116498 51.09111046 0L991.01368151 267.59117431c16.84625804-19.6079397 1.65700898-48.3294288-25.54555523-48.3294288z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqDown.defaultProps = {
  size: 18,
};

export default KqDown;
