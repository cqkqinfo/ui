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

let KqYiyuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M933.228381 1023.998537H80.310742A79.652458 79.652458 0 0 1 0 945.223793V118.125546C0 53.028496 54.052494 0 120.466114 0h491.519297c66.413619 0 120.392971 53.028496 120.392971 118.125546v247.807646h211.309413c44.324508 0 80.310742 35.401092 80.310742 78.774744v500.515857c0 43.446795-46.518791 78.774745-90.770156 78.774744zM731.427527 950.855784h219.428257V438.856516h-219.428257v511.999268zM113.517552 73.142753A40.228514 40.228514 0 0 0 73.142753 113.005553V950.855784h585.142021V113.005553A40.228514 40.228514 0 0 0 617.909974 73.142753H113.517552z"
        fill={getIconColor(color, 0, '#666666')}
      />
      <Path
        d="M585.142021 457.142204H420.570828V292.571011h-109.714129v164.571193H146.285505v109.714129h164.571194V731.427527h109.714129V566.856333H585.142021z"
        fill={getIconColor(color, 1, '#666666')}
      />
    </Svg>
  );
};

KqYiyuan.defaultProps = {
  size: 18,
};

KqYiyuan = React.memo ? React.memo(KqYiyuan) : KqYiyuan;

export default KqYiyuan;
