---
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: data-display
---

## List

懒加载列表

```tsx
import React from 'react';
import { Space, List, PartTitle } from '@kqinfo/ui';
import getList from '../_mock/getList';

export default () => (
  <Space vertical size={10}>
    <PartTitle>一般用法</PartTitle>
    <List
      defaultLimit={50}
      getList={getList}
      loadingTip={'加载中...'}
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
