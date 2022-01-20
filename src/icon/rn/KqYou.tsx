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

let KqYou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M3.41333333 512c0 280.86499555 227.72167111 508.58666667 508.58666667 508.58666667 280.86499555 0 508.58666667-227.72167111 508.58666667-508.58666667 0-280.86499555-227.72167111-508.58666667-508.58666667-508.58666667C231.13500445 3.41333333 3.41333333 231.13500445 3.41333333 512zM37.31911111 512C37.31911111 250.25649778 250.25649778 37.31911111 512 37.31911111S986.67975111 250.25649778 986.67975111 512 773.74350222 986.68088889 512 986.68088889 37.31911111 773.74350222 37.31911111 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M387.63406222 242.97244445L655.45329778 512 387.63406222 781.02755555 368.54670222 761.85713778 617.27630222 512 368.54670222 262.17699555Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

KqYou.defaultProps = {
  size: 18,
};

KqYou = React.memo ? React.memo(KqYou) : KqYou;

export default KqYou;
