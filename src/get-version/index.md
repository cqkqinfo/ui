---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## getVersion 获取版本号

可以获取小程序的版本号，`web`上会返回`undefined`

```tsx
import React from 'react';
import { showLoading, Button, Space, PartTitle, getVersion } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        console.log(getVersion);
      }}
      type={'priary'}
    >
      获取版本号
    </Button>
  </Space>
);
```

<API></API>
