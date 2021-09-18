---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## ScrollView 滚动视图

滚动视图

```tsx
import React from 'react';
import { ScrollView, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>基本用法</PartTitle>
    <ScrollView scrollX>
      <Space size={10}>
        {new Array(50).fill(0).map((_, i) => (
          <Space key={i} style={{ width: 50, height: 50, background: 'red' }}>
            {i}
          </Space>
        ))}
      </Space>
    </ScrollView>
  </Space>
);
```

<API></API>
