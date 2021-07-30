---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## showLoading 显示加载

显示加载

```tsx
import React from 'react';
import { showLoading, Button, Space, PartTitle, hideLoading } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        showLoading({ title: '加载中...' });
        setTimeout(hideLoading, 3000);
      }}
      type={'priary'}
    >
      显示
    </Button>
  </Space>
);
```

<API></API>
