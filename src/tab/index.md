---
nav:
  title: Components
  path: /components
---

## Tab

切换标签

```tsx
import React from 'react';
import { Tab, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10}>
    <PartTitle>基本用法</PartTitle>
    <Tab
      tabs={[
        { content: '标签1', index: 1 },
        { content: '标签2', index: 2 },
      ]}
    />
  </Space>
);
```

<API></API>
