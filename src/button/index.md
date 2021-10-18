---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Button 按钮

按钮

```tsx
import React from 'react';
import { Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>按钮类型</PartTitle>
    <Button>默认</Button>
    <Button type={'primary'}>主题色按钮</Button>
    <Button type={'attract'}>醒目色按钮</Button>
    <PartTitle>幽灵按钮</PartTitle>
    <Button ghost>默认</Button>
    <Button type={'primary'} ghost>
      主题色按钮
    </Button>
    <Button type={'attract'} ghost>
      醒目色按钮
    </Button>
    <PartTitle>行内元素</PartTitle>
    <Space size={'10px'}>
      <Button block={false}>默认</Button>
      <Button type={'primary'} block={false}>
        主题色按钮
      </Button>
      <Button type={'attract'} block={false}>
        醒目色按钮
      </Button>
    </Space>
    <PartTitle>阴影</PartTitle>
    <Button shadow>默认</Button>
    <Button type={'primary'} shadow>
      主题色
    </Button>
    <Button type={'attract'} shadow>
      醒目色
    </Button>
    <PartTitle>大小</PartTitle>
    <Space size={'10px'}>
      <Button size={'small'} block={false}>
        小号
      </Button>
      <Button type={'primary'} size={'action'} block={false}>
        操作按钮，大小跟小号差不多
      </Button>
    </Space>
    <PartTitle>加载中</PartTitle>
    <Button loading>默认</Button>
    <Button loading type={'primary'}>
      主题色按钮
    </Button>
    <Button loading type={'attract'}>
      醒目色按钮
    </Button>
  </Space>
);
```

<API></API>
