import Space, { Props as SpaceProps } from '../space';
import styles from './index.module.less';
import React from 'react';
import { Image, Text } from 'remax/one';
import { useConfig } from '../config-provider';
import classNames from 'classnames';
const convert = require('color-convert');

export interface Props extends SpaceProps {
  /**
   * 背景色
   */
  backgroundColor?: string;
  /**
   * 文字
   */
  text?: React.ReactNode;
  /**
   * 图片
   */
  image?: string;
  /**
   * 大小
   */
  size?: 'large' | 'small';
  /**
   * 白色文字
   */
  light?: boolean;
  /**
   * 标签
   */
  tag?: React.ReactNode;
}

export default ({
  text,
  backgroundColor = `rgba(${convert.hex
    .rgb(useConfig().brandPrimary)
    .join(',')}, 0.15)`,
  image,
  style,
  light,
  size,
  tag,
  ...props
}: Props) => {
  return (
    <Space
      justify="center"
      alignItems="center"
      className={classNames(styles.tile, size && styles[size])}
      flex={1}
      size={size === 'large' ? 46 : size === 'small' ? 43 : 18}
      {...props}
      style={{ backgroundColor, ...style }}
    >
      {tag && (
        <Text className={styles.tag}>
          <Text className={styles.content}>{tag}</Text>
        </Text>
      )}
      {image && (
        <Space className={styles.avatar} justify="center" alignItems="center">
          <Image src={image} className={styles.img} mode="aspectFit" />
        </Space>
      )}
      <Text
        className={styles.text}
        style={{ color: light ? '#fff' : undefined }}
      >
        {text}
      </Text>
    </Space>
  );
};
