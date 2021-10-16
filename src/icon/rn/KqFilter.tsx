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

let KqFilter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M394.16825023 528.24920891L23.4106472 157.49160588A58.91587557 58.91587557 0 0 1 65.06417183 56.92220707h893.87165634a58.91587557 58.91587557 0 0 1 41.65352463 100.56939881L629.83174977 528.24920891v471.32700048l-235.66349954-117.83174978v-353.4952507z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqFilter.defaultProps = {
  size: 18,
};

KqFilter = React.memo ? React.memo(KqFilter) : KqFilter;

export default KqFilter;
