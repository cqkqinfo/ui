---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## BackgroundImage

背景图片

```tsx
import React from 'react';
import { Space, BackgroundImg, PartTitle, CommonImg } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>一般用法</PartTitle>
    <BackgroundImg
      img={CommonImg.doctor}
      imgProps={{ style: { width: 100, height: 100 } }}
    >
      23333
    </BackgroundImg>
  </Space>
);
```

<API></API>
