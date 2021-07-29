---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Platform

根据平台显示内容

```tsx
import React from 'react';
import { showLoading, Button, Space, PartTitle, Platform } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Platform platform={['web']}>网页</Platform>
    <Platform platform={['wechat']}>小程序</Platform>
  </Space>
);
```

<API></API>
