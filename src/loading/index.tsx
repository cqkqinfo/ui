import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import NeedWrap from '../need-wrap';
import Shadow from '../shadow';
import Icon from '../icon';
import provider from '../config-provider';
import Space from '../space';

export interface Props {
  /**
   * 加载中的文本内容
   * @default 加载中
   */
  content?: string;
  /**
   * 类型
   * @default full
   */
  type?: 'top' | 'full' | 'inline';
}

export default ({ type, content = '加载中' }: Props) => {
  const { brandPrimary } = provider.useContainer();
  const top = type === 'top';
  if (type === 'inline') {
    return (
      <Space
        size={10}
        className={styles.tip}
        alignItems={'center'}
        justify={'center'}
      >
        <Icon color={'#CCCCCC'} name={'kq-loading2'} />
        {content}
      </Space>
    );
  }
  return (
    <View className={!top && styles.mask}>
      <NeedWrap need={top} wrap={Shadow}>
        <View className={top ? styles.top : styles.full}>
          <Icon
            name={top ? 'kq-loading' : 'kq-loading2'}
            color={top ? brandPrimary : '#fff'}
            className={top ? styles.topIcon : styles.fullIcon}
          />
          {!top && <View className={styles.text}>{content}</View>}
        </View>
      </NeedWrap>
    </View>
  );
};
