---
nav:
  title: 组件
  path: /components
group:
  title: 数据输入
  path: /data-entry
---

## Switch

如果想要控制组件大小， 最好使用**fontSize**来缩放大小

**实际高度为 2 倍 fontSize 高度**

```tsx
import React, { useState } from 'react';
import { Space, Switch, PartTitle } from '@kqinfo/ui';

export default () => {
  const [checkValue, setCheckValue] = useState(false);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Switch />
      <PartTitle>控制样式</PartTitle>
      <Switch fontSize={12} />
      <Switch fontSize={24} />
      <Switch fontSize={36} />
      <Switch color="red" />
      <PartTitle>受控组件</PartTitle>
      <Switch value={checkValue} onChange={setCheckValue} />
      <Switch disabled />
      <Switch disabled defaultValue />
    </Space>
  );
};
```

<API></API>
