import getCurrentPage from '../get-current-page';
import React, { useRef, useState } from 'react';
import { SheetWrap, SheetWrapInstance } from '../sheet';
import { View } from 'remax/one';
import styles from './index.module.less';
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
  const [options, setOptions] = useState<{ items: ShowOptions['items'] }>({
    items: [],
  });
  const ref = useRef<SheetWrapInstance>(null);
  return (
    <SheetWrap ref={ref} setOptions={setOptions} data={data}>
      <Space vertical style={{ width: '100vw' }}>
        {options.items.map(({ label, value }, index) => (
          <React.Fragment key={index}>
            <View
              className={styles.item}
              onTap={() => {
                ref.current?.sheetRef?.setVisible(false);
                ref.current?.promiseRef.resolve({ label, value });
              }}
            >
              {label}
            </View>
            {index !== options.items.length - 1 && (
              <View className={styles.line} />
            )}
          </React.Fragment>
        ))}
        <View
          className={styles.cancel}
          onTap={() => {
            ref.current?.sheetRef?.setVisible(false);
            ref.current?.promiseRef.reject();
          }}
        >
          取消
        </View>
      </Space>
    </SheetWrap>
  );
};

ActionSheet.show = (options: ShowOptions) => {
  const page = getCurrentPage();
  return data[page](options);
};

export default ActionSheet;
