---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Shadow

阴影，如果没有效果请确保`children`支持`style`的 prop

```tsx
import React from 'react';
import { Shadow, Space, PartTitle, Form, FormItem } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'stretch'}>
    <PartTitle>一般用法</PartTitle>
    <Shadow>
      <div style={{ width: 100, height: 100, background: '#fff' }}>
        我是内容
      </div>
    </Shadow>
    <PartTitle>box模式</PartTitle>
    <Shadow box>
      <Form cell onFinish={console.log}>
        <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
        <FormItem label={'身份证号'} name={'idCard'} />
      </Form>
    </Shadow>
  </Space>
);
```

<API></API>
