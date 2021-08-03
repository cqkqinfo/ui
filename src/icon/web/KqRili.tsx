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

const KqRili: FunctionComponent<Props> = ({
  size,
  color,
  style: _style,
  ...rest
}) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg
      viewBox="0 0 1034 1024"
      width={size + 'px'}
      height={size + 'px'}
      style={style}
      {...rest}
    >
      <path
        d="M967.370158 85.601229h-154.752195V0h-77.231288v85.601229H297.350115V0h-77.231289v85.601229H67.577377c-37.264097 0-67.577377 30.322935-67.577377 67.577378v803.244016c0 37.254443 30.313281 67.577377 67.577377 67.577377h899.792781c37.254443 0 67.577377-30.322935 67.577377-67.577377V153.178607c0-37.254443-30.322935-67.577377-67.577377-67.577378z m9.653911 870.821394a9.653911 9.653911 0 0 1-9.653911 9.653911H67.577377c-5.319305 0-9.653911-4.324952-9.653911-9.653911v-545.156358h919.013718v-57.923466H57.923466V153.178607c0-5.328959 4.334606-9.653911 9.653911-9.653911h152.541449v73.746226h77.231289v-73.746226h438.03656v73.746226h77.231288v-73.746226h154.752195a9.653911 9.653911 0 0 1 9.653911 9.653911v803.244016z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M259.835016 568.962902m-56.398148 0a56.398148 56.398148 0 1 0 112.796297 0 56.398148 56.398148 0 1 0-112.796297 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M517.478595 568.962902m-56.398149 0a56.398148 56.398148 0 1 0 112.796297 0 56.398148 56.398148 0 1 0-112.796297 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M775.112519 568.962902m-56.398148 0a56.398148 56.398148 0 1 0 112.796296 0 56.398148 56.398148 0 1 0-112.796296 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <path
        d="M259.835016 783.472806m-56.398148 0a56.398148 56.398148 0 1 0 112.796297 0 56.398148 56.398148 0 1 0-112.796297 0Z"
        fill={getIconColor(color, 4, '#333333')}
      />
      <path
        d="M517.478595 783.472806m-56.398149 0a56.398148 56.398148 0 1 0 112.796297 0 56.398148 56.398148 0 1 0-112.796297 0Z"
        fill={getIconColor(color, 5, '#333333')}
      />
      <path
        d="M775.112519 783.472806m-56.398148 0a56.398148 56.398148 0 1 0 112.796296 0 56.398148 56.398148 0 1 0-112.796296 0Z"
        fill={getIconColor(color, 6, '#333333')}
      />
    </svg>
  );
};

KqRili.defaultProps = {
  size: 18,
};

export default KqRili;
