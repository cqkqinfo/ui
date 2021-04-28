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
  ReTextarea,
  Icon,
  Button,
  Form,
  Radio,
  addressOptions,
} from '@kqinfo/ui';

export default () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>基本使用</PartTitle>
      <Form form={form} cell onFinish={console.log} labelWidth={'4em'}>
        <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
        <FormItem
          label={'手机号'}
          name={'phone'}
          rules={[{ type: 'phone', required: true }]}
        />
        <FormItem
          label={'身份证号'}
          name={'idCard'}
          rules={[{ type: 'idCard', required: true }]}
        />
        <FormItem
          label={'城市'}
          name={'city'}
          after={<Icon name={'kq-right'} color={'#666'} />}
        >
          <Picker cols={3} data={addressOptions}>
            请选择
          </Picker>
        </FormItem>
        <FormItem label={'详情地区'} name={'area'}>
          <ReTextarea placeholder={'请输入地区'} />
        </FormItem>
      </Form>
      <Button type={'primary'} onTap={() => form.submit()}>
        提交
      </Button>
      <PartTitle>表单联动</PartTitle>
      <Form form={form2} cell onFinish={console.log}>
        <FormItem label={'号码类型'} name={'type'} initialValue={1}>
          <Radio.Group>
            <Radio value={1}>身份证</Radio>
            <Radio value={2}>手机号</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem noStyle shouldUpdate>
          {(_, __, { getFieldValue }) => (
            <FormItem
              label={getFieldValue('type') === 1 ? '身份证号' : '手机号'}
              name={'number'}
              rules={[
                {
                  type: getFieldValue('type') === 1 ? 'idCard' : 'phone',
                  required: true,
                },
              ]}
            />
          )}
        </FormItem>
      </Form>
      <Button type={'primary'} onTap={() => form2.submit()}>
        提交
      </Button>
    </Space>
  );
};
```

<API></API>
