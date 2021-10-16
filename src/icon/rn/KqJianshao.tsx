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

let KqJianshao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m290.72 490.09c0 16.57-13.43 30-30 30H251.28c-16.57 0-30-13.43-30-30v-0.17c0-16.57 13.43-30 30-30h521.44c16.57 0 30 13.43 30 30v0.17z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqJianshao.defaultProps = {
  size: 18,
};

KqJianshao = React.memo ? React.memo(KqJianshao) : KqJianshao;

export default KqJianshao;
