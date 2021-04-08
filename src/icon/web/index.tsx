/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import KqLoading from './KqLoading';

export type IconNames = 'kq-loading';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'kq-loading':
      return <KqLoading {...rest} />;
  }

  return null;
};

export default IconFont;
