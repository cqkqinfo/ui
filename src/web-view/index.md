---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## WebView 网页视图

网页视图

```tsx
import React from 'react';
import { WebView, Space, PartTitle } from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <WebView src={window.location.origin} />
    </Space>
  );
};
```

<API></API>
