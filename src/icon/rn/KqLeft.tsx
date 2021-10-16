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

let KqLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M776.374693 954.312991l-442.269486-442.269486 442.269486-442.269486a40.793953 40.793953 0 0 0-57.993933-57.721933L247.556307 482.876539a40.793953 40.793953 0 0 0 0 57.722933l470.824453 471.436452a40.793953 40.793953 0 0 0 57.721933 0 40.793953 40.793953 0 0 0 0.272-57.722933z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqLeft.defaultProps = {
  size: 18,
};

KqLeft = React.memo ? React.memo(KqLeft) : KqLeft;

export default KqLeft;
