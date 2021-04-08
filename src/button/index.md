---
nav:
  title: Components
  path: /components
group:
  title: 通用
  path: /general
---

## Button

按钮

```tsx
import React from 'react';
import { Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10} alignItems={'flex-start'}>
    <PartTitle>按钮类型</PartTitle>
    <Button>默认</Button>
    <Button type={'primary'}>主题色按钮</Button>
    <PartTitle>幽灵按钮</PartTitle>
    <Button ghost>默认</Button>
    <Button type={'primary'} ghost>
      主题色按钮
    </Button>
    <PartTitle>行内元素</PartTitle>
    <Space size={10}>
      <Button block={false}>默认</Button>
      <Button type={'primary'} block={false}>
        主题色按钮
      </Button>
    </Space>
    <PartTitle>阴影</PartTitle>
    <Button shadow>默认</Button>
    <Button type={'primary'}>默认</Button>
    <PartTitle>加载中</PartTitle>
    <Button loading>默认</Button>
    <Button loading type={'primary'}>
      主题色按钮
    </Button>
  </Space>
);
```

<API></API>
