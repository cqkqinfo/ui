---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Status

状态

```tsx
import React from 'react';
import { Status, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Status>已取药</Status>
    <PartTitle>透明底色</PartTitle>
    <Status ghost>已取药</Status>
    <PartTitle>自定义颜色</PartTitle>
    <Status color={'#D95E38'}>待支付</Status>
    <Status color={'#999999'}>已失效</Status>
    <PartTitle>自定义大小</PartTitle>
    <Status style={{ fontSize: 30 }} color={'#D95E38'}>
      待支付
    </Status>
    <Status style={{ fontSize: 40 }} color={'#999999'}>
      已失效
    </Status>
  </Space>
);
```

<API></API>
