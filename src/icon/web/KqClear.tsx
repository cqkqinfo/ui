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

const KqClear: FunctionComponent<Props> = ({
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
        d="M512 652.51436215l327.95521883 327.95521884a99.28797854 99.28797854 0 1 0 140.51436216-140.51436216L652.64692287 512l327.82265812-327.95521883a99.28797854 99.28797854 0 1 0-140.51436216-140.51436216L512 371.35307713 184.04478117 43.53041901a99.28797854 99.28797854 0 1 0-140.51436216 140.51436216L371.35307713 512 43.53041901 839.95521883a99.28797854 99.28797854 0 1 0 140.51436216 140.51436216L512 652.64692287z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqClear.defaultProps = {
  size: 18,
};

export default KqClear;
