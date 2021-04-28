/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconFontNames =
  | 'kq-tip'
  | 'kq-jianshao'
  | 'kq-zengjia'
  | 'kq-right'
  | 'kq-home-solid'
  | 'kq-monitor'
  | 'kq-notice'
  | 'kq-add'
  | 'kq-clear'
  | 'kq-clear2'
  | 'kq-yes'
  | 'kq-search'
  | 'kq-down'
  | 'kq-loading2'
  | 'kq-loading';

export interface IconFontProps {
  name: IconFontNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<IconFontProps> = () => {
  return null;
};

export default IconFont;
