---
nav:
  title: 组件
  path: /components
group:
  title: 数据输入
  path: /data-entry
---

## CheckBox 复选框

复选框

```tsx
import React, { useState } from 'react';
import { Space, CheckBox, PartTitle } from '@kqinfo/ui';

export default () => {
  const [checkValue, setCheckValue] = useState(['1']);
  return (
    <Space vertical size={'30px'}>
      <PartTitle>一般用法</PartTitle>
      <CheckBox.Group
        value={checkValue}
        onChange={v => setCheckValue(v)}
        disabled
      >
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
          { value: '3', label: '栗子' },
        ].map((item: any) => (
          <CheckBox value={item.value} key={item.value}>
            {item.label}
          </CheckBox>
        ))}
      </CheckBox.Group>
      <PartTitle>按钮类型</PartTitle>
      <CheckBox.Group value={checkValue} onChange={v => setCheckValue(v)}>
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
        ].map((item: any) => (
          <CheckBox value={item.value} key={item.value} type="button">
            {item.label}
          </CheckBox>
        ))}
      </CheckBox.Group>
      <PartTitle>垂直排列</PartTitle>
      <CheckBox.Group
        value={checkValue}
        onChange={v => setCheckValue(v)}
        vertical
      >
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
        ].map((item: any) => (
          <CheckBox
            disabled={item.value === '1'}
            value={item.value}
            key={item.value}
          >
            {item.label}
          </CheckBox>
        ))}
      </CheckBox.Group>
    </Space>
  );
};
```

<API></API>
