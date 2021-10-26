---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
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
      type={'primary'}
    >
      开始扫描
    </Button>
  </Space>
);
```

<API></API>
