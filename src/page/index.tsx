import React from 'react';
import Space, { Props } from '../space';
import styles from './index.module.less';
import classNames from 'classnames';

export default ({ className, ...props }: Props) => {
  return (
    <Space
      vertical
      size={20}
      className={classNames(className, styles.page)}
      {...props}
    />
  );
};
