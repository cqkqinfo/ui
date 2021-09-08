import React from 'react';
import { multiLevelSelect, View, datePicker, optionsSelect } from 'remax/ali';
import { Props, useProps } from './common';

const getList = (data: Props['data']): any =>
  data?.flat().map(({ children, label }: any) => ({
    name: label,
    subList: getList(children),
  }));

export default (props: Props) => {
  const {
    title,
    cols = 1,
    data,
    onChange,
    mode = 'selector',
    children,
    value,
    start,
    end,
    childrenCls,
    ...newProps
  } = useProps(props);

  return (
    <View
      {...newProps}
      className={childrenCls}
      onTap={() => {
        if (mode === 'multiSelector' || cols !== 1) {
          multiLevelSelect({
            title: title as any,
            name: '',
            list: getList(data),
            fail: () => onChange(undefined),
            success: ({ result }: any) => {
              const items: any = [];
              result.forEach(({ name }: any, i: any) => {
                items[i] = (items[i - 1]?.children || data)
                  ?.flat()
                  .find(({ label }: any) => label === name);
              });
              onChange(items.map(({ value }: any) => value));
            },
          });
        }
        if (mode === 'selector' && cols === 1) {
          const list = getList(data);
          optionsSelect({
            title: title as any,
            selectedOneIndex: list.findIndex(
              (item: { label: string; value: string }) => item.value === value,
            ),
            optionsOne: list.map(
              (item: { label: string; value: string }) => item.label,
            ),
            success: ({ selectedOneIndex }) => {
              onChange(list[selectedOneIndex]?.value);
            },
          });
        }
        if (['time', 'date'].includes(mode)) {
          const format = mode === 'time' ? 'HH:mm' : 'yyyy-MM-dd';
          datePicker({
            format,
            currentDate: value as string,
            startDate: start,
            endDate: end,
            success: res => {
              onChange?.(res.date);
            },
          });
        }
      }}
    >
      {children}
    </View>
  );
};
