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

let KqHomeSolid: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M528.516129-0.033032l-495.483871 396.387097 33.032258 627.612903 924.903226-33.032258v-594.580645l-462.451613-396.387097z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M297.290323 627.612903h462.451612v132.129032H297.290323v-132.129032z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

KqHomeSolid.defaultProps = {
  size: 18,
};

KqHomeSolid = React.memo ? React.memo(KqHomeSolid) : KqHomeSolid;

export default KqHomeSolid;
