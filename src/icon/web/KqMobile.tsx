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

const KqMobile: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M768 1024H256a102.4 102.4 0 0 1-102.4-102.4V102.4a102.4 102.4 0 0 1 102.4-102.4h512a102.4 102.4 0 0 1 102.4 102.4v819.2a102.4 102.4 0 0 1-102.4 102.4z m-307.2-51.2h102.4v-51.2H460.8v51.2z m307.2-870.4H256v716.8h512V102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqMobile.defaultProps = {
  size: 18,
};

export default KqMobile;
