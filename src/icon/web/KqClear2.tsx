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

const KqClear2: FunctionComponent<Props> = ({
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
        d="M512 32C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S777.6 32 512 32m201.6 681.6c-12.8 12.8-35.2 12.8-48 0L512 560 358.4 713.6c-12.8 12.8-35.2 12.8-48 0-12.8-12.8-12.8-35.2 0-48L464 512 310.4 358.4c-12.8-12.8-12.8-35.2 0-48 12.8-12.8 35.2-12.8 48 0L512 464l153.6-153.6c12.8-12.8 35.2-12.8 48 0 12.8 12.8 12.8 35.2 0 48L560 512l153.6 153.6c16 12.8 16 35.2 0 48m0 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqClear2.defaultProps = {
  size: 18,
};

export default KqClear2;
