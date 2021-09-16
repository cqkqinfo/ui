---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## ListItem 列表项

列表项

```tsx
import React from 'react';
import { Space, List, ListItem, PartTitle, CommonImg } from '@kqinfo/ui';
import getList from '../_mock/getList';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>一般用法</PartTitle>
    <List
      getList={getList}
      renderItem={({ random, id }) => (
        <ListItem
          key={id}
          img={CommonImg.doctor}
          title={'王医生'}
          subtitle={'外科'}
          text={'新生儿中心'}
          footer={'凯桥互联网医院'}
        />
      )}
    />
  </Space>
);
```

<API></API>
