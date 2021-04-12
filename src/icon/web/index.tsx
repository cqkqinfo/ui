/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import KqAdd from './KqAdd';
import KqClear from './KqClear';
import KqClear2 from './KqClear2';
import KqYes from './KqYes';
import KqSearch from './KqSearch';
import KqDown from './KqDown';
import KqLoading2 from './KqLoading2';
import KqLoading from './KqLoading';

export type IconNames =
  | 'kq-add'
  | 'kq-clear'
  | 'kq-clear2'
  | 'kq-yes'
  | 'kq-search'
  | 'kq-down'
  | 'kq-loading2'
  | 'kq-loading';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'kq-add':
      return <KqAdd {...rest} />;
    case 'kq-clear':
      return <KqClear {...rest} />;
    case 'kq-clear2':
      return <KqClear2 {...rest} />;
    case 'kq-yes':
      return <KqYes {...rest} />;
    case 'kq-search':
      return <KqSearch {...rest} />;
    case 'kq-down':
      return <KqDown {...rest} />;
    case 'kq-loading2':
      return <KqLoading2 {...rest} />;
    case 'kq-loading':
      return <KqLoading {...rest} />;
  }

  return null;
};

export default IconFont;
