---
nav:
  title: 组件
  path: /components
group:
  title: 配置
  path: /config
---

## ConfigProvider 全局配置

全局配置

```tsx
import React, { useEffect, useState } from 'react';
import {
  ConfigProvider,
  Space,
  PartTitle,
  ColorText,
  Shadow,
  Form,
  FormItem,
  Picker,
  Icon,
  ReTextarea,
  NoData,
  getAddressOptions,
} from '@kqinfo/ui';
import { Image } from 'remax/one';

export default () => {
  const [form] = Form.useForm();
  const [addressOptions, setAddressOptions] = useState<PickerData[]>([]);
  useEffect(() => {
    getAddressOptions().then(options => setAddressOptions(options));
  }, []);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>主题色</PartTitle>
      <ConfigProvider brandPrimary={'#6227D9'}>
        <ColorText>主题色</ColorText>
      </ConfigProvider>
      <PartTitle>阴影色</PartTitle>
      <ConfigProvider shadowColor={'#ff0000'}>
        <Shadow>
          <div style={{ width: 100, height: 100, background: '#fff' }}>
            我是内容
          </div>
        </Shadow>
      </ConfigProvider>
      <PartTitle>默认占位组件</PartTitle>
      <ConfigProvider renderNoData={() => '我是自定义占位组件'}>
        <NoData />
      </ConfigProvider>
      <PartTitle>适老模式</PartTitle>
      <ConfigProvider elderly>
        <Form form={form} cell onFinish={console.log} labelWidth={'4em'}>
          <FormItem
            label={'密码'}
            name={'password'}
            rules={[{ type: 'password', required: true }]}
          />
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
            rules={[{ required: true }]}
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
      </ConfigProvider>
    </Space>
  );
};
```

<API></API>
