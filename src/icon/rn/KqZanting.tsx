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

let KqZanting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M165.73718099 0m36.755205 0l52.437425 0q36.755205 0 36.755205 36.755205l0 950.48959q0 36.755205-36.755205 36.755205l-52.437425 0q-36.755205 0-36.755205-36.755205l0-950.48959q0-36.755205 36.755205-36.755205Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M725.88649899 0m36.755205 0l52.437425 0q36.755205 0 36.755205 36.755205l0 950.48959q0 36.755205-36.755205 36.755205l-52.437425 0q-36.755205 0-36.755205-36.755205l0-950.48959q0-36.755205 36.755205-36.755205Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

KqZanting.defaultProps = {
  size: 18,
};

KqZanting = React.memo ? React.memo(KqZanting) : KqZanting;

export default KqZanting;
