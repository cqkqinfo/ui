---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## CommonImg

常用图片

```tsx
import React from 'react';
import { CommonImg, Space, PartTitle } from '@kqinfo/ui';
import { Image } from 'remax/one';

const renderItem = (name: string) => (
  <Space
    justify={'center'}
    size={'10px'}
    alignItems={'center'}
    vertical
    style={{
      background: '#fff',
      width: 100,
      height: 100,
      border: '1px solid #eee',
    }}
  >
    <Image style={{ width: 50, height: 50 }} src={CommonImg[name]} />
    {name}
  </Space>
);

const names = Object.keys(CommonImg);

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>基本用法</PartTitle>
    <Space flexWrap={'wrap'}>{names.map(renderItem)}</Space>
  </Space>
);
```

<API></API>
