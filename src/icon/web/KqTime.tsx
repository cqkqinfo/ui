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

const KqTime: FunctionComponent<Props> = ({
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
        d="M512.056311 0a511.992489 511.992489 0 1 0 511.944028 511.750183A512.525562 512.525562 0 0 0 512.056311 0z m0 954.685473a442.692985 442.692985 0 1 1 442.450679-442.93529 443.177597 443.177597 0 0 1-442.450679 442.93529z m34.746675-456.989036V207.898512a34.746674 34.746674 0 0 0-69.493349 0v303.851671a40.125867 40.125867 0 0 0 0.678457 7.269178c0 0.969224 0.581534 1.938448 0.872301 2.907672s0.629995 2.42306 1.114607 3.392283 1.163069 2.42306 1.744603 3.392284l1.453836 2.423059a27.622879 27.622879 0 0 0 4.361507 5.330731l195.153219 195.298602a34.698213 34.698213 0 1 0 49.139648-48.945803z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </svg>
  );
};

KqTime.defaultProps = {
  size: 18,
};

export default KqTime;
