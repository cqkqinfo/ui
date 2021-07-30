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

```tsx
import React from 'react';
import { Picker, addressOptions, PartTitle, Space, Button } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>地区选择</PartTitle>
    <Picker cols={3} data={addressOptions}>
      <Button type={'primary'}>显示</Button>
    </Picker>
    <PartTitle>日期选择</PartTitle>
    <Picker mode={'date'}>
      <Button type={'primary'}>显示</Button>
    </Picker>
    <PartTitle>时间选择</PartTitle>
    <Picker mode={'time'}>
      <Button type={'primary'}>显示</Button>
    </Picker>
  </Space>
);
```

<API></API>
