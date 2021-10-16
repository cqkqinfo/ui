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

let KqRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M691.509035 519.520267L225.841479 100.313873c-14.783097-11.615291-21.11871-30.62213-17.950904-49.628969 3.167807-17.950904 16.894968-33.789936 34.845872-39.069613 17.950904-5.279678 38.013678 0 50.684904 12.671226l506.849041 456.164136c10.559355 9.50342 16.894968 23.230581 16.894968 38.013679s-6.335613 27.454323-16.894968 38.013678l-506.849041 456.164137c-21.11871 16.894968-51.74084 14.783097-69.691743-5.279678-17.950904-20.062775-16.894968-50.684904 1.055935-69.691743L691.509035 519.520267zM225.841479 937.670726"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqRight.defaultProps = {
  size: 18,
};

KqRight = React.memo ? React.memo(KqRight) : KqRight;

export default KqRight;
