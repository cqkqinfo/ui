import React from 'react';
import Space, { Props } from '../space';
import styles from './index.module.less';
import classNames from 'classnames';

export default ({
  className,
  overflowFixed,
  ...props
}: Props & {
  /**
   * 是否防止fixed跑到界面外
   */
  overflowFixed?: boolean;
}) => {
  return (
    <Space
      flex={1}
      vertical
      alignItems={'stretch'}
      size={20}
      className={classNames(className, styles.page)}
      {...props}
      style={{
        transform: overflowFixed ? 'translateY(0px)' : undefined,
        ...props.style,
      }}
    />
  );
};
