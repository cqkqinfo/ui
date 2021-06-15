import getCurrentPage from '../get-current-page';
import React, { useEffect, useRef, useState } from 'react';
import Sheet, { SheetInstance } from '@/sheet';
import { View } from 'remax/one';
import styles from './index.less';
import Space from '../space';

export interface ShowOptions {
  items: React.ReactNode[];
}

const data: {
  [route: string]: (
    options: ShowOptions,
  ) => Promise<{ item: React.ReactNode; index: number }>;
} = {};

const ActionSheet = () => {
  const page = getCurrentPage();
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const ref = useRef<SheetInstance>(null);
  const promiseRef = useRef<any>({ resolve: () => {}, reject: () => {} });
  useEffect(() => {
    data[page] = ({ items }) =>
      new Promise((resolve, reject) => {
        setItems(items);
        ref.current?.setVisible(true);
        promiseRef.current = { reject, resolve };
      });
  }, [page]);
  return (
    <Sheet ref={ref}>
      <Space vertical style={{ width: '100vw' }}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <View
              className={styles.item}
              onTap={() => {
                ref.current?.setVisible(false);
                promiseRef.current.resolve({ item, index });
              }}
            >
              {item}
            </View>
            {index !== items.length - 1 && <View className={styles.line} />}
          </React.Fragment>
        ))}
        <View
          className={styles.cancel}
          onTap={() => {
            ref.current?.setVisible(false);
            promiseRef.current.reject();
          }}
        >
          取消
        </View>
      </Space>
    </Sheet>
  );
};

ActionSheet.show = (options: ShowOptions) => {
  const page = getCurrentPage();
  return data[page](options);
};

export default ActionSheet;
