---
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Step

步骤条

```tsx
import React from 'react';
import { Step, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10}>
    <PartTitle>基本用法</PartTitle>
    <Step items={['步骤1', '步骤2', '步骤3']} current={2} />
  </Space>
);
```

<API></API>
