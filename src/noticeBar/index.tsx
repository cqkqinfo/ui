import React, { useRef, useState, useMemo } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';
import useViewSize from '../use-view-size';
import { IconFontNames } from '../icon/wechat';
import Icon from '../icon';
import Space from '../space';

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
   * 设置图标
   */
  icon?: IconFontNames;
  /**
   * 设置左侧标题
   */
  title: string | React.ReactNode;
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 消息项
   */
  children?: React.ReactNode;
  /**
   * id
   */
  id?: string;
}
let count = 0;
const NoticeBar = (props: NoticeBarProps) => {
  const {
    className,
    style,
    background = 'none',
    color = 'inherit',
    icon,
    title,
    children,
    id = `notice${count++}`,
  } = props;
  const idRef = useRef(id);
  const [{ width: innerW = 0 }, setWH] = useState<{
    width?: number;
    height?: number;
  }>({});
  useViewSize(idRef.current, setWH);
  const timer = useMemo(() => `${innerW / 30}s`, [innerW]);
  return (
    <View
      className={classNames(styles.noticeBarBox, className)}
      style={{ background, color, ...style }}
    >
      {icon && <Icon name={icon} color={color} />}
      {title && <View className={styles.noticeBarTitle}>{title}：</View>}
      <View className={styles.noticeContent}>
        <View
          className={styles.noticeInner}
          id={idRef.current}
          style={{ animationDuration: timer }}
        >
          <Space size={10}>{children}</Space>
        </View>
      </View>
    </View>
  );
};

export default NoticeBar;
