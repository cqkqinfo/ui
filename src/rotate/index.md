---
nav:
  title: Components
  path: /components
group:
  title: 动画
  path: /animation
---

## Rotate

旋转

```tsx
import React, { useState } from 'react';
import { Rotate, Icon, Space, PartTitle, Button } from '@kqinfo/ui';

export default () => {
  const [run, setRun] = useState(false);
  return (
    <Space vertical size={10} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Rotate>
        <Icon name={'kq-loading'} />
      </Rotate>
      <PartTitle>手动触发</PartTitle>
      <Rotate run={run} angle={180}>
        <Icon name={'kq-down'} />
      </Rotate>
      <Button onTap={() => setRun(!run)} type={'primary'}>
        切换
      </Button>
    </Space>
  );
};
```

<API></API>
