---
nav:
  title: Components
  path: /components
group:
  title: 通用
  path: general
---

## Shadow

阴影

```tsx
import React from 'react';
import { Shadow, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Shadow>
      <div style={{ width: 100, height: 100, background: '#fff' }}>
        我是内容
      </div>
    </Shadow>
  </Space>
);
```

<API></API>
