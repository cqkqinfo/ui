---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## getAccountInfoSync 获取描述信息

获取描述信息，可以获取当前是否是开发版或者体验版、正式版。

`web`上不同版本的对应关系是：本地调试：开发版；`tih`二级域名：体验版；`ih`二级域名：正式版。

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  getAccountInfoSync,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        getAccountInfoSync().then(console.log);
      }}
      type={'priary'}
    >
      获取描述信息
    </Button>
  </Space>
);
```

<API></API>
