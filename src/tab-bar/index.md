---
nav:
  title: 组件
  path: /components
group:
  title: 数据显示
  path: /data-display
---

## TabBar

底部导航栏

```tsx
import React, { useState } from 'react';
import { Space, TabBar, PartTitle, Icon } from '@kqinfo/ui';

export default () => {
  const tabData = [
    {
      icon: <Icon name={'kq-search'} />,
      index: 0,
      title: '首页',
    },
    {
      icon: <Icon name={'kq-loading'} />,
      index: 1,
      title: '工作台',
    },
    {
      icon: <Icon name={'kq-down'} />,
      index: 2,
      title: '我的',
    },
  ];
  return (
    <Space vertical size={10}>
      <PartTitle>一般用法</PartTitle>
      <TabBar items={tabData}></TabBar>
    </Space>
  );
};
```

<API></API>
