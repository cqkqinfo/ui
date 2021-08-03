---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## getPlatform 获取当前平台

对应的是`REMAX_PLATFORM`

```tsx
import React from 'react';
import { showLoading, Button, Space, PartTitle, getPlatform } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        console.log(getPlatform);
      }}
      type={'priary'}
    >
      获取平台
    </Button>
  </Space>
);
```

<API></API>
