---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Indexes 索引选择器

索引选择器

```tsx
import React, { useEffect, useState } from 'react';
import { Indexes, ListItem, CommonImg } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => {
  return (
    <Indexes
      style={{ height: '98vh' }}
      renderItem={({ name }) => ({
        index: name,
        node: (
          <ListItem img={CommonImg.doctor} title={name} footer={'男 23岁'} />
        ),
      })}
      list={[
        { name: '小米' },
        { name: '发大发' },
        { name: '发达' },
        { name: '过分' },
        { name: '特务' },
        { name: '还有' },
        { name: '雨天' },
        { name: '看了' },
        { name: '那部分' },
        { name: '轻武器' },
        { name: '你哪' },
        { name: '密码' },
      ]}
    />
  );
};
```

<API></API>
