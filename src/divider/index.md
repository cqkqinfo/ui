---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Divider

分割线

```tsx
import React from 'react';
import { Space, Divider, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>一般用法</PartTitle>
    <Divider>选择预缴金额</Divider>
    <PartTitle>自定义颜色</PartTitle>
    <Divider color={'red'}>选择预缴金额</Divider>
  </Space>
);
```

<API></API>
