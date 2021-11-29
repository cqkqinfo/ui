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

let KqXihuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1206 1024" width={size} height={size} {...rest}>
      <Path
        d="M1114.966864 91.038469a325.553663 325.553663 0 0 0-451.609796 0l-15.96711 15.60173a63.86844 63.86844 0 0 1-88.970053 0l-15.96711-15.60173a325.553663 325.553663 0 0 0-451.609795 0c-124.229232 121.269653-146.152037 430.23506 95.729584 678.839676a1065.594504 1065.594504 0 0 0 360.228234 242.795072 151.267359 151.267359 0 0 0 112.244765 0 1065.48489 1065.48489 0 0 0 360.228234-242.795072c241.91816-248.458464 219.849202-557.423871 95.729585-678.839676z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqXihuan.defaultProps = {
  size: 18,
};

KqXihuan = React.memo ? React.memo(KqXihuan) : KqXihuan;

export default KqXihuan;
