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
  Picker,
} from '@kqinfo/ui';

const Demo = (props: any) => {
  const [form] = Form.useForm();
  return (
    <Space vertical style={props.style}>
      <Form form={form} onFinish={console.log} {...props}>
        <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
        <FormItem label={'身份证号'} name={'idCard'} />
        {props.cell && (
          <FormItem
            label={'地区'}
            name={'city'}
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
  const [folded, setFolded] = useState(false);
  return (
    <Space
      vertical
      size={'10px'}
      alignItems={'flex-start'}
      style={{ padding: 5 }}
    >
      <PartTitle>一般用法</PartTitle>
      <Demo />
      <PartTitle>垂直布局</PartTitle>
      <Demo vertical />
      <PartTitle>label两端对齐</PartTitle>
      <Demo labelWidth={'5em'} labelJustify={'justify'} />
      <PartTitle>cell模式</PartTitle>
      <div>
        <Demo cell colon={false} />
      </div>
      <div />
    </Space>
  );
};
```

<API></API>
