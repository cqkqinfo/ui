import { View } from 'remax/one';
import Space from '../space';
import React from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';

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
  /**
   * 是否填充字体颜色
   */
  full?: boolean;
}

export default ({
  children,
  className,
  required,
  bold = true,
  full,
  ...props
}: Props) => {
  const { brandPrimary } = ConfigProvider.useContainer();
  return (
    <Space className={classNames(styles.part, className)} {...props}>
      <View className={styles.block} />
      <View
        className={styles.title}
        style={{
          fontWeight: bold ? 'bold' : 'normal',
          color: full ? brandPrimary : undefined,
        }}
      >
        {children}
      </View>
      {required && <View className={styles.mark}>*</View>}
    </Space>
  );
};
