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

const KqJianshao: FunctionComponent<Props> = ({
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
        d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m290.72 490.09c0 16.57-13.43 30-30 30H251.28c-16.57 0-30-13.43-30-30v-0.17c0-16.57 13.43-30 30-30h521.44c16.57 0 30 13.43 30 30v0.17z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqJianshao.defaultProps = {
  size: 18,
};

export default KqJianshao;
