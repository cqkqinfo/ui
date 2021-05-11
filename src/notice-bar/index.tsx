import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import useViewSize from '../use-view-size';
import Space from '../space';
import Icon from '../icon';
import { useId } from 'parsec-hooks';

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
  const innerId = useId();
  const { width: innerW = 0 } = useViewSize(innerId);
  const contentId = useId();
  const { width: contentW = 0 } = useViewSize(contentId);
  return (
    <View
      className={classNames(styles.noticeBarBox, className)}
      style={{ background, color, ...style }}
    >
      {React.isValidElement(icon) && React.cloneElement(icon as any, { color })}
      {title && <View className={styles.noticeBarTitle}>{title}：</View>}
      <View id={contentId} className={styles.noticeContent}>
        <View
          className={styles.noticeInner}
          id={innerId}
          style={{
            animationDuration: `${innerW / 30}s`,
            paddingLeft: contentW,
          }}
        >
          <Space size={10}>{children}</Space>
        </View>
      </View>
    </View>
  );
};

export default NoticeBar;
