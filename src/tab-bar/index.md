---
nav:
  title: 组件
  path: /components
group:
  title: 数据显示
  path: /data-display
---

## TabBar 底部导航栏

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
  const tabData2 = [
    {
      icon: <Icon name={'kq-search'} />,
      index: 0,
      title: '首页',
    },
    {
      icon: () => (
        <Space style={{ transform: 'translateY(-30%)' }}>
          <Icon name={'kq-zengjia'} color={'#2780d9'} size={100} />
        </Space>
      ),
      index: 1,
    },
    {
      icon: <Icon name={'kq-down'} />,
      index: 2,
      title: '我的',
    },
  ];
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <TabBar items={tabData} />
      <PartTitle>自定义渲染</PartTitle>
      <TabBar items={tabData2} />
    </Space>
  );
};
```

<API exports='["default", "tabBarItemProps"]'></API>
