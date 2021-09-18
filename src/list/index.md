---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## List 懒加载列表

懒加载列表

```tsx
import React from 'react';
import { Space, List, PartTitle } from '@kqinfo/ui';
import getList from '../_mock/getList';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>一般用法</PartTitle>
    <List
      defaultLimit={20}
      getList={getList}
      renderItem={({ random, id }) => (
        <div key={id}>
          random: {random} id: {id}
        </div>
      )}
    />
  </Space>
);
```

<API></API>
