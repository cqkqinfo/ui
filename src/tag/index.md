---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Tag

标签

```tsx
import React from 'react';
import { Tag, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Tag>已取药</Tag>
    <PartTitle>透明底色</PartTitle>
    <Tag ghost>已取药</Tag>
    <PartTitle>非半圆角</PartTitle>
    <Tag ghost block>
      已取药
    </Tag>
    <Tag block>已取药</Tag>
    <PartTitle>自定义颜色</PartTitle>
    <Tag color={'#D95E38'}>待支付</Tag>
    <Tag color={'#999999'}>已失效</Tag>
    <PartTitle>自定义大小</PartTitle>
    <Tag style={{ fontSize: 30 }} color={'#D95E38'}>
      待支付
    </Tag>
    <Tag style={{ fontSize: 40 }} color={'#999999'}>
      已失效
    </Tag>
  </Space>
);
```

<API></API>
