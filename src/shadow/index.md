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
import React, { useState } from 'react';
import { Shadow, Space, PartTitle, Form, FormItem, Button } from '@kqinfo/ui';

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [form] = Form.useForm();
  return (
    <Space vertical size={'10px'} alignItems={'stretch'}>
      <PartTitle>一般用法</PartTitle>
      <Shadow>
        <div style={{ width: 100, height: 100, background: '#fff' }}>
          我是内容
        </div>
      </Shadow>
      <PartTitle>card模式</PartTitle>
      <Form
        form={form}
        cell
        onFinish={() => setReadOnly(!readOnly)}
        readOnly={readOnly}
      >
        <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
        <FormItem label={'身份证号'} name={'idCard'} />
      </Form>
      <Button type={'primary'} onTap={() => form.submit()}>
        {readOnly ? '修改' : '保存'}
      </Button>
    </Space>
  );
};
```

<API></API>
