---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## NoData 空数据占位

空数据占位

```tsx
import React from 'react';
import { Space, NoData, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>一般用法</PartTitle>
    <NoData />
  </Space>
);
```

<API></API>
