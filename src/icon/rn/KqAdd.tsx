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

let KqAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M583.55791267 440.44208733L583.55791267 11.42977713 440.44208733 11.42977713 440.44208733 440.44208733 11.42977713 440.44208733 11.42977713 583.55791267 440.44208733 583.55791267 440.44208733 1012.57022287 583.55791267 1012.57022287 583.55791267 583.55791267 1012.57022287 583.55791267 1012.57022287 440.44208733Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqAdd.defaultProps = {
  size: 18,
};

KqAdd = React.memo ? React.memo(KqAdd) : KqAdd;

export default KqAdd;
