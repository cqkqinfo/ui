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

const KqHomeSolid: FunctionComponent<Props> = ({
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
        d="M528.516129-0.033032l-495.483871 396.387097 33.032258 627.612903 924.903226-33.032258v-594.580645l-462.451613-396.387097z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M297.290323 627.612903h462.451612v132.129032H297.290323v-132.129032z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

KqHomeSolid.defaultProps = {
  size: 18,
};

export default KqHomeSolid;
