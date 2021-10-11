---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Swiper 轮播图

轮播图

```tsx
import React from 'react';
import { Swiper, Space, PartTitle, CommonImg, Image } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>基本用法</PartTitle>
    <Swiper
      interval={1000}
      indicatorDots
      autoplay
      style={{ width: '100vw', height: '30vh' }}
      items={Object.values(CommonImg).map(img => ({
        node: <Image src={img} style={{ width: '100vw', height: '30vh' }} />,
      }))}
    />
  </Space>
);
```

<API></API>
