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

let KqTongzhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M954.583 783.03h-68.09V442.584c0-194.498-150.274-355.513-340.448-372.86V34.046C546.045 15.32 530.725 0 512 0s-34.045 15.32-34.045 34.045v35.679C287.781 87.07 137.507 248.084 137.507 442.583V783.03h-68.09a34.045 34.045 0 1 0 0 68.09h885.166a34.045 34.045 0 1 0 0-68.09zM512 1024a102.645 102.645 0 0 0 102.662-102.662H409.338A102.645 102.645 0 0 0 512 1024z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

KqTongzhi.defaultProps = {
  size: 18,
};

KqTongzhi = React.memo ? React.memo(KqTongzhi) : KqTongzhi;

export default KqTongzhi;
