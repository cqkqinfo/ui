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

let KqXia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384.65536 20.48v561.68448H182.14912L519.65952 1003.52l337.59232-421.35552h-202.5472V20.48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqXia.defaultProps = {
  size: 18,
};

KqXia = React.memo ? React.memo(KqXia) : KqXia;

export default KqXia;
