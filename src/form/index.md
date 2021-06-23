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
import {
  Space,
  Form,
  FormItem,
  Button,
  PartTitle,
  Shadow,
  Icon,
  addressOptions,
  Page,
  Picker,
} from '@kqinfo/ui';

const Demo = (props: any) => {
  const [form] = Form.useForm();
  return (
    <Space alignItems={'stretch'} vertical style={props.style}>
      <Form form={form} onFinish={console.log} {...props}>
        <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
        <FormItem
          label={'身份证号'}
          name={'idCard'}
          rules={[{ type: 'idCard', required: true }]}
        />
        {props.cell && (
          <FormItem
            label={'地区'}
            name={'city'}
            rules={[{ required: true }]}
            after={<Icon name={'kq-right'} color={'#666'} />}
          >
            <Picker cols={3} data={addressOptions}>
              请选择
            </Picker>
          </FormItem>
        )}
      </Form>
      <Button type={'primary'} onTap={() => form.submit()}>
        提交
      </Button>
    </Space>
  );
};

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [form] = Form.useForm();
  return (
    <Space vertical size={'10px'} alignItems={'stretch'}>
      <PartTitle>一般用法</PartTitle>
      <Demo />
      <PartTitle>cell模式</PartTitle>
      <Demo cell />
      <PartTitle>垂直布局</PartTitle>
      <Demo vertical />
      <PartTitle>label两端对齐</PartTitle>
      <Demo labelWidth={'4em'} />
      <div />
    </Space>
  );
};
```

<API></API>
