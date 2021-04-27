---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## BarCode

条形码

```tsx
import React from 'react';
import { BarCode, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>基本用法</PartTitle>
    <BarCode content={'233'} style={{ width: 200, height: 200 }} />
  </Space>
);
```

<API></API>
