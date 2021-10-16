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

let KqCaidan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M66.59792592 168.54281482h891.42309926a52.18607408 52.18607408 0 0 0 0-104.37214815H66.59792592a52.18607408 52.18607408 0 0 0 0 104.37214815zM958.02102518 459.81392592H66.59792592a52.18607408 52.18607408 0 0 0 0 104.37214816h891.42309926a52.18607408 52.18607408 0 0 0 0-104.37214816zM958.02102518 850.60266667H66.59792592a52.18607408 52.18607408 0 0 0 0 104.37214815h891.42309926a52.18607408 52.18607408 0 0 0 0-104.37214815z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqCaidan.defaultProps = {
  size: 18,
};

KqCaidan = React.memo ? React.memo(KqCaidan) : KqCaidan;

export default KqCaidan;
