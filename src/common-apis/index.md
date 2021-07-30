---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## commonApis 常用接口

一些常用的接口整合

```tsx
import React from 'react';
import { axios, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        axios.get('/components/utils/axios').then(console.log);
      }}
      type={'priary'}
    >
      网络请求
    </Button>
  </Space>
);
```

### 通过 openid 登录
