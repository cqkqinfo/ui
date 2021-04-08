---
nav:
  title: Components
  path: /components
group:
  title: 通用
  path: /general
---

## Icon

图标

```tsx
import React from 'react';
import { Icon, Space, PartTitle } from '@kqinfo/ui';

const renderItem = (name: string) => (
  <Space
    justify={'center'}
    size={10}
    alignItems={'center'}
    vertical
    style={{
      background: '#fff',
      width: 100,
      height: 100,
      border: '1px solid #eee',
    }}
  >
    <Icon name={'kq-loading'} size={20} />
    {name}
  </Space>
);

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>基本用法</PartTitle>
    <Space>{renderItem('kq-loading')}</Space>
  </Space>
);
```

<API></API>
