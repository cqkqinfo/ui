---
nav:
  title: 工具
  path: /utils
group:
  title: hooks
  path: /hooks
---

## useSafeArea 获取安全区域

获取安全区域

```tsx
import React, { useState } from 'react';
import { Button, Space, PartTitle, useSafeArea } from '@kqinfo/ui';

export default () => {
  const { bottomHeight } = useSafeArea();
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Space>bottomHeight：{bottomHeight}</Space>
    </Space>
  );
};
```

<API></API>
