---
group:
  title: 数据录入
  path: data-entry
nav:
  title: Components
  path: /components
---

## ReInput

原始输入框，没有样式，回调事件由`onInput`改为`onChange`，并且没有值乱跳的问题。

```tsx
import React from 'react';
import { ReInput, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>基本使用</PartTitle>
    <ReInput />
  </Space>
);
```

<API></API>
