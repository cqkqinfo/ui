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

const KqZhuanlan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M113.174226 10.239892h797.651548c38.398593 0 69.116268 31.229669 69.116268 69.116267v874.959729c0 38.397593-31.229669 69.628262-69.116268 69.628263-7.679919 0-14.846843-1.023989-22.014767-3.583962l-354.79624-118.265747a71.849239 71.849239 0 0 0-44.029534 0l-354.79624 118.265747c-36.349615 12.28787-75.772197-7.679919-87.548073-44.029534-2.559973-7.167924-3.582962-14.334848-3.582962-22.014767V79.355159C43.544964 41.469561 74.774633 10.239892 113.174226 10.239892zM295.436295 287.726951c-24.062745 0-43.518539 19.454794-43.518539 43.517539s19.455794 43.518539 43.518539 43.518539h433.639405c24.062745 0 43.518539-19.455794 43.518539-43.518539s-19.455794-43.517539-43.518539-43.517539H295.436295z m0 242.675429c-24.062745 0-43.518539 19.454794-43.518539 43.517539s19.455794 43.517539 43.518539 43.517539h433.639405c24.062745 0 43.518539-19.454794 43.518539-43.517539s-19.455794-43.517539-43.518539-43.517539H295.436295z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

KqZhuanlan.defaultProps = {
  size: 18,
};

export default KqZhuanlan;
