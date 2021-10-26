---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## chooseImage 选择图片

选择图片

```tsx
import React from 'react';
import { chooseImage, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => chooseImage().then(data => alert(JSON.stringify(data)))}
      type={'primary'}
    >
      选择
    </Button>
  </Space>
);
```

<API></API>
