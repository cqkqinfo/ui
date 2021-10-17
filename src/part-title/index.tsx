import { View, Text } from 'remax/one';
import Space from '../space';
import React from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import { useConfig } from '../config-provider';
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
  /**
   * 适老模式，开启后尺寸会变大
   */
  elderly?: boolean;
  /**
   * 标题右侧操作
   */
  action?: React.ReactNode;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export default ({
  children,
  className,
  required,
  bold = true,
  full,
  offsetX = 0,
  elderly = useConfig().elderly,
  action,
  ...props
}: Props) => {
  const { brandPrimary } = useConfig();
  return (
    <Space
      className={classNames(styles.part, className, elderly && styles.elderly)}
      alignItems={'center'}
      {...props}
    >
      <Space
        flex={1}
        style={{
          marginLeft: `${rpxToPx(offsetX)}px`,
          marginRight: `${rpxToPx(offsetX)}px`,
        }}
        alignItems={'center'}
      >
        <View className={styles.block} />
        <Text
          className={styles.title}
          style={{
            fontWeight: bold ? 'bold' : 'normal',
            color: full ? brandPrimary : undefined,
          }}
        >
          {children}
        </Text>
        {required && <Text className={styles.mark}>*</Text>}
      </Space>
      {action}
    </Space>
  );
};
