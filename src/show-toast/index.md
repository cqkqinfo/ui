---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## showToast 显示提示

显示提示

```tsx
import React from 'react';
import { showToast, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button onTap={() => showToast({ title: '显示成功' })} type={'primary'}>
      显示
    </Button>
  </Space>
);
```

<API></API>
