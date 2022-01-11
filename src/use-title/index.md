---
nav:
  title: 工具
  path: /utils
group:
  title: hooks
  path: /hooks
---

## useTitle 设置标题

设置标题

```tsx
import React, { useState } from 'react';
import { Button, Space, PartTitle, useTitle } from '@kqinfo/ui';

export default () => {
  const [title, setTitle] = useState('标题');
  useTitle(title);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Button onTap={() => setTitle(Math.random() + '')} type={'primary'}>
        重置
      </Button>
    </Space>
  );
};
```

<API></API>
