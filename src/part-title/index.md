---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## PartTitle 分块标题

分块标题

```tsx
import React from 'react';
import { Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <PartTitle required>必填</PartTitle>
    <PartTitle required bold={false}>
      必填细体
    </PartTitle>
    <PartTitle required bold={false} full>
      填充字体颜色
    </PartTitle>
  </Space>
);
```

<API></API>
