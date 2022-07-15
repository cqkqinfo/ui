---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## MaxWidthView 最大宽度视图

当视图大于设置的最大宽度，就会自动缩放

```tsx
import React, { useEffect, useState } from 'react';
import { Space, PartTitle, MaxWidthView } from '@kqinfo/ui';

export default () => {
  const [text, setText] = useState('');
  return (
    <Space vertical size={'10px'}>
      <PartTitle>最大宽度100</PartTitle>
      <MaxWidthView maxWidth={window.innerWidth / 2}>
        <div style={{ width: window.innerWidth, background: 'red' }}>
          43243243242
        </div>
      </MaxWidthView>
    </Space>
  );
};
```

<API></API>
