---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  path: /data-entry
---

## Form

表单组件

```tsx
import React, { useState } from 'react';
import { Space, Form, FormItem, Button, PartTitle, Shadow } from '@kqinfo/ui';

const Demo = (props: any) => {
  const [form] = Form.useForm();
  return (
    <Space vertical style={props.style}>
      <Form form={form} onFinish={console.log} requiredMark {...props}>
        <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
        <FormItem label={'身份证号'} name={'idCard'} />
      </Form>
      <Button type={'primary'} onTap={() => form.submit()}>
        提交
      </Button>
    </Space>
  );
};

export default () => {
  const [folded, setFolded] = useState(false);
  return (
    <Space vertical size={10} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Demo />
      <PartTitle>垂直布局</PartTitle>
      <Demo vertical />
      <PartTitle>label两端对齐</PartTitle>
      <Demo labelWidth={'5em'} labelJustify={'justify'} />
      <div />
    </Space>
  );
};
```

<API></API>
