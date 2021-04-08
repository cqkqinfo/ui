---
nav:
  title: Components
  path: /components
group:
  title: 动画
  path: /animation
---

## Rotate

旋转

```tsx
import React from 'react';
import { Rotate, Icon, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>按钮类型</PartTitle>
    <Rotate>
      <Icon name={'kq-loading'} />
    </Rotate>
  </Space>
);
```

<API></API>
