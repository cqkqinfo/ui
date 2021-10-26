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

const KqSousuo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1058 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M477.860608 918.108097c-251.646482 0-452.829814-180.034319-475.718936-414.948987-23.290685-238.930304 150.050908-453.231377 401.563536-497.135657 220.324527-38.550099 460.459521 120.469061 519.355506 343.336823a426.995893 426.995893 0 0 1-41.896462 325.400319c-20.345886 36.809991-12.180761 51.801696 18.739632 74.021545a1305.750764 1305.750764 0 0 1 132.248257 110.831535c38.416245 36.006864 33.329773 84.060633-8.834397 127.161787s-91.021068 49.793878-128.901895 14.723996c-43.90428-40.156354-86.068451-83.391361-127.964914-126.224805-23.42454-24.093812-44.841261-28.243302-76.564781-10.97607-68.265801 37.345409-142.153492 60.502239-212.025546 53.809514z m-8.432835-105.209646c207.206784 0 362.210309-150.452471 362.344164-351.769657s-155.940506-352.305075-361.407182-352.43893-361.407182 150.184762-361.407182 351.903511 153.263416 352.171221 361.005618 352.305076z"
        fill={getIconColor(color, 0, '#CBCBCB')}
      />
    </svg>
  );
};

KqSousuo.defaultProps = {
  size: 18,
};

export default KqSousuo;
