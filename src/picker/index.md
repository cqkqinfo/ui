---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  path: /data-entry
---

## Picker 选择器

选择器

城市数据需要在小程序 `request` 域名里加上 `kq-static.oss-cn-beijing.aliyuncs.com`

```tsx
import React, { useEffect, useState } from 'react';
import {
  Picker,
  getAddressOptions,
  PartTitle,
  Space,
  Button,
} from '@kqinfo/ui';

export default () => {
  const [addressOptions, setAddressOptions] = useState<PickerData[]>([]);
  useEffect(() => {
    getAddressOptions().then(options => setAddressOptions(options));
  }, []);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>地区选择</PartTitle>
      <Picker cols={3} data={addressOptions}>
        <Button type={'primary'}>显示</Button>
      </Picker>
      <PartTitle>日期选择</PartTitle>
      <Picker mode={'date'}>
        <Button type={'primary'}>显示</Button>
      </Picker>
      <PartTitle>日期加时分选择</PartTitle>
      <Picker mode={'datetime'}>
        <Button type={'primary'}>显示</Button>
      </Picker>
      <PartTitle>时间选择</PartTitle>
      <Picker mode={'time'}>
        <Button type={'primary'}>显示</Button>
      </Picker>
      <PartTitle>自定义Data</PartTitle>
      <Picker
        data={[
          { value: '1', label: '大明' },
          { value: '2', label: '小红' },
        ]}
      >
        <Button type={'primary'}>显示</Button>
      </Picker>
    </Space>
  );
};
```

<API exports='["PickerData", "default"]'></API>
