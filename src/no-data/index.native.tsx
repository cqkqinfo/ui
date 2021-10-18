import React from 'react';
import { Image } from 'remax/one';
import ImageProps from '@remax/one/esm/hostComponents/Image/props';
import styles from './index.module.less';
import classNames from 'classnames';
import Space from '../space';

export default ({
  src = require('./logo.png'),
  className,
  ...props
}: ImageProps) => (
  <Space justify={'center'} style={{ width: '100vw' }}>
    <Image
      src={src}
      className={classNames(className, styles.noData)}
      {...props}
    />
  </Space>
);
