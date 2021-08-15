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

const KqTag: FunctionComponent<Props> = ({
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
        d="M1029.0256403 447.45432178l-35.92343705-379.39033126a41.36049778 41.36049778 0 0 0-36.97201303-37.12735763h-0.15534459l-379.85636504-35.92343704h-0.54370607a12.5052397 12.5052397 0 0 0-8.69929719 3.53408948L-1.45271467 566.87547733a12.03920592 12.03920592 0 0 0 0 17.16557749l441.5281683 441.52816829c2.29133275 2.29133275 5.3205523 3.53408948 8.62162489 3.53408948s6.291456-1.20392059 8.62162489-3.53408948L1025.64689541 457.24103111a12.42756741 12.42756741 0 0 0 3.41758104-8.62162489l-0.03883615-1.1262483v0.03883616zM448.54173392 903.62371792l-328.16545184-328.16545184L605.47860859 90.35593955l299.77622756 28.3892243 28.3892243 299.77622756-485.10232653 485.10232651zM715.88977778 201.31081482c-58.87560059 0-106.79940741 47.92380682-106.79940741 106.7994074s47.92380682 106.79940741 106.79940741 106.79940741S822.68918518 366.98582282 822.68918518 308.11022222 774.76537837 201.31081482 715.88977778 201.31081482z m0 145.63555555a38.83614815 38.83614815 0 0 1 0-77.67229629 38.83614815 38.83614815 0 0 1 0 77.67229629z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqTag.defaultProps = {
  size: 18,
};

export default KqTag;
