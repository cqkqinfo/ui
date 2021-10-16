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

let KqFenge: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024c-22.016 0-39.936-17.92-39.936-39.936V39.936c0-22.016 17.92-39.936 39.936-39.936s39.936 17.92 39.936 39.936v943.616c0 22.528-17.92 40.448-39.936 40.448"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqFenge.defaultProps = {
  size: 18,
};

KqFenge = React.memo ? React.memo(KqFenge) : KqFenge;

export default KqFenge;
