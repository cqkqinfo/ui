---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Native

原生组件

```tsx
import React, { useRef } from 'react';
import { Space, Native, PartTitle, Button, Shadow } from '@kqinfo/ui';
import { NativeInstance } from '@kqinfo/ui/es/native';

export default () => {
  const ref = useRef<NativeInstance>(null);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Native ref={ref} initData={{ visible: true }}>
        <Shadow>
          <div style={{ width: 100, height: 100 }}>demo1</div>
        </Shadow>
      </Native>
      <Button
        type={'primary'}
        onTap={() => {
          ref.current?.setData({ visible: !ref.current?.data.visible });
        }}
      >
        切换显示
      </Button>
    </Space>
  );
};
```

<API></API>
