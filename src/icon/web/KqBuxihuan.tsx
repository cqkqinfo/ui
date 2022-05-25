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

const KqBuxihuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512.023273 980.340364 85.620364 551.819636c-53.224727-55.389091-82.385455-127.767273-82.385455-204.078545 0-162.327273 132.049455-294.376727 294.376727-294.376727 82.362182 0 159.045818 33.396364 214.411636 92.485818 55.342545-59.112727 132.026182-92.485818 214.388364-92.485818 162.327273 0 294.353455 132.049455 294.353455 294.376727 0 80.802909-31.953455 156.020364-89.972364 211.758545L512.023273 980.340364zM297.611636 99.909818c-136.657455 0-247.831273 111.173818-247.831273 247.831273 0 64.209455 24.552727 125.137455 69.12 171.543273L512 914.385455l386.187636-388.072727c49.175273-47.266909 76.055273-110.545455 76.055273-178.571636 0-136.657455-111.173818-247.831273-247.808-247.831273-77.405091 0-148.852364 35.002182-195.979636 96.023273L512 219.787636l-18.432-23.831273C446.440727 134.912 375.016727 99.909818 297.611636 99.909818z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqBuxihuan.defaultProps = {
  size: 18,
};

export default KqBuxihuan;
