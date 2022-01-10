---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Price 金额

金额，自动处理以分为单位的金额

```tsx
import React, { useEffect, useState } from 'react';
import { Table, Space, PartTitle, Price } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <Price price={12345} />
      <PartTitle>自定义样式</PartTitle>
      <Price style={{ fontSize: 30, color: 'blue' }} price={12345} />
      <Price bigScale={4} price={12345} />
      <Price bigScale={4} bigPrefix price={12345} />
      <Price bigScale={4} bigDecimal price={12345} />
      <PartTitle>不放大文字</PartTitle>
      <Price bigScale={1} price={12345} />
    </Space>
  );
};
```

<API></API>
