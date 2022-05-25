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
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.023 980.34l-426.403-428.521c-53.225-55.389-82.385-127.767-82.385-204.079 0-162.327 132.049-294.377 294.377-294.377 82.362 0 159.046 33.396 214.412 92.486 55.343-59.113 132.026-92.486 214.388-92.486 162.327 0 294.353 132.049 294.353 294.377 0 80.803-31.953 156.02-89.972 211.759l-418.769 420.841z"
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
