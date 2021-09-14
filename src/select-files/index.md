---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## selectFiles 选择文件

选择文件

```tsx
import React from 'react';
import { Button, Space, PartTitle, selectFiles } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        selectFiles({}).then(data => alert(data[0].name));
      }}
      type={'priary'}
    >
      选择文件
    </Button>
  </Space>
);
```

<API></API>
