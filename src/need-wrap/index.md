---
nav:
  title: Components
  path: /components
group:
  title: 通用
  path: general
---

## NeedWrap

包装组件

```tsx
import React, { useState } from 'react';
import { Space, NeedWrap, Shadow, PartTitle, Button } from '@kqinfo/ui';

export default () => {
  const [need, setNeed] = useState(true);
  return (
    <Space vertical size={10} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <NeedWrap wrap={Shadow} need={need}>
        <div style={{ width: 100, height: 100, background: '#fff' }}>
          我是内容
        </div>
      </NeedWrap>
      <Button type={'primary'} block={false} onTap={() => setNeed(!need)}>
        切换是否需要包装
      </Button>
    </Space>
  );
};
```

<API></API>
