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

const KqLeft: FunctionComponent<Props> = ({
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
        d="M776.374693 954.312991l-442.269486-442.269486 442.269486-442.269486a40.793953 40.793953 0 0 0-57.993933-57.721933L247.556307 482.876539a40.793953 40.793953 0 0 0 0 57.722933l470.824453 471.436452a40.793953 40.793953 0 0 0 57.721933 0 40.793953 40.793953 0 0 0 0.272-57.722933z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqLeft.defaultProps = {
  size: 18,
};

export default KqLeft;
