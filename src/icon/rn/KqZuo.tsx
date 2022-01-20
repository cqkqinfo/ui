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

let KqZuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 3.41333333C231.13500445 3.41333333 3.41333333 231.13500445 3.41333333 512c0 280.86499555 227.72167111 508.58666667 508.58666667 508.58666667 280.86499555 0 508.58666667-227.72167111 508.58666667-508.58666667C1020.58666667 231.13500445 792.86499555 3.41333333 512 3.41333333zM512 986.68088889C250.25649778 986.68088889 37.31911111 773.74350222 37.31911111 512S250.25649778 37.31911111 512 37.31911111 986.68088889 250.25649778 986.68088889 512 773.74350222 986.68088889 512 986.68088889z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M636.36593778 242.97244445L368.54556445 512 636.36593778 781.02755555 655.45329778 761.85713778 406.72369778 512 655.45329778 262.17699555Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

KqZuo.defaultProps = {
  size: 18,
};

KqZuo = React.memo ? React.memo(KqZuo) : KqZuo;

export default KqZuo;
