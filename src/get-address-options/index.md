---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## getAddressOptions 获取城市数据

获取城市数据需要在小程序 `request` 域名里加上 `kq-static.oss-cn-beijing.aliyuncs.com`

```tsx
import React from 'react';
import { getAddressOptions, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        getAddressOptions().then(v => alert(JSON.stringify(v)));
      }}
      type={'priary'}
    >
      获取
    </Button>
  </Space>
);
```
