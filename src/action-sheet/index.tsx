import getCurrentPage from '../get-current-page';
import React, { useEffect, useRef, useState } from 'react';
import Sheet, { SheetInstance } from '../sheet';
import { View } from 'remax/one';
import styles from './index.less';
import Space from '../space';

export interface ShowOptions {
  items: { label: React.ReactNode; value: string | number }[];
}

const data: {
  [route: string]: (
    options: ShowOptions,
  ) => Promise<ShowOptions['items'][number]>;
} = {};

const ActionSheet = () => {
  const page = getCurrentPage();
  const [items, setItems] = useState<ShowOptions['items']>([]);
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
        {items.map(({ label, value }, index) => (
          <React.Fragment key={index}>
            <View
              className={styles.item}
              onTap={() => {
                ref.current?.setVisible(false);
                promiseRef.current.resolve({ label, value });
              }}
            >
              {label}
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
