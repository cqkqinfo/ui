---
nav:
  title: 组件
  path: /components
group:
  title: 动画
  path: /animation
---

## Fold 折叠

折叠组件

```tsx
import React, { useState } from 'react';
import { Shadow, Space, Fold, Button, PartTitle } from '@kqinfo/ui';

export default () => {
  const [folded, setFolded] = useState(false);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Button type={'primary'} onTap={() => setFolded(!folded)}>
        切换
      </Button>
      <Fold folded={folded}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </Fold>
    </Space>
  );
};
```

<API></API>
