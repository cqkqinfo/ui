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

let KqZhibozhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M599.1936 0v1024H424.8064V0h174.3872zM225.536 438.8352V1024H51.2V438.8352h174.336zM972.8 146.2784V1024h-174.336V146.2784H972.8z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </Svg>
  );
};

KqZhibozhong.defaultProps = {
  size: 18,
};

KqZhibozhong = React.memo ? React.memo(KqZhibozhong) : KqZhibozhong;

export default KqZhibozhong;
