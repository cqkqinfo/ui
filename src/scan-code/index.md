---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## scanCode 扫描二维码

扫描二维码

```tsx
import React from 'react';
import { Button, Space, PartTitle, scanCode } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        scanCode().then(data => alert(JSON.stringify(data)));
      }}
      type={'priary'}
    >
      开始扫描
    </Button>
  </Space>
);
```

<API></API>
