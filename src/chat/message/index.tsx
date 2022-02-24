import React from 'react';
import { View } from 'remax/one';
import ScrollView from '../../scroll-view';
import styles from './index.modaule.less';
import Item, { Props as Data } from './Item';
import Divider from '../../divider';

export type Props = Pick<
  Data,
  'doctorName' | 'doctorAvatar' | 'patName' | 'patAvatar'
> & {
  before?: React.ReactNode;
  /**
   * 消息数据
   */
  data?: Omit<Data, 'doctorName' | 'doctorAvatar' | 'patName' | 'patAvatar'>[];
};

export default ({ data = [], before, ...props }: Props) => {
  return (
    <ScrollView className={styles.scroll} scrollY>
      <View className={styles.message}>
        {before}
        <Divider className={styles.divider}>查看历史消息</Divider>
        {data?.map((item, index) => (
          <Item {...item} {...props} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};
