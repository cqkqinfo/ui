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

let KqBofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M868.266667 618.666667L256 996.266667c-96 59.733333-172.8 19.2-172.8-89.6v-789.333334c0-108.8 76.8-149.333333 172.8-89.6L868.266667 405.333333c96 59.733333 96 153.6 0 213.333334z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqBofang.defaultProps = {
  size: 18,
};

KqBofang = React.memo ? React.memo(KqBofang) : KqBofang;

export default KqBofang;
