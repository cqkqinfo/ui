---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Sheet 弹出层

弹出层，防止了微信的 input 点击穿透的 bug

```tsx
import React, { useRef, useState } from 'react';
import { Space, Sheet, PartTitle, Button } from '@kqinfo/ui';
import { SheetInstance } from '@kqinfo/ui/es/sheet';

export default () => {
  const sheetRef = useRef<SheetInstance>(null);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Sheet ref={sheetRef}>
        <Button
          style={{ width: 100, height: 100 }}
          onTap={() => {
            sheetRef.current?.setVisible(false);
          }}
        >
          隐藏
        </Button>
      </Sheet>
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

<API exports='["default"]'></API>
