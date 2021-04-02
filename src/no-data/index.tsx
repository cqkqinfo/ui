import React from 'react';
import { Image } from 'remax/one';
import ImageProps from '@remax/one/esm/hostComponents/Image/props';
import logo from './logo.png';
import styles from './index.less';
import classNames from 'classnames';
import Space from '../space';

export default ({ src = logo, className, ...props }: ImageProps) => (
  <Space justify={'center'}>
    <Image
      src={src}
      className={classNames(className, styles.noData)}
      {...props}
    />
  </Space>
);
