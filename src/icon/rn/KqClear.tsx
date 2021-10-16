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

let KqClear: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 652.51436215l327.95521883 327.95521884a99.28797854 99.28797854 0 1 0 140.51436216-140.51436216L652.64692287 512l327.82265812-327.95521883a99.28797854 99.28797854 0 1 0-140.51436216-140.51436216L512 371.35307713 184.04478117 43.53041901a99.28797854 99.28797854 0 1 0-140.51436216 140.51436216L371.35307713 512 43.53041901 839.95521883a99.28797854 99.28797854 0 1 0 140.51436216 140.51436216L512 652.64692287z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqClear.defaultProps = {
  size: 18,
};

KqClear = React.memo ? React.memo(KqClear) : KqClear;

export default KqClear;
