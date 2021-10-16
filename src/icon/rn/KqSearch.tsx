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

let KqSearch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M843.91961244 789.03119053l-54.88842191 54.88842191 169.06669746 169.13142518a38.83614815 38.83614815 0 0 0 54.95314963 0 38.83614815 38.83614815 0 0 0 0-54.95314963l-169.13142518-169.06669746z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M491.48156799 77.22932148a414.25224651 414.25224651 0 1 1-292.88928354 121.36296297 411.53371614 411.53371614 0 0 1 292.88928354-121.36296297m0-77.6722963a491.92454281 491.92454281 0 1 0 347.84243439 144.08210964 490.37109689 490.37109689 0 0 0-347.84243439-144.08210964z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

KqSearch.defaultProps = {
  size: 18,
};

KqSearch = React.memo ? React.memo(KqSearch) : KqSearch;

export default KqSearch;
