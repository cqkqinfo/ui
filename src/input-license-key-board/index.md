---
nav:
  title: 组件
  path: /components
group:
  title: 数据输入
  path: /data-entry
---

## InputLicenseKeyBoard 车牌号输入框

车牌号输入框

```tsx
import React, { useState } from 'react';
import {
  PartTitle,
  InputLicenseKeyBoard,
  Space,
  Form,
  FormItem,
  Button,
} from '@kqinfo/ui';

export default () => {
  const [form] = Form.useForm();
  return (
    <Space vertical size={'20px'}>
      <PartTitle>基础使用</PartTitle>
      <InputLicenseKeyBoard placeholder="请输入车牌号码" />
      <PartTitle>右侧对齐</PartTitle>
      <InputLicenseKeyBoard
        placeholder="请输入车牌号码"
        style={{ '--text-align': 'right' }}
      />
      <PartTitle>带清除按钮</PartTitle>
      <InputLicenseKeyBoard placeholder="请输入车牌号码" clearable />
      <PartTitle>自定义键盘标题</PartTitle>
      <InputLicenseKeyBoard
        placeholder="请输入车牌号码"
        title={'凯桥车牌输入专用键盘'}
      />
      <PartTitle>禁用的</PartTitle>
      <InputLicenseKeyBoard placeholder="请输入车牌号码" disabled />
      <PartTitle>配合Form使用</PartTitle>
      <Form form={form} cell onFinish={console.log} labelWidth={'4em'}>
        <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
        <FormItem
          label={'车牌号码'}
          name={'cardNo'}
          rules={[{ required: true }]}
        >
          <InputLicenseKeyBoard
            placeholder="请输入车牌号码"
            title={'FORM车牌输入专用键盘'}
            style={{ '--text-align': 'right' }}
          />
        </FormItem>
      </Form>
      <Button type={'primary'} onTap={() => form.submit()}>
        提交
      </Button>
    </Space>
  );
};
```

### API

| 属性         | 说明                                         | 类型                      | 默认值  |
| ------------ | -------------------------------------------- | ------------------------- | ------- |
| value        | 输入值                                       | `string`                  | -       |
| defaultValue | 默认值                                       | `string`                  | -       |
| onChange     | 输入框内容变化时触发                         | `(value: string) => void` | -       |
| placeholder  | 提示文本                                     | `string`                  | -       |
| disabled     | 是否禁用                                     | `boolean`                 | `false` |
| clearable    | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean`                 | `false` |
| onClear      | 点击清除按钮后触发                           | `() => void`              | -       |
| id           | input 元素的 id，常用来配合 label 使用       | `string`                  | -       |
| title        | 键盘的`title`                                | `string`                  | -       |
| confirmText  | 键盘的`confirmText`                          | `string`                  | -       |
| safeArea     | 是否开启键盘的安全区适配                     | `boolean`                 | `true`  |

### CSS 变量

| 属性                | 说明                   | 默认值                   |
| ------------------- | ---------------------- | ------------------------ |
| --font-size         | 字号                   | `30px`                   |
| --color             | 文字颜色               | `var(--adm-color-text)`  |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-light)` |
| --text-align        | 文字对齐方式           | `left`                   |

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| clear | 清空输入内容     | `() => void` |
| focus | 让输入框获得焦点 | `() => void` |
| blur  | 让输入框失去焦点 | `() => void` |
