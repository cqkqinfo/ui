---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Menu 菜单

菜单

```tsx
import React, { useState, useEffect } from 'react';
import { Space, Menu, PartTitle, getAddressOptions } from '@kqinfo/ui';
import { MenuItem } from '@kqinfo/ui/es/menu';

export default () => {
  const [addressOptions, setAddressOptions] = useState<MenuItem[]>([]);
  useEffect(() => {
    getAddressOptions().then(options => {
      const transformData = (data: typeof options) => {
        data.forEach(item => {
          const { label, value } = item;
          delete item.label;
          delete item.value;
          item.id = value;
          item.name = label;
          if (item.children) {
            transformData(item.children);
          }
        });
      };
      transformData(options);
      setAddressOptions(options);
    });
  }, []);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Menu
        onSelect={console.log}
        onChange={console.log}
        data={[
          {
            name: '科室1',
            id: 1,
            children: [
              { name: '子科室1', id: 11 },
              { name: '子科室2', id: 12 },
            ],
          },
          {
            name: '科室2',
            id: 2,
            children: [
              { name: '子科室3', id: 13 },
              { name: '子科室4', id: 14 },
            ],
          },
        ]}
      />
      <PartTitle>二级菜单</PartTitle>
      <Menu
        onSelect={console.log}
        onChange={console.log}
        data={[
          {
            name: '科室1',
            id: 1,
            children: [
              {
                name: '子科室1',
                id: 11,
                children: [
                  { name: '子子科室1', id: 11 },
                  { name: '子子科室2', id: 12 },
                ],
              },
              {
                name: '子科室2',
                id: 12,
                children: [
                  { name: '子子科室3', id: 15 },
                  { name: '子子科室4', id: 16 },
                ],
              },
            ],
          },
          {
            name: '科室2',
            id: 2,
            children: [
              { name: '子科室3', id: 13 },
              { name: '子科室4', id: 14 },
            ],
          },
        ]}
      />
      <PartTitle>渲染城市数据</PartTitle>
      <Menu
        onSelect={console.log}
        onChange={console.log}
        style={{ height: '40vh' }}
        data={addressOptions}
      />
    </Space>
  );
};
```

<API></API>
