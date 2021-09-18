import { View } from 'remax/one';
import Space from '../space';
import React from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import rpxToPx from '../rpx-to-px';

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
  /**
   * 左边偏移量，rpx单位
   */
  offsetX?: number;
}

export default ({
  children,
  className,
  required,
  bold = true,
  full,
  offsetX = 0,
  ...props
}: Props) => {
  const { brandPrimary } = ConfigProvider.useContainer();
  return (
    <Space className={classNames(styles.part, className)} {...props}>
      <Space flex={1} style={{ margin: `0 ${rpxToPx(offsetX)}px` }}>
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
      </Space>
      {required && <View className={styles.mark}>*</View>}
    </Space>
  );
};
