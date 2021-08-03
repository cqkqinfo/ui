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

const KqHome: FunctionComponent<Props> = ({
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
        d="M1003.80444445 431.2064l-443.73333334-390.06435556a72.81777778 72.81777778 0 0 0-96.14222222 0l-443.73333334 390.06435556c-25.22453333 22.15253333-9.53457778 63.71555555 24.04124445 63.71555555H111.50222222V897.42222222a72.81777778 72.81777778 0 0 0 72.81777778 72.81777778h655.36a72.81777778 72.81777778 0 0 0 72.81777778-72.81777778V494.95608888h67.26542222c33.57582222 0 49.2544-41.59715555 24.04124445-63.74968888z m-278.40284445 229.83111111C678.45688889 740.64782222 598.15253333 788.19555555 510.63466667 788.19555555c-85.17404445 0-164.28373333-45.57937778-211.62666667-121.91288889a36.40888889 36.40888889 0 1 1 61.89511111-38.36586666c33.96266667 54.74986667 89.88444445 87.46097778 149.73155556 87.46097778 61.44 0 118.32888889-34.13333333 152.05262222-91.30666667a36.40888889 36.40888889 0 1 1 62.71431111 36.97777777z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqHome.defaultProps = {
  size: 18,
};

export default KqHome;
