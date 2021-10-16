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

let KqZhizhen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M499.475 30.55222223C464.99 30.55222223 437 57.85222224 437 91.52722224v426.89999999c0 22.635 28.8 41.595 47.55 52.095 5.19 7.605 19.44 14.505 28.125 19.38l257.76 152.47500001c29.85 16.83 62.25 6.825 79.485-22.32 17.25-29.16 1.2-66.42000001-28.755-83.25l-259.2-146.31V91.52722224c0-33.66000001-27.975-60.975-62.49-60.97500001z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqZhizhen.defaultProps = {
  size: 18,
};

KqZhizhen = React.memo ? React.memo(KqZhizhen) : KqZhizhen;

export default KqZhizhen;
