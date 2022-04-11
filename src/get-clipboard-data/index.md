---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## getClipboardData 读取剪切板

读取剪切板

```tsx
import React from 'react';
import {
  Button,
  Space,
  PartTitle,
  showToast,
  getClipboardData,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        getClipboardData().then(({ data }) =>
          showToast({ title: `读取成功：${data}` }),
        );
      }}
      type={'primary'}
    >
      读取剪切板
    </Button>
  </Space>
);
```

<API></API>
