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

let KqMobile: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 1024H256a102.4 102.4 0 0 1-102.4-102.4V102.4a102.4 102.4 0 0 1 102.4-102.4h512a102.4 102.4 0 0 1 102.4 102.4v819.2a102.4 102.4 0 0 1-102.4 102.4z m-307.2-51.2h102.4v-51.2H460.8v51.2z m307.2-870.4H256v716.8h512V102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqMobile.defaultProps = {
  size: 18,
};

KqMobile = React.memo ? React.memo(KqMobile) : KqMobile;

export default KqMobile;
