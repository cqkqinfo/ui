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

let KqShang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M660.650667 1024V438.912h210.986666L520.021333 0 168.405333 438.912H379.306667V1024z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqShang.defaultProps = {
  size: 18,
};

KqShang = React.memo ? React.memo(KqShang) : KqShang;

export default KqShang;
