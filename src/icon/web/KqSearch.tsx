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

const KqSearch: FunctionComponent<Props> = ({
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
        d="M823.17463666 771.71674112l-51.45789554 51.45789554 158.50002887 158.56071111a36.40888889 36.40888889 0 0 0 51.51857778 0 36.40888889 36.40888889 0 0 0 0-51.51857778l-158.56071111-158.50002887z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M492.76396999 104.40248889a388.3614811 388.3614811 0 1 1-274.58370332 113.77777778 385.81285888 385.81285888 0 0 1 274.58370332-113.77777778m0-72.81777778a461.17925888 461.17925888 0 1 0 326.10228224 135.07697778 459.72290333 459.72290333 0 0 0-326.10228224-135.07697778z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

KqSearch.defaultProps = {
  size: 18,
};

export default KqSearch;
