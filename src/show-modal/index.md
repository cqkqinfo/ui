---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## showModal 显示确认框

显示确认框

```tsx
import React from 'react';
import { showModal, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => showModal({ title: '提示', content: '内容' })}
      type={'primary'}
    >
      显示
    </Button>
  </Space>
);
```

<API></API>
