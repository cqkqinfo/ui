---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## setStorageSync 设置本地储存

设置本地储存

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  setStorageSync,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        setStorageSync('date', new Date().toString());
      }}
      type={'primary'}
    >
      设置数据
    </Button>
  </Space>
);
```

<API></API>
