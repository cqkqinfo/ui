import React from 'react';
import { View } from 'remax/one';
import ScrollView from '../../scroll-view';
import styles from './index.modaule.less';
import Item, { Props as Data } from './Item';
import Divider from '../../divider';
import { TouchEvent } from '@remax/wechat/esm/types/component';

export type Props<D> = Pick<
  Data,
  'doctorName' | 'doctorAvatar' | 'patName' | 'patAvatar'
> & {
  before?: React.ReactNode;
  /**
   * 初始化消息数据
   */
  data?: D[];
  /**
   * 转换你的数据为messageData
   */
  transformData: (
    data: D,
  ) => Omit<Data, 'doctorName' | 'doctorAvatar' | 'patName' | 'patAvatar'>;
  onTap?: (e: TouchEvent) => void;
};

export default <D extends unknown>({
  data = [],
  before,
  transformData,
  onTap,
  ...props
}: Props<D>) => {
  return (
    <ScrollView
      onTap={onTap}
      className={styles.scroll}
      scrollY
      showScrollbar={false}
    >
      <View className={styles.message}>
        {before}
        <Divider className={styles.divider}>查看历史消息</Divider>
        {data?.map((item, index) => (
          <Item {...transformData(item)} {...props} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};
