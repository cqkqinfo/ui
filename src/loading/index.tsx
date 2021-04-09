import React from 'react';
import { View } from 'remax/one';
import styles from './index.less';
import NeedWrap from '../need-wrap';
import Shadow from '../shadow';
import Icon from '../icon';
import rpxToPx from '../rpx-to-px';
import Rotate from '../rotate';

export interface Props {
  /**
   * 加载中的文本内容
   * @default 加载中
   */
  content?: string;
  /**
   * 是否是顶部loading
   * @default false
   */
  top?: boolean;
}

export default ({ top = false, content = '加载中' }: Props) => {
  return (
    <View className={!top && styles.mask}>
      <NeedWrap need={top} wrap={Shadow}>
        <View className={top ? styles.top : styles.full}>
          <Rotate>
            <Icon
              name={top ? 'kq-loading' : 'kq-loading2'}
              color={top ? '#5299F6' : '#fff'}
              size={rpxToPx(top ? 25 : 40)}
            />
          </Rotate>
          {!top && <View className={styles.text}>{content}</View>}
        </View>
      </NeedWrap>
    </View>
  );
};
