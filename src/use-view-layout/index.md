---
nav:
  title: 工具
  path: /utils
group:
  title: hooks
  path: /hooks
---

## useViewLayout 获取元素布局

获取元素布局

```tsx
import React, { useState } from 'react';
import { Button, Space, PartTitle, useViewLayout } from '@kqinfo/ui';

export default () => {
  const { width, height, x, y, ...arg } = useViewLayout();
  const [wh, setWh] = useState({ width: 200, height: 200 });
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Space
        style={{ background: '#eee', ...wh }}
        {...arg}
        vertical
        size={'10px'}
      >
        <Space>我是元素</Space>
        <Space>width: {width}</Space>
        <Space>height: {height}</Space>
        <Space>x: {x}</Space>
        <Space>y: {y}</Space>
      </Space>
      <Button
        onTap={() => {
          setWh({
            width: Math.random() * 300,
            height: Math.random() * 300,
          });
        }}
        type={'primary'}
      >
        重置大小
      </Button>
    </Space>
  );
};
```

<API></API>
