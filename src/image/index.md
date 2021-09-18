---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Image 图片

图片

```tsx
import React from 'react';
import { Space, PartTitle, Image, CommonImg } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>一般用法</PartTitle>
    <Image src={CommonImg.doctor} style={{ width: 100, height: 100 }} />
    <PartTitle>默认占位图</PartTitle>
    <Image style={{ width: 100, height: 100 }} />
  </Space>
);
```

<API></API>
