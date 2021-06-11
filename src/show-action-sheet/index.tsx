import React, { createRef, useRef } from 'react';
import { View } from 'remax/one';
import Sheet, { SheetInstance } from '../sheet';
import styles from './index.less';

const ref = createRef<SheetInstance>();

export const ActionSheet = () => {
  return (
    <Sheet ref={ref}>
      <View className={styles.item}>1</View>
      <View className={styles.line} />
      <View className={styles.item}>2</View>
      <View className={styles.line} />
      <View className={styles.item}>3</View>
      <View
        className={styles.cancel}
        onTap={() => ref.current?.setVisible(false)}
      >
        取消
      </View>
    </Sheet>
  );
};

export default () => {
  ref.current?.setVisible(true);
};
