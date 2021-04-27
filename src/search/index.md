---
group:
  title: 数据录入
  path: /data-entry
nav:
  title: 组件
  path: /components
---

## Search

搜索框

```tsx
import React from 'react';
import { Search, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>基本使用</PartTitle>
    <Search placeholder={'请输入搜索内容'} onConfirm={console.log} />
    <PartTitle>显示搜索按钮</PartTitle>
    <Search placeholder={'请输入搜索内容'} showBtn onConfirm={console.log} />
  </Space>
);
```

<API></API>
