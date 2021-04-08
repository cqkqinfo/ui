---
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Menu

菜单

```tsx
import React from 'react';
import { Space, Menu, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10}>
    <PartTitle>一般用法</PartTitle>
    <Menu
      onSelect={console.log}
      data={[
        {
          name: '科室1',
          id: 1,
          children: [
            { name: '子科室1', id: 11 },
            { name: '子科室2', id: 12 },
          ],
        },
        {
          name: '科室2',
          id: 2,
          children: [
            { name: '子科室3', id: 13 },
            { name: '子科室4', id: 14 },
          ],
        },
      ]}
    />
  </Space>
);
```

<API></API>
