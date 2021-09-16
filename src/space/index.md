---
nav:
  title: 组件
  path: /components
group:
  title: 布局
  path: /layout
---

## Space 布局分割

用于各种布局分割的组件，如果没有效果请确保`children`支持`style`的 prop

```tsx
import React from 'react';
import { Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>横排分割</PartTitle>
    <Space size={'10px'}>
      <Button block={false}>1</Button>
      <Button>2</Button>
      <Button type={'primary'}>3</Button>
    </Space>
    <PartTitle>竖排分割</PartTitle>
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <Button block={false}>1</Button>
      <Button>2</Button>
      <Button type={'primary'}>3</Button>
    </Space>
    <PartTitle>构建列表子项布局</PartTitle>
    <Space
      size={'10px'}
      style={{ background: '#fff', color: '#333' }}
      alignItems={'center'}
    >
      <div style={{ background: '#eee', width: 50, height: 50 }} />
      <Space flex={1} size={'10px'} vertical>
        <Space>名称</Space>
        <Space>描述</Space>
      </Space>
      <Space style={{ marginRight: 10 }}>操作</Space>
    </Space>
    <PartTitle>网格布局</PartTitle>
    <Space ignoreNum={4} flexWrap={'wrap'} size={'14px'}>
      {new Array(6).fill(0).map((_, i) => (
        <Space
          vertical
          style={{ width: '21%' }}
          size={'10px'}
          alignItems={'center'}
        >
          <Space
            style={{ width: '100%', height: '50px', background: '#eee' }}
          />
          <Space
            style={{
              width: '100%',
              height: '10px',
              background: '#eee',
              marginBottom: '20px',
            }}
          />
        </Space>
      ))}
    </Space>
  </Space>
);
```

<API></API>
