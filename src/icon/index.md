---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Icon

图标

```tsx
import React from 'react';
import { Icon, Space, PartTitle } from '@kqinfo/ui';

const renderItem = (name: string) => (
  <Space
    justify={'center'}
    size={'10px'}
    alignItems={'center'}
    vertical
    style={{
      background: '#fff',
      width: 100,
      height: 100,
      border: '1px solid #eee',
    }}
  >
    <Icon name={name} />
    {name}
  </Space>
);

const names = [
  'kq-search',
  'kq-loading',
  'kq-down',
  'kq-loading2',
  'kq-yes',
  'kq-add',
  'kq-clear',
  'kq-clear2',
  'kq-notice',
  'kq-zengjia',
  'kq-right',
  'kq-jianshao',
];

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>基本用法</PartTitle>
    <Space flexWrap={'wrap'}>{names.map(renderItem)}</Space>
  </Space>
);
```

<API></API>
