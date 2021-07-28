---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## removeStorageSync

移除本地储存

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  removeStorageSync,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        removeStorageSync('date');
      }}
      type={'priary'}
    >
      移除数据
    </Button>
  </Space>
);
```

<API></API>
