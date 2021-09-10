import * as React from 'react';
import { View, Text } from 'remax/one';
import { Skeleton, Switch, PartTitle } from '@kqinfo/ui';
import styles from './index.module.less';
import { useState } from 'react';

const customizeSkeleton = (
  <View className={styles.app}>
    <View className={styles.image} />
    <View className={styles.info}>
      <View className={styles.main}>
        <View className={styles.title} />
        <View className={styles.item} />
      </View>
      <View className={styles.footer}>
        <Text className={styles.price} />
        <Text className={styles.cart} />
      </View>
    </View>
  </View>
);

export default () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleChangeSwitch = (
    v: boolean | ((prevState: boolean) => boolean),
  ) => {
    setChecked(v);
    setLoading(!v);
  };
  return (
    <>
      <PartTitle>基本用法</PartTitle>
      <View>
        <Skeleton />
      </View>

      <PartTitle>标题颜色</PartTitle>
      <View>
        <Skeleton titleColor="rgba(255, 153, 153, 0.2)" />
      </View>

      <View>
        <PartTitle>无标题</PartTitle>
        <Skeleton title={false} />
      </View>

      <View>
        <PartTitle>段落</PartTitle>
        <Skeleton paragraph={{ rows: 4, width: [240, 'aut0', 'aut0', 200] }} />
      </View>

      <View>
        <PartTitle>头像</PartTitle>
        <Skeleton avatar />
      </View>

      <View>
        <PartTitle>图片</PartTitle>
        <Skeleton avatar image />
      </View>

      <View>
        <PartTitle>自定义</PartTitle>
        <Skeleton customize={customizeSkeleton} />
      </View>

      <PartTitle>Fade</PartTitle>
      <View style={{ height: '200px' }}>
        <View className={styles.action}>
          <Switch small checked={checked} onChange={handleChangeSwitch} />
        </View>
        <Skeleton fade loading={loading}>
          <View>
            <View className={styles.content}>Amazing!!!</View>
          </View>
        </Skeleton>
      </View>

      <View>
        <PartTitle>设置重复（列表加载推荐）</PartTitle>
        <Skeleton repetitions={3} />
      </View>

      <View>
        <PartTitle>设置间距</PartTitle>
        <Skeleton repetitions={2} space={50} />
      </View>

      <View>
        <PartTitle>自定义样式</PartTitle>
        <Skeleton
          style={{
            padding: 10,
            borderRadius: 6,
            margin: '0 20px',
            backgroundColor: '#dcdbdb',
          }}
        />
      </View>
    </>
  );
};
