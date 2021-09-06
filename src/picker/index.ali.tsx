import React from 'react';
import { multiLevelSelect, View } from 'remax/ali';
import { Props, useProps } from './common';

const getList = (data: Props['data']): any =>
  data?.flat().map(({ children, label }: any) => ({
    name: label,
    subList: getList(children),
  }));

export default (props: Props) => {
  const { title, data, onChange, children, childrenCls } = useProps(props);
  return (
    <View
      className={childrenCls}
      onTap={() =>
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
        })
      }
    >
      {children}
    </View>
  );
};
