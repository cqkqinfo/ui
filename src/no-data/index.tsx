import React from 'react';
import { Image } from 'remax/one';
import ImageProps from '@remax/one/esm/hostComponents/Image/props';
import styles from './index.module.less';
import classNames from 'classnames';
import Space from '../space';

export default ({
  src = 'https://kq-static.oss-cn-beijing.aliyuncs.com/ui/noData.png',
  className,
  ...props
}: ImageProps) => (
  <Space justify={'center'}>
    <Image
      src={src}
      className={classNames(className, styles.noData)}
      {...props}
    />
  </Space>
);
