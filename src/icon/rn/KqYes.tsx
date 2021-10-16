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

let KqYes: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416.348432 849.59280853c-14.18875413 13.7739744-37.1850368 13.7739744-51.33886293 0l-11.380256-11.10628373-0.06658347 0-12.06573547-11.8594368-53.46515626-52.05490453c-0.2041152-0.20629867-0.10151147-0.4824544-0.30562774-0.68875307L43.05724587 533.7421184c-14.18875413-13.81436053-14.18875413-36.19283947 0-50.0388544l76.9777312-74.98569493c14.15382507-13.81108587 37.14683413-13.81108587 51.3017504 0l219.648992 215.53721066 461.642624-449.82029973c14.18875413-13.81108587 37.15010773-13.81108587 51.34104533 0l76.97227307 75.020624c14.18875413 13.81436053 14.18875413 36.19283947 0 50.00392533L416.348432 849.59280853 416.348432 849.59280853z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqYes.defaultProps = {
  size: 18,
};

KqYes = React.memo ? React.memo(KqYes) : KqYes;

export default KqYes;
