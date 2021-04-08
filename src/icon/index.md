---
nav:
  title: Components
  path: /components
group:
  title: 通用
  path: /general
---

## Icon

图标

```tsx
import React from 'react';
import { Icon, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>按钮类型</PartTitle>
    <Icon name={'kq-loading'} />
  </Space>
);
```

<API></API>
