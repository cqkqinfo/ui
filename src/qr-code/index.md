---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## QrCode 二维码

二维码

```tsx
import React, { useRef } from 'react';
import { QrCode, Space, PartTitle, Button } from '@kqinfo/ui';
import { SheetInstance } from '@kqinfo/ui/es/sheet';

export default () => {
  const ref = useRef<SheetInstance>(null);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <QrCode
        content={'233'}
        style={{ width: 200, height: 200 }}
        showModal
        modalTitle={'二维码弹窗'}
      />
      <PartTitle>手动显示二维码</PartTitle>
      <Button type={'primary'} onTap={() => ref.current?.setVisible(true)}>
        显示二维码
      </Button>
      <QrCode
        content={'233'}
        style={{ display: 'none' }}
        showModal
        modalTitle={'二维码弹窗'}
        ref={ref}
      />
    </Space>
  );
};
```

<API></API>
