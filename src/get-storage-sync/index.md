---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## getStorageSync 获取本地储存

获取本地储存

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  getStorageSync,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        getStorageSync('date');
      }}
      type={'priary'}
    >
      获取数据
    </Button>
  </Space>
);
```

<API></API>
