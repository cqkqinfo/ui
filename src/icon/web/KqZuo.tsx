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

const KqZuo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 3.41333333C231.13500445 3.41333333 3.41333333 231.13500445 3.41333333 512c0 280.86499555 227.72167111 508.58666667 508.58666667 508.58666667 280.86499555 0 508.58666667-227.72167111 508.58666667-508.58666667C1020.58666667 231.13500445 792.86499555 3.41333333 512 3.41333333zM512 986.68088889C250.25649778 986.68088889 37.31911111 773.74350222 37.31911111 512S250.25649778 37.31911111 512 37.31911111 986.68088889 250.25649778 986.68088889 512 773.74350222 986.68088889 512 986.68088889z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M636.36593778 242.97244445L368.54556445 512 636.36593778 781.02755555 655.45329778 761.85713778 406.72369778 512 655.45329778 262.17699555Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

KqZuo.defaultProps = {
  size: 18,
};

export default KqZuo;
