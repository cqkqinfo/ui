---
nav:
  title: Components
  path: /components
group:
  title: 数据输入
  path: /data-entry
---

## Radio

单选框

```tsx
import React, { useState } from 'react';
import { Space, Radio, PartTitle } from '@kqinfo/ui';

export default () => {
  const [checkValue, setCheckValue] = useState('1');
  return (
    <Space vertical size={10}>
      <PartTitle>一般用法</PartTitle>
      <Radio.Group value={checkValue} onChange={v => setCheckValue(v)}>
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
        ].map((item: any) => (
          <Radio value={item.value} key={item.value} color="#277fd9">
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
    </Space>
  );
};
```

<API></API>
