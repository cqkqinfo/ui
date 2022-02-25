import React from 'react';
import { View } from 'remax/one';
import ScrollView from '../../scroll-view';
import styles from './index.modaule.less';
import Item, { Props as Data } from './Item';
import Divider from '../../divider';
import useWebSocket from '../../use-web-socket';

export type Props = Pick<
  Data,
  'doctorName' | 'doctorAvatar' | 'patName' | 'patAvatar'
> & {
  before?: React.ReactNode;
  /**
   * 初始化消息数据
   */
  initData?: Omit<
    Data,
    'doctorName' | 'doctorAvatar' | 'patName' | 'patAvatar'
  >[];
  socketUrl?: string;
};

export default ({ initData = [], before, ...props }: Props) => {
  // const {} = useWebSocket(socketUrl)
  return (
    <ScrollView className={styles.scroll} scrollY showScrollbar={false}>
      <View className={styles.message}>
        {before}
        <Divider className={styles.divider}>查看历史消息</Divider>
        {initData?.map((item, index) => (
          <Item {...item} {...props} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};
