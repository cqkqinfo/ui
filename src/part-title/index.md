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
import { Space, PartTitle, Button } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'stretch'}>
    <PartTitle>一般用法</PartTitle>
    <PartTitle required>必填</PartTitle>
    <PartTitle required bold={false}>
      必填细体
    </PartTitle>
    <PartTitle required bold={false} full>
      填充字体颜色
    </PartTitle>
    <PartTitle
      required
      bold={false}
      full
      action={<Button type={'action'}>操作</Button>}
    >
      操作按钮
    </PartTitle>
  </Space>
);
```

<API></API>
