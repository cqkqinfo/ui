import { View } from 'remax/one';
import styles from './index.module.less';
import Space, { Props as SpacePrpos } from '../space';
import Icon from '../icon';
import React from 'react';
import rpxToPx from '../rpx-to-px';
import classNames from 'classnames';

export interface Props extends SpacePrpos {
  /**
   * 提示项
   */
  items: React.ReactNode[];
  /**
   * 文字类名
   */
  textCls?: string;
  /**
   * 图标类名
   */
  iconCls?: string;
  /**
   * 提示标题
   * @default 温馨提示：
   */
  title?: React.ReactNode;
  /**
   * 标题类名
   */
  titleCls?: string;
  /**
   * 图标颜色
   * @default #FABD52
   */
  iconColor?: string;
  /**
   * 图标
   * @default kq-tip
   */
  icon?: string;
}

export default ({
  items,
  textCls,
  titleCls,
  title = '温馨提示：',
  iconCls,
  icon,
  iconColor = '#FABD52',
  ...props
}: Props) => {
  return (
    <Space
      size={8}
      alignSelf={'stretch'}
      margin={`${rpxToPx(18)}px 0 0`}
      {...props}
    >
      {icon || (
        <Icon
          color={iconColor}
          name={'kq-tip'}
          className={classNames(iconCls, styles.icon)}
        />
      )}
      <Space size={17} vertical style={{ width: rpxToPx(666) }}>
        <View className={classNames(styles.title, titleCls)}>{title}</View>
        <View className={classNames(textCls, styles.text)}>
          {items.map((item, index) => (
            <View key={index}>{item}</View>
          ))}
        </View>
      </Space>
    </Space>
  );
};
