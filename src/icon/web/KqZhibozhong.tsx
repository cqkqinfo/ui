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

const KqZhibozhong: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M599.1936 0v1024H424.8064V0h174.3872zM225.536 438.8352V1024H51.2V438.8352h174.336zM972.8 146.2784V1024h-174.336V146.2784H972.8z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </svg>
  );
};

KqZhibozhong.defaultProps = {
  size: 18,
};

export default KqZhibozhong;
