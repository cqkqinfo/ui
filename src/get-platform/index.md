---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
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
      type={'primary'}
    >
      获取平台
    </Button>
  </Space>
);
```

<API></API>
