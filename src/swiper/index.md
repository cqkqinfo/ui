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
import { Swiper, Space, PartTitle, CommonImg } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>基本用法</PartTitle>
    <Swiper
      interval={500}
      autoplay
      indicatorDots
      style={{ width: '100vw' }}
      items={Object.values(CommonImg).map(img => ({
        node: <img src={img} style={{ width: '100vw', height: '30vh' }} />,
      }))}
    />
  </Space>
);
```

<API></API>
