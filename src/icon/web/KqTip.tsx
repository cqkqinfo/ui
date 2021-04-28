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

const KqTip: FunctionComponent<Props> = ({
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
        d="M571.134948 546.559968a59.134953 59.134953 0 1 1-118.269906 0V270.852186a59.134953 59.134953 0 1 1 118.269906 0zM511.999995 802.552765a58.878953 58.878953 0 1 1 41.726967-17.150986A57.086955 57.086955 0 0 1 511.999995 802.553765zM511.999995 0.0104a501.749603 501.749603 0 0 0-199.419842 39.935968A509.685597 509.685597 0 0 0 39.946368 312.580153 501.749603 501.749603 0 0 0 0.0104 511.999995a501.749603 501.749603 0 0 0 39.935968 199.419842A509.685597 509.685597 0 0 0 312.580153 984.054622 501.749603 501.749603 0 0 0 511.999995 1023.98959a501.749603 501.749603 0 0 0 199.419842-39.934968A509.685597 509.685597 0 0 0 984.054622 711.419837 501.749603 501.749603 0 0 0 1023.98959 511.999995a501.749603 501.749603 0 0 0-39.934968-199.419842A509.685597 509.685597 0 0 0 711.419837 39.946368 501.749603 501.749603 0 0 0 511.999995 0.0104z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqTip.defaultProps = {
  size: 18,
};

export default KqTip;
