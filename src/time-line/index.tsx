import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import { Space, Icon } from '@kqinfo/ui';
import classnames from 'classnames';

export interface Data {
  title: React.ReactNode;
  detail: React.ReactNode;
  date: React.ReactNode;
  state: 'done' | 'pending';
}
export interface Props {
  className?: string;
  /**
   * 菜单数据
   */
  data: Data[];
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 时间点类名
   */
  dotCls?: string;
  /**
   * 完成图标类名
   */
  doneIconCls?: string;
  /**
   * 自定义完成图标
   */
  doneIcon?: React.ReactNode;
  /**
   * 线类名
   */
  lineCls?: string;
  /**
   * 标题类名
   */
  titleCls?: string;
  /**
   * 详情类名
   */
  detailCls?: string;
  /**
   * 日期类名
   */
  dateCls?: string;
  /**
   * 当前时间详情类名
   */
  activeCls?: string;
  /**
   * 子项类名
   */
  itemCls?: string;
}

export default ({
  data,
  className,
  dateCls,
  detailCls,
  dotCls,
  titleCls,
  doneIconCls,
  doneIcon,
  lineCls,
  itemCls,
  activeCls,
  ...props
}: Props) => {
  return (
    <Space
      vertical
      className={classnames(styles.itemContainer, className)}
      {...props}
    >
      {data.map(({ title, state, date, detail }, index) => (
        <View
          className={classnames(
            styles.expressItem,
            itemCls,
            state === 'done' && activeCls,
          )}
        >
          <View
            className={classnames(
              index === data.length - 1
                ? styles.expressRightFirstLast
                : styles.expressRightFirst,
            )}
          >
            <View className={styles.process}>
              <View
                className={classnames(
                  state === 'done' ? styles.stateStyle2 : styles.stateStyle,
                  titleCls,
                )}
              >
                {title}
              </View>
              <View className={classnames(styles.detailStyle, detailCls)}>
                {detail}
              </View>
              <View className={classnames(styles.dateStyle, dateCls)}>
                {date}
              </View>
            </View>
          </View>
          {state === 'done' ? (
            <Space
              alignItems={'center'}
              justify={'center'}
              className={classnames(styles.icon, doneIconCls)}
            >
              {doneIcon || <Icon name={'kq-yes'} size={30} color={'#fff'} />}
            </Space>
          ) : (
            <View className={classnames(styles.expressLeft, dotCls)} />
          )}
        </View>
      ))}
    </Space>
  );
};
