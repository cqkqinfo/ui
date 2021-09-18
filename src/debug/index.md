---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## debug 调试模式

调试模式，web 端和小程序端只会在非正式环境才会开启，web 端正式环境可以通过在链接上添加`isDebug=true`手动开启

```tsx
import React from 'react';
import { showLoading, Button, Space, PartTitle, debug } from '@kqinfo/ui';

debug();

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <code>debug()</code>
  </Space>
);
```

<API></API>
