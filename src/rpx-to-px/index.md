---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## rpxToPx rpx 单位转 px

设计图为`750宽度`的单位尺寸转成`px`在行内样式上使用，确保不同设备大小表现一致。

```tsx
import React from 'react';
import { Button, Space, PartTitle, scanCode, rpxToPx } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Space
      style={{ width: rpxToPx(750 / 2), height: 100, background: 'red' }}
    />
    <PartTitle>对比不使用 rpxToPx</PartTitle>
    <Space style={{ width: 750 / 2, height: 100, background: 'red' }} />
  </Space>
);
```
