import { View } from 'remax/one';
import Space from '../space';
import React from 'react';
import styles from './index.less';
import classNames from 'classnames';

export interface Props {
  children: React.ReactNode;
  /**
   * 显示必填的星号
   */
  required?: boolean;
  /**
   * 是否加粗文字
   * @default true
   */
  bold?: boolean;
  className?: string;
}

export default ({
  children,
  className,
  required,
  bold = true,
  ...props
}: Props) => {
  return (
    <Space className={classNames(styles.part, className)} {...props}>
      <View className={styles.block} />
      <View
        className={styles.title}
        style={{ fontWeight: bold ? 'bold' : 'normal' }}
      >
        {children}
      </View>
      {required && <View className={styles.mark}>*</View>}
    </Space>
  );
};
