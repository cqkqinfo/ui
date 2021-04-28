---
group:
  title: 数据录入
  path: /data-entry
nav:
  title: 组件
  path: /components
---

## InputNumber

折叠组件

```tsx
import React, { useState } from 'react';
import { PartTitle, InputNumber, Space } from '@kqinfo/ui';

export default () => {
  const [value, setValue] = useState(0);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <InputNumber />
      <InputNumber iconColor="red" />
      <InputNumber min={12} max={20} defaultValue={13} />
      <InputNumber min={13} max={14} defaultValue={13} />
      <PartTitle>控制步长</PartTitle>
      <InputNumber step={0.1} defaultValue={0.0} />
      <InputNumber step={10} />
      <PartTitle>受控组件</PartTitle>
      <InputNumber value={value} onChange={setValue} />
      <InputNumber disabled />
    </Space>
  );
};
```

<API></API>
