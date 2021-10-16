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

let KqClear2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 32C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S777.6 32 512 32m201.6 681.6c-12.8 12.8-35.2 12.8-48 0L512 560 358.4 713.6c-12.8 12.8-35.2 12.8-48 0-12.8-12.8-12.8-35.2 0-48L464 512 310.4 358.4c-12.8-12.8-12.8-35.2 0-48 12.8-12.8 35.2-12.8 48 0L512 464l153.6-153.6c12.8-12.8 35.2-12.8 48 0 12.8 12.8 12.8 35.2 0 48L560 512l153.6 153.6c16 12.8 16 35.2 0 48m0 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqClear2.defaultProps = {
  size: 18,
};

KqClear2 = React.memo ? React.memo(KqClear2) : KqClear2;

export default KqClear2;
