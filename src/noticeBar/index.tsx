import React, { useRef, useState, useEffect } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';
import { Icon } from '../index';
import useViewSize from '../use-view-size';
import { IconFontNames } from '../icon/wechat';
import { useRefState } from 'parsec-hooks';

export interface NoticeBarProps {
  className?: string;
  style?: React.CSSProperties;
  background?: string;
  icon?: IconFontNames;
  title: string | React.ReactNode;
  color?: string;
  children?: React.ReactNode;
  id?: string;
  id1?: string;
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
    id = `noticeOut${count++}`,
    id1 = `noticeInner${count++}`,
  } = props;
  const interval = useRef<any>();
  const idRef = useRef(id);
  const [{ width: outW }, setWH] = useState<{
    width?: number;
    height?: number;
  }>({});
  useViewSize(idRef.current, setWH);
  const id1Ref = useRef(id1);
  const [{ width: innerW }, setWH1] = useState<{
    width?: number;
    height?: number;
  }>({});
  useViewSize(id1Ref.current, setWH1);
  const [offsetLeft, setOffsetLeft, offsetLeftRef] = useRefState(0);
  useEffect(() => {
    if (outW && innerW && outW < innerW) {
      interval.current = setInterval(() => {
        let offset = offsetLeftRef.current;
        if (offsetLeftRef.current < -innerW) {
          offset = outW;
        } else {
          offset = offsetLeftRef.current - 1;
        }
        setOffsetLeft(offset);
      }, 1000 / 70);
    }
    return () => clearInterval(interval.current);
  }, [innerW, offsetLeftRef, outW, setOffsetLeft]);
  return (
    <View
      className={classNames(styles.noticeBarBox, className)}
      style={{ background, color, ...style }}
    >
      {offsetLeft}
      {icon && <Icon name={icon} color={color} />}
      {title && <View className={styles.noticeBarTitle}>{title}：</View>}
      <View className={styles.noticeContent} id={idRef.current}>
        <View
          className={styles.noticeInner}
          id={id1Ref.current}
          style={{ transform: `translate(${offsetLeft},-50%)` }}
        >
          {children}
        </View>
      </View>
    </View>
  );
};

export default NoticeBar;
