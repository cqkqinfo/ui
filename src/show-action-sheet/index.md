---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## showActionSheet 显示操作

显示操作

```tsx
import React from 'react';
import { showActionSheet, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        showActionSheet({ itemList: ['操作1', '操作2', '操作3'] }).then(obj =>
          alert(JSON.stringify(obj)),
        );
      }}
      type={'primary'}
    >
      显示
    </Button>
  </Space>
);
```
