---
group:
  title: 数据录入
  path: /data-entry
nav:
  title: 组件
  path: /components
---

## FormItem

表单项

```tsx
import React from 'react';
import {
  ReInput,
  Space,
  Picker,
  PartTitle,
  FormItem,
  Icon,
  addressOptions,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>基本使用</PartTitle>
    <FormItem
      requiredMark
      rules={[{ required: true }]}
      label={'姓名'}
      after={<Icon name={'kq-loading'} color={'green'} />}
    >
      <ReInput placeholder={'请输入'} />
    </FormItem>
    <FormItem requiredMark rules={[{ required: true }]} label={'地址'}>
      <Picker data={addressOptions} cols={3}>
        请选择
      </Picker>
    </FormItem>
  </Space>
);
```

<API></API>
