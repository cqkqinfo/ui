import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.less';
import useViewSize from '../use-view-size';
import Space from '../space';
import Icon from '../icon';
import { useId } from 'parsec-hooks';
import PxToRpx from '../px-to-rpx';
import { NoticeBarProps } from './index';
import LinearGradient from 'react-native-linear-gradient';

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
            animationDuration: `${(PxToRpx(innerW) || 0) / 30}s`,
            paddingLeft: contentW + 'PX',
          }}
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
