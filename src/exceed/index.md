---
nav:
  title: Components
  path: /components
group:
  title: 通用
  path: /general
---

## Exceed

超出组件，超出多少行显示省略号

```tsx
import React from 'react';
import { Shadow, Space, Exceed, PartTitle } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Exceed>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </Exceed>
    <PartTitle>自定义行数</PartTitle>
    <Exceed clamp={4}>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </Exceed>
    <PartTitle>自定义省略号</PartTitle>
    <Exceed
      clamp={4}
      more={<View style={{ color: 'blue' }}>...更多</View>}
      moreBg={'#f5f5f9'}
    >
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </Exceed>
  </Space>
);
```

<API></API>
