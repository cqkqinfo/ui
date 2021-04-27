---
nav:
  title: 组件
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
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Radio.Group value={checkValue} onChange={v => setCheckValue(v)}>
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
          { value: '3', label: '苹果' },
          { value: '4', label: '桔子' },
          { value: '5', label: '芒果' },
          { value: '6', label: '甘蔗' },
          { value: '7', label: '火龙果' },
        ].map((item: any) => (
          <Radio value={item.value} key={item.value}>
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
      <PartTitle>按钮样式展示</PartTitle>
      <Radio.Group value={checkValue} onChange={v => setCheckValue(v)}>
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
          { value: '3', label: '苹果' },
          { value: '4', label: '桔子' },
          { value: '5', label: '芒果' },
          { value: '6', label: '甘蔗' },
          { value: '7', label: '火龙果' },
        ].map((item: any) => (
          <Radio
            value={item.value}
            key={item.value}
            type="button"
            fontColor="#fff"
          >
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
      <PartTitle>一个选项占一行</PartTitle>
      <Radio.Group value={checkValue} onChange={v => setCheckValue(v)}>
        {[
          { value: '1', label: '西瓜' },
          { value: '2', label: '香蕉' },
          { value: '3', label: '苹果' },
          { value: '4', label: '桔子' },
          { value: '5', label: '芒果' },
          { value: '6', label: '甘蔗' },
          { value: '7', label: '火龙果' },
        ].map((item: any) => (
          <Radio value={item.value} key={item.value} style={{ width: '100%' }}>
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
    </Space>
  );
};
```

<API></API>
