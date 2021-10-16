/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let KqShijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 11.37777813c276.48 0 500.62222187 224.14222187 500.62222187 500.62222187s-224.14222187 500.62222187-500.62222187 500.62222187S11.37777813 788.48 11.37777813 512 235.52 11.37777813 512 11.37777813z m0.1820448 182.04444374a45.51111147 45.51111147 0 0 0-45.51111147 45.51111146v273.24871147l0.36408854 6.00746667a45.51111147 45.51111147 0 0 0 12.92515626 26.2144l192.9671104 192.9671104 4.2780448 3.73191146a45.51111147 45.51111147 0 0 0 60.07466667-3.77742186l3.82293333-4.2780448a45.51111147 45.51111147 0 0 0-3.82293333-60.07466667l-179.6323552-179.6323552 0.0455104-254.40711147-0.31857707-5.3248A45.51111147 45.51111147 0 0 0 512.1820448 193.42222187z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqShijian.defaultProps = {
  size: 18,
};

KqShijian = React.memo ? React.memo(KqShijian) : KqShijian;

export default KqShijian;
