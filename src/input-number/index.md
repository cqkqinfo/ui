---
group:
  title: 数据录入
  path: /data-entry
nav:
  title: 组件
  path: /components
---

## InputNumber 数字输入

数字输入

```tsx
import React, { useState } from 'react';
import { PartTitle, InputNumber, Space } from '@kqinfo/ui';

export default () => {
  const [value, setValue] = useState(0);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <InputNumber />
      <InputNumber min={12} max={20} defaultValue={13} />
      <InputNumber min={13} max={14} defaultValue={13} />
      <PartTitle>增加单位</PartTitle>
      <InputNumber />
      <InputNumber unit="份" />
      <InputNumber formatValue={a => `${a}个`} />
      <PartTitle>控制步长</PartTitle>
      <InputNumber step={0.1} defaultValue={0.0} />
      <InputNumber step={10} />
      <PartTitle>受控组件</PartTitle>
      <InputNumber value={value} onChange={setValue} />
      <PartTitle>自定义禁用颜色</PartTitle>
      <InputNumber disabled />
      <InputNumber disabled disabledColor="#ccc" />
    </Space>
  );
};
```

<API></API>
