---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## setClipboardData 设置剪切板

设置剪切板

```tsx
import React from 'react';
import {
  Button,
  Space,
  PartTitle,
  showToast,
  setClipboardData,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        setClipboardData({ data: '我是文本' }).then(() =>
          showToast({ title: '设置成功' }),
        );
      }}
      type={'primary'}
    >
      设置剪切板
    </Button>
  </Space>
);
```

<API></API>
