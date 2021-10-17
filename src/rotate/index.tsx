import classNames from 'classnames';
import React from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';

export interface Props extends React.PropsWithChildren<ViewProps> {
  /**
   * 旋转角度
   */
  angle?: number;
  /**
   * 是否旋转
   */
  run?: boolean;
}

export default ({
  className,
  angle = 360,
  run = true,
  style,
  ...props
}: Props) => {
  return (
    <View
      style={{
        transform: `rotate(${run ? angle : 0}deg)`,
        transition: 'all .3s',
        ...style,
      }}
      className={classNames(angle === undefined && styles.rotate, className)}
      {...props}
    />
  );
};
