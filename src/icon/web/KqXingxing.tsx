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

const KqXingxing: FunctionComponent<Props> = ({
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
        d="M949.12 386.592c-4.864-15.008-17.856-25.952-33.44-28.192l-256.992-37.344-114.944-232.896c-6.976-14.144-21.376-23.104-37.152-23.104-15.776 0-30.176 8.96-37.152 23.104l-114.944 232.896L97.472 358.4c-15.616 2.272-28.576 13.184-33.44 28.192s-0.8 31.456 10.496 42.464l185.984 181.28-43.904 255.968c-2.656 15.552 3.712 31.264 16.48 40.544 12.768 9.28 29.664 10.496 43.648 3.136l229.888-120.864 229.856 120.864c6.048 3.168 12.672 4.768 19.264 4.768 8.576 0 17.152-2.656 24.352-7.904 12.768-9.28 19.136-24.992 16.48-40.544l-43.904-255.968 185.984-181.28C949.92 418.048 953.984 401.6 949.12 386.592z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqXingxing.defaultProps = {
  size: 18,
};

export default KqXingxing;
