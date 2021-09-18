---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## clearStorageSync 清除本地储存

清除本地储存

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  clearStorageSync,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        clearStorageSync();
      }}
      type={'priary'}
    >
      清除数据
    </Button>
  </Space>
);
```

<API></API>
