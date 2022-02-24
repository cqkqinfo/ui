import React, { useMemo } from 'react';
import { View, Image } from 'remax/one';
import styles from './index.modaule.less';
import classNames from 'classnames';
import dayjs from 'dayjs';

enum DataType {}

export interface Props {
  /**
   * 消息内容
   */
  content: string;
  /**
   * 消息时间
   */
  date?: string;
  /**
   * 是否是自己的消息
   */
  isMe?: boolean;
  /**
   * 消息类型
   */
  type?: DataType;
  /**
   * 医生昵称
   */
  doctorName?: string;
  /**
   * 医生头像
   */
  doctorAvatar?: string;
  /**
   * 患者昵称
   */
  patName?: string;
  /**
   * 医生头像
   */
  patAvatar?: string;
}

const Avatar = ({ name, img }: { name?: string; img?: string }) =>
  img ? (
    <Image className={styles.avatar} />
  ) : (
    <View className={styles.avatar}>{name}</View>
  );

export default ({
  content,
  isMe,
  doctorAvatar,
  date,
  doctorName,
  patAvatar,
  patName,
}: Props) => {
  const dateNode = useMemo(
    () =>
      date && (
        <View className={styles.tip}>
          {dayjs(date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
            ? dayjs(date).format('HH:mm')
            : dayjs(date).format('YYYY') === dayjs().format('YYYY')
            ? dayjs(date).format('MM-DD HH:mm')
            : dayjs(date).format('YYYY-MM-DD HH:mm')}
        </View>
      ),
    [date],
  );
  return (
    <>
      {dateNode}
      <View className={classNames(styles.item, isMe && styles.isMe)}>
        <Avatar
          name={isMe ? patName : doctorName}
          img={isMe ? patAvatar : doctorAvatar}
        />
        <View className={classNames(styles.arrow, isMe && styles.isMeArrow)} />
        <View className={classNames(styles.bubble, isMe && styles.isMeBubble)}>
          {content}
        </View>
      </View>
    </>
  );
};
