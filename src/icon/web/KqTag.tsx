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
        d="M938.016 458.816l-29.6-312.608a34.08 34.08 0 0 0-30.464-30.592h-0.128l-312.992-29.6h-0.448a10.304 10.304 0 0 0-7.168 2.912L88.928 557.216a9.92 9.92 0 0 0 0 14.144l363.808 363.808c1.888 1.888 4.384 2.912 7.104 2.912s5.184-0.992 7.104-2.912L935.232 466.88a10.24 10.24 0 0 0 2.816-7.104l-0.032-0.928v0.032zM459.712 834.688l-270.4-270.4L589.024 164.576l247.008 23.392 23.392 247.008-399.712 399.712zM680 256c-48.512 0-88 39.488-88 88s39.488 88 88 88S768 392.512 768 344 728.512 256 680 256z m0 120a32 32 0 0 1 0-64 32 32 0 0 1 0 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqTag.defaultProps = {
  size: 18,
};

export default KqTag;
