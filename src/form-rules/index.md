---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## formRules 表单规则

表单规则

可以直接设置`FormItem` 的`rules`里的`type`直接应用规则

```tsx
import React from 'react';
import {
  ReInput,
  Space,
  PartTitle,
  FormItem,
  Button,
  Form,
  formRules,
} from '@kqinfo/ui';

export default () => {
  const [form] = Form.useForm();
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本使用</PartTitle>
      <Form form={form} cell onFinish={console.log} labelWidth={'4em'}>
        <FormItem
          label={'密码'}
          name={'password'}
          rules={[{ validator: formRules.password, required: true }]}
        />
        <FormItem
          label={'身份证号'}
          name={'idCard'}
          rules={[{ validator: formRules.idCard, required: true }]}
        />
      </Form>
      <Button type={'primary'} onTap={() => form.submit()}>
        提交
      </Button>
    </Space>
  );
};
```

<API></API>
