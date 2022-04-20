---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Pagination 分页器

分页器

```tsx
import React, { useEffect, useState } from 'react';
import { Pagination, Space, PartTitle } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => {
  const [current, setCurrent] = useState(1);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <Pagination total={15} current={current} onChange={setCurrent} />
    </Space>
  );
};
```

<API></API>
