---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Tab

切换标签

```tsx
import React from 'react';
import { Tab, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>基本用法</PartTitle>
    <Tab
      tabs={[
        { content: '标签1', index: 1 },
        { content: '标签2', index: 2 },
      ]}
    />
    <PartTitle>多个Tab</PartTitle>
    <Tab
      tabs={[
        { content: '标签1', index: 1 },
        { content: '标签2', index: 2 },
        { content: '标签3', index: 3 },
      ]}
    />
    <PartTitle>card模式</PartTitle>
    <Tab
      type={'card'}
      tabs={[
        { content: '标签1', index: 1 },
        { content: '标签2', index: 2 },
        { content: '标签3', index: 3 },
        { content: '标签4', index: 4 },
        { content: '标签5', index: 5 },
        { content: '标签6', index: 6 },
        { content: '标签7', index: 7 },
      ]}
    />
  </Space>
);
```

<API></API>
