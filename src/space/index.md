---
nav:
  title: Components
  path: /components
group:
  title: 布局
  path: layout
---

## Space

用于各种布局分割的组件，如果没有效果请确保`children`支持`style`的 prop

```tsx
import React from 'react';
import { Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={10}>
    <PartTitle>横排分割</PartTitle>
    <Space size={10}>
      <Button block={false}>1</Button>
      <Button>2</Button>
      <Button type={'primary'}>3</Button>
    </Space>
    <PartTitle>竖排分割</PartTitle>
    <Space vertical size={10} alignItems={'flex-start'}>
      <Button block={false}>1</Button>
      <Button>2</Button>
      <Button type={'primary'}>3</Button>
    </Space>
    <PartTitle>构建列表子项布局</PartTitle>
    <Space
      size={10}
      style={{ background: '#fff', color: '#333' }}
      alignItems={'center'}
    >
      <div style={{ background: '#eee', width: 50, height: 50 }} />
      <Space flex={1} size={10} vertical>
        <Space>名称</Space>
        <Space>描述</Space>
      </Space>
      <Space style={{ marginRight: 10 }}>操作</Space>
    </Space>
  </Space>
);
```

<API></API>
