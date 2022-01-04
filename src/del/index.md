---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Del 删除

删除

```tsx
import React, { useEffect, useState } from 'react';
import { Table, Space, PartTitle, Del } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => {
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>基本用法</PartTitle>
      <Del>原价：¥999.00</Del>
    </Space>
  );
};
```

<API></API>
