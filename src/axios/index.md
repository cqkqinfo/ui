---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## axios 统一请求

使用方法同 [axios 官方仓库](https://github.com/axios/axios)

已增加了微信小程序和阿里小程序的适配

使用方法同 web 方式保持一致

```tsx
import React from 'react';
import { axios, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        axios
          .get('/components/utils/axios')
          .then(v => alert(JSON.stringify(v)));
      }}
      type={'priary'}
    >
      网络请求
    </Button>
  </Space>
);
```
