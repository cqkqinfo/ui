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

let KqZengjia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M487.11 22.62C234.37 35.27 32.08 239.41 22.37 492.91c-11.08 289.13 219.6 519.8 508.73 508.73 253.5-9.71 457.64-212.01 470.29-464.75C1016.18 241.05 782.95 7.82 487.11 22.62z m316.93 489.47c0 16.57-13.43 30-30 30h-229c-0.94 0-1.69 0.76-1.69 1.69v228.94c0 16.57-13.43 30-30 30h-0.06c-16.57 0-30-13.43-30-30V543.78c0-0.94-0.76-1.69-1.69-1.69h-229c-16.57 0-30-13.43-30-30v-0.06c0-16.57 13.43-30 30-30h229c0.94 0 1.69-0.76 1.69-1.69V251.28c0-16.57 13.43-30 30-30h0.06c16.57 0 30 13.43 30 30v229.06c0 0.94 0.76 1.69 1.69 1.69h229c16.57 0 30 13.43 30 30v0.06z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqZengjia.defaultProps = {
  size: 18,
};

KqZengjia = React.memo ? React.memo(KqZengjia) : KqZengjia;

export default KqZengjia;
