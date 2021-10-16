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

let KqBiaoqing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C229.248 0 0 229.2224 0 512s229.248 512 512 512 512-229.2224 512-512S794.752 0 512 0zM200.3456 378.4448a89.0368 89.0368 0 1 1 178.0992 0 89.0368 89.0368 0 0 1-178.0992 0zM512 868.1728c-135.9872 0-248.2432-101.6064-264.9856-233.0368a33.4336 33.4336 0 0 1 31.232-45.2096c18.432 0 33.3824 14.9504 33.3824 33.3824h1.2288a200.3968 200.3968 0 0 0 397.6448 5.0688 33.3568 33.3568 0 1 1 66.4064-5.0432h1.3056c-11.2896 137.088-126.1824 244.8384-266.2144 244.8384z m222.6176-400.6912a89.0368 89.0368 0 1 1 0-178.0736 89.0368 89.0368 0 0 1 0 178.0736z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqBiaoqing.defaultProps = {
  size: 18,
};

KqBiaoqing = React.memo ? React.memo(KqBiaoqing) : KqBiaoqing;

export default KqBiaoqing;
