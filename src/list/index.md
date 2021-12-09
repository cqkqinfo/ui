---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## List 懒加载列表

懒加载列表

```tsx
import React, { useCallback, useState, useRef } from 'react';
import { Space, List, PartTitle, Search, Button } from '@kqinfo/ui';
import getList from '../_mock/getList';

export default () => {
  const [search, setSearch] = useState();
  const listRef = useRef<{ refreshList: (retainList?: boolean) => void }>(null);
  return (
    <Space vertical size={'10px'}>
      <Space size={'10px'}>
        <Button onTap={() => listRef.current?.refreshList()}>完全刷新</Button>
        <Button onTap={() => listRef.current?.refreshList(true)}>
          保留列表刷新
        </Button>
      </Space>
      <Search showBtn onConfirm={setSearch} />
      <List
        ref={listRef}
        defaultLimit={100}
        //getList要用useCallback包一下，不然会出现重复请求
        getList={useCallback(
          (page, limit) => {
            console.log(search);
            return getList(page, limit, 1, search);
            // useCallback的依赖项可以放请求列表的参数，参数变了会自动刷新列表
          },
          [search],
        )}
        renderItem={({ random, id, search }) => (
          <div key={id}>
            random: {random} id: {id} search：{search}
          </div>
        )}
      />
    </Space>
  );
};
```

<API></API>
