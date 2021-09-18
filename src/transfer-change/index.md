---
group:
  title: 数据录入
  path: /data-entry
nav:
  title: 组件
  path: /components
---

## TransferChange 转换改变事件

转换和转移`change`事件

```tsx
import React from 'react';
import {
  Tag,
  Space,
  PartTitle,
  Form,
  FormItem,
  ReInput,
  TransferChange,
  Button,
  addressOptions,
  Picker,
  Icon,
} from '@kqinfo/ui';
import { DatePicker, Select } from 'antd';

export default () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      onFinish={console.log}
      onValuesChange={(_, values) => console.log(values)}
    >
      <Space vertical size={'10px'}>
        <PartTitle>将onChange事件转移</PartTitle>
        <Form cell>
          <FormItem label={'验证码'} name={'code'} initialValue={'123456'}>
            <TransferChange>
              {(onChange, value) => (
                <Space size={10}>
                  <ReInput
                    onChange={onChange}
                    value={value}
                    placeholder={'请输入验证码'}
                  />
                  <Button type={'primary'} size={'action'}>
                    获取验证码
                  </Button>
                </Space>
              )}
            </TransferChange>
          </FormItem>
        </Form>
        <PartTitle>自动格式化city数据</PartTitle>
        <Form cell>
          <FormItem
            label={'地区'}
            name={'city'}
            initialValue={'重庆市-市辖区-渝北区'}
            after={<Icon name={'kq-right'} color={'#666'} />}
          >
            <TransferChange mode={'city'}>
              <Picker cols={3} data={addressOptions}>
                请选择
              </Picker>
            </TransferChange>
          </FormItem>
        </Form>
        <PartTitle>自动格式化JSON数据</PartTitle>
        <Form cell>
          <FormItem
            label={'JSON内容'}
            name={'json'}
            initialValue={'{"value": "我是JSON内容"}'}
          >
            <TransferChange mode={'JSON'}>
              {(onChange, value) => (
                <ReInput
                  placeholder={'请输入内容'}
                  onChange={value => onChange({ value })}
                  value={value?.value}
                />
              )}
            </TransferChange>
          </FormItem>
        </Form>
        <PartTitle>自动格式化moment</PartTitle>
        <Form cell>
          <FormItem label={'日期'} name={'date'} initialValue={'2021-08-24'}>
            <TransferChange mode={'date'}>
              <DatePicker />
            </TransferChange>
          </FormItem>
        </Form>
        <PartTitle>自动格式化逗号分割</PartTitle>
        <Form cell>
          <FormItem label={'标签'} name={'tags'} initialValue={'a,b,c'}>
            <TransferChange mode={'split'}>
              <Select
                style={{ width: '100%' }}
                placeholder="请输入标签，回车键确认"
                mode="tags"
              />
            </TransferChange>
          </FormItem>
        </Form>
        <Button type={'primary'} onTap={() => form.submit()}>
          提交
        </Button>
      </Space>
    </Form>
  );
};
```

<API></API>
