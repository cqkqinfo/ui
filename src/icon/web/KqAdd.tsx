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

const KqAdd: FunctionComponent<Props> = ({
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
        d="M583.55791267 440.44208733L583.55791267 11.42977713 440.44208733 11.42977713 440.44208733 440.44208733 11.42977713 440.44208733 11.42977713 583.55791267 440.44208733 583.55791267 440.44208733 1012.57022287 583.55791267 1012.57022287 583.55791267 583.55791267 1012.57022287 583.55791267 1012.57022287 440.44208733Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqAdd.defaultProps = {
  size: 18,
};

export default KqAdd;
