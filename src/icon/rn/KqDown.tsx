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

let KqDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M965.46812628 219.26174551H58.53187372c-27.20256421 0-42.39181327 28.72148912-25.54555523 48.3294288l453.46812628 525.82418542c12.97990373 15.05116498 37.97312263 15.05116498 51.09111046 0L991.01368151 267.59117431c16.84625804-19.6079397 1.65700898-48.3294288-25.54555523-48.3294288z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqDown.defaultProps = {
  size: 18,
};

KqDown = React.memo ? React.memo(KqDown) : KqDown;

export default KqDown;
