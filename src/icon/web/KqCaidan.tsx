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

const KqCaidan: FunctionComponent<Props> = ({
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
        d="M66.59792592 168.54281482h891.42309926a52.18607408 52.18607408 0 0 0 0-104.37214815H66.59792592a52.18607408 52.18607408 0 0 0 0 104.37214815zM958.02102518 459.81392592H66.59792592a52.18607408 52.18607408 0 0 0 0 104.37214816h891.42309926a52.18607408 52.18607408 0 0 0 0-104.37214816zM958.02102518 850.60266667H66.59792592a52.18607408 52.18607408 0 0 0 0 104.37214815h891.42309926a52.18607408 52.18607408 0 0 0 0-104.37214815z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqCaidan.defaultProps = {
  size: 18,
};

export default KqCaidan;
