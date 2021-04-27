---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## DropDownMenuItem

下拉菜单组件

```tsx
import React, { useState, useMemo } from 'react';
import {
  Space,
  DropDownMenu,
  DropDownMenuItem,
  PartTitle,
  Calendar,
} from '@kqinfo/ui';
import { View } from 'remax';

export default () => {
  const [selectUser, setSelectUser] = useState('1');

  const options1 = useMemo(
    () => [
      {
        text: '全部',
        value: '1',
      },
      {
        text: '凯小桥',
        value: '2',
      },
    ],
    [],
  );
  const options2 = useMemo(
    () => [
      {
        text: '检查报告',
        value: '1',
      },
      {
        text: '检验报告',
        value: '2',
      },
    ],
    [],
  );

  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <DropDownMenu showModal={false}>
        <DropDownMenuItem
          value={selectUser}
          onChange={setSelectUser}
          options={options1}
        />
        <DropDownMenuItem title="报告类型" options={options2} />
      </DropDownMenu>
      <div style={{ marginTop: '150px' }} />
      <PartTitle>自定义子项目</PartTitle>
      <DropDownMenu>
        <DropDownMenuItem
          value={selectUser}
          onChange={setSelectUser}
          options={options1}
        />
        <DropDownMenuItem title="报告类型" options={options2} />
        <DropDownMenuItem title="报告日历">
          <Calendar />
        </DropDownMenuItem>
      </DropDownMenu>
    </Space>
  );
};
```

<API></API>
