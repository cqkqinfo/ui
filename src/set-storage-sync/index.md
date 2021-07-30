---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
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
      type={'priary'}
    >
      设置数据
    </Button>
  </Space>
);
```

<API></API>
