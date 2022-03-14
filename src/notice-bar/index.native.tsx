import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import useViewLayout from '../use-view-layout';
import Space from '../space';
import Icon from '../icon';
import PxToRpx from '../px-to-rpx';

export interface NoticeBarProps {
  /**
   * 自定义样式名
   */
  className?: string;
  /**
   * 行内样式
   */
  style?: React.CSSProperties;
  /**
   * 背景色
   */
  background?: string;
  /**
   * 设置图标,传null就是不显示
   */
  icon?: React.ReactNode;
  /**
   * 设置左侧标题
   */
  title?: React.ReactNode;
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 消息项
   */
  children?: React.ReactNode;
}
const NoticeBar = (props: NoticeBarProps) => {
  const {
    className,
    style,
    background = '#fefcec',
    color = '#FF9D46',
    icon = <Icon name="kq-notice" />,
    title,
    children,
  } = props;
  const { width: innerW = 0, ...arg1 } = useViewLayout();
  const { width: contentW = 999, ...arg2 } = useViewLayout();
  return (
    <View
      className={classNames(styles.noticeBarBox, className)}
      style={{ background, color, ...style }}
    >
      {React.isValidElement(icon) &&
        React.cloneElement(icon as any, { color, size: 24 })}
      {title && <View className={styles.noticeBarTitle}>{title}：</View>}
      <View {...arg2} className={styles.noticeContent}>
        <View
          className={styles.noticeInner}
          {...arg1}
          style={
            {
              // animationDuration: `${(PxToRpx(innerW) || 0) / 30}s`,
              // paddingLeft: contentW + 'PX',
            }
          }
        >
          <Space size={10} flexWrap={'nowrap'} alignItems={'center'}>
            {children}
          </Space>
        </View>
      </View>
    </View>
  );
};

export default NoticeBar;
