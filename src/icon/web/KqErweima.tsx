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

const KqErweima: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1012.78493895 569.82593097V836.0373136h-265.12143802v-176.7770842h-88.37381268v357.61936242h-88.37381268V570.91587557h265.12143803v176.7181665h88.37381267v-177.8081111h88.37381268zM453.08412443 570.91587557v441.86906338H11.21506105V570.91587557h441.86906338z m559.70081452 353.4952507v88.37381268h-265.12143802v-88.37381268h265.12143802z m-648.0746272-265.12143802h-265.12143802v265.12143802h265.12143802v-265.12143802z m-88.37381268 88.37381268v88.37381267h-88.37381267v-88.37381267h88.37381267z m176.74762536-736.44843988v441.86906338H11.21506105V11.21506105h441.86906338z m559.70081452 0v441.86906338H570.91587557V11.21506105h441.86906338z m-648.0746272 88.37381268h-265.12143802v265.12143802h265.12143802v-265.12143802z m559.70081452 0h-265.12143802v265.12143802h265.12143802v-265.12143802z m-648.0746272 88.37381267v88.37381267h-88.37381267v-88.37381267h88.37381267z m559.70081453 0v88.37381267h-88.37381267v-88.37381267h88.37381267z"
        fill={getIconColor(color, 0, '#cccccc')}
      />
    </svg>
  );
};

KqErweima.defaultProps = {
  size: 18,
};

export default KqErweima;
