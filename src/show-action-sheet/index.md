---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## showActionSheet

显示操作项

```tsx
import React, { useRef, useState } from 'react';
import { Space, showActionSheet, PartTitle, Button } from '@kqinfo/ui';
import { SheetInstance } from '@kqinfo/ui/es/sheet';

export default () => {
  const sheetRef = useRef<SheetInstance>(null);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Button
        type={'primary'}
        onTap={() => {
          sheetRef.current?.setVisible(true);
        }}
      >
        显示
      </Button>
    </Space>
  );
};
```

<API></API>
