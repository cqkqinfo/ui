---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
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
      type={'priary'}
    >
      获取位置
    </Button>
  </Space>
);
```

<API></API>
