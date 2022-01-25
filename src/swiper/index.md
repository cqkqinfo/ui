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
import React, { useState } from 'react';
import { Swiper, Space, PartTitle, CommonImg, Image, Button } from '@kqinfo/ui';

export default () => {
  const [current, setCurrent] = useState();
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <Swiper
        interval={1000}
        indicatorDots
        autoplay
        onChange={console.log}
        style={{ width: '100%', height: '30vh' }}
        items={Object.values(CommonImg).map(img => ({
          node: <Image src={img} style={{ width: '100%', height: '30vh' }} />,
        }))}
      />
      <PartTitle>自定义配置</PartTitle>
      <Swiper
        interval={1000}
        indicatorDots={'line'}
        autoplay
        displayMultipleItems={3}
        onChange={({ detail: { current } }) => setCurrent(current)}
        current={current}
        style={{ width: '100%', height: '30vh' }}
        items={Object.values(CommonImg).map(img => ({
          node: <Image src={img} style={{ width: 100, height: 100 }} />,
        }))}
      />
      <Space size={'10px'}>
        <Button onTap={() => setCurrent(current - 1)}>上一张</Button>
        <Button onTap={() => setCurrent(current + 1)}>下一张</Button>
      </Space>
    </Space>
  );
};
```

<API></API>
