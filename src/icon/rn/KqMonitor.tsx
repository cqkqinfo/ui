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

let KqMonitor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1098 1024" width={size} height={size} {...rest}>
      <Path
        d="M876.643902 252.253659v444.565853c0 17.482927-14.985366 32.468293-32.468292 32.468293H252.253659c-17.482927 0-29.970732-14.985366-29.970732-32.468293V252.253659c0-17.482927 14.985366-32.468293 29.970732-32.468293h594.419512c17.482927 2.497561 29.970732 14.985366 29.970731 32.468293z"
        fill={getIconColor(color, 0, '#333333')}
        fillOpacity="0"
      />
      <Path
        d="M846.673171 776.741463H252.253659c-44.956098 0-79.921951-37.463415-79.921952-82.419512V252.253659c0-44.956098 37.463415-82.419512 79.921952-82.419513h594.419512c44.956098 0 82.419512 37.463415 82.419512 82.419513v444.565853c-2.497561 44.956098-37.463415 79.921951-82.419512 79.921951z m-574.439025-99.902439h556.956098V272.234146H272.234146v404.604878z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M751.765854 624.390244l-132.370732-147.356098L474.536585 624.390244l-44.956097-44.956098-4.995122 4.995122-149.853659-149.853658 69.931708-69.931708 119.882926 119.882927L549.463415 399.609756v-2.497561l72.429268-72.429268 202.302439 227.278049-72.429268 72.429268zM224.780488 924.097561h649.365853v99.902439H224.780488v-99.902439z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

KqMonitor.defaultProps = {
  size: 18,
};

KqMonitor = React.memo ? React.memo(KqMonitor) : KqMonitor;

export default KqMonitor;
