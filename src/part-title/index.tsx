import { View } from 'remax/one';
import Space from '../space';
import React from 'react';
import styles from './index.less';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  required?: boolean;
  bold?: boolean;
  className?: string;
}

export default ({ children, className, required, bold, ...props }: Props) => {
  return (
    <Space className={classNames(styles.part, className)} {...props}>
      <View className={styles.block} />
      <View
        className={styles.title}
        style={{ fontWeight: bold ? 'bold' : undefined }}
      >
        {children}
      </View>
      {required && <View className={styles.mark}>*</View>}
    </Space>
  );
};
