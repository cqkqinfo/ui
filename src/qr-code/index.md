---
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: data-display
---

## QrCode

二维码

```tsx
import React from 'react';
import { QrCode, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10}>
    <PartTitle>基本用法</PartTitle>
    <QrCode content={'233'} style={{ width: 200, height: 200 }} />
  </Space>
);
```

<API></API>
