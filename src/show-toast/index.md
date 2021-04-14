---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## showToast

显示提示

```tsx
import React from 'react';
import { showToast, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button onTap={() => showToast({ title: '显示成功' })} type={'priary'}>
      显示
    </Button>
  </Space>
);
```

<API></API>
