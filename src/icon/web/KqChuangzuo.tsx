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

let KqChuangzuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M887.46666667 898.8444448a34.13333333 34.13333333 0 0 1 0 68.26666667h-750.93333334a34.13333333 34.13333333 0 0 1 0-68.26666667h750.93333334zM876.08888853 56.88888853a136.53333333 136.53333333 0 0 1 136.53333334 136.53333334v500.62222293a136.53333333 136.53333333 0 0 1-136.53333334 136.53333333H147.91111147a136.53333333 136.53333333 0 0 1-136.53333334-136.53333333V193.42222187a136.53333333 136.53333333 0 0 1 136.53333334-136.53333334h728.17777706z m0 68.26666667H147.91111147a68.26666667 68.26666667 0 0 0-68.1528896 64.2616896L79.6444448 193.42222187v500.62222293a68.26666667 68.26666667 0 0 0 64.26168853 68.15288853L147.91111147 762.31111147h728.17777706a68.26666667 68.26666667 0 0 0 68.1528896-64.2616896L944.3555552 694.0444448V193.42222187a68.26666667 68.26666667 0 0 0-64.26168853-68.15288854L876.08888853 125.1555552z m-44.19128853 135.09973333a34.13333333 34.13333333 0 0 1 2.4576 45.6704l-2.34382187 2.59413334-226.53155626 227.55555626a34.13333333 34.13333333 0 0 1-45.62488854 2.5031104l-2.59413333-2.34382186L443.73333333 423.64017813l-203.43466666 203.52568854a34.13333333 34.13333333 0 0 1-45.6931552 2.34382186l-2.59413334-2.34382186a34.13333333 34.13333333 0 0 1-2.34382293-45.6931552l2.34382293-2.59413334 227.48728854-227.55555626a34.13333333 34.13333333 0 0 1 45.60213333-2.41208854l2.59413333 2.32106667 113.39093334 112.52622187 202.5244448-203.3891552a34.13333333 34.13333333 0 0 1 48.26453333-0.11377814z"
        fill={getIconColor(color, 0, '#131415')}
      />
    </Svg>
  );
};

KqChuangzuo.defaultProps = {
  size: 18,
};

KqChuangzuo = React.memo ? React.memo(KqChuangzuo) : KqChuangzuo;

export default KqChuangzuo;
