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

const KqMenuTwo: FunctionComponent<Props> = ({
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
        d="M90.258176 848.52215466L933.08326402 848.52215466c46.36262401 0 84.29568 37.933056 84.29567998 84.29568s-37.933056 84.29568-84.29567999 84.29568001l-842.69337602 0c-46.36262401 0-84.29568-37.933056-84.29568-84.29568001-0.13171201-46.36262402 37.801344-84.29568 84.16396801-84.29568zM90.258176 435.86845867L928.078208 435.86845867c46.36262401 0 84.29568 37.933056 84.29568 84.29567999s-37.933056 84.29568-84.29568 84.29568l-837.820032 0c-46.36262401 0-84.29568-37.933056-84.29568-84.29568s37.933056-84.29568 84.29568-84.29567999zM90.258176 15.70717865L933.08326401 15.70717864c46.36262401 0 84.29568 37.933056 84.29567999 84.29568001s-37.933056 84.29568-84.29567999 84.29568003l-842.69337601 0c-46.36262401 0-84.29568-37.933056-84.29568001-84.29568003-0.13171201-46.36262402 37.801344-84.29568 84.16396801-84.29568z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </svg>
  );
};

KqMenuTwo.defaultProps = {
  size: 18,
};

export default KqMenuTwo;
