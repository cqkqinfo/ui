import classNames from 'classnames';
import React from 'react';
import styles from './index.module.less';
import { Props } from './index';
import { View } from 'remax/one';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RotateView from 'react-native-rotate-view';

export default ({
  className,
  angle = 360,
  run = true,
  children,
  ...props
}: Props) => {
  return (
    <RotateView
      rotate={run}
      degree={`${angle}deg`}
      duration={300}
      className={classNames(angle === undefined && styles.rotate, className)}
      {...props}
    >
      <View>{children}</View>
    </RotateView>
  );
};
