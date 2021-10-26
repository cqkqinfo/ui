---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## getLocation 获取位置

获取位置

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  getLocation,
  showModal,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        getLocation().then(v =>
          showModal({ title: '成功', content: JSON.stringify(v) }),
        );
      }}
      type={'primary'}
    >
      获取位置
    </Button>
  </Space>
);
```

<API></API>
