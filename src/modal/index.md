---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Modal 弹框

弹窗

```tsx
import React, { useRef, useState } from 'react';
import {
  Space,
  PartTitle,
  Button,
  Modal,
  showToast,
  ReInput,
  Form,
  FormItem,
  rpxToPx,
} from '@kqinfo/ui';

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [form] = Form.useForm();
  return (
    <Space vertical size={'10px'} alignItems={'stretch'}>
      <Modal />
      <PartTitle>一般用法</PartTitle>
      <Button
        type={'primary'}
        onTap={() =>
          Modal.show({
            title: '发送报告至邮箱',
            // 异步关闭
            onOk: () =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  form.submit();
                  form
                    .validateFields()
                    .then(values => {
                      alert(JSON.stringify(values));
                      resolve();
                    })
                    .catch(reject);
                }, 3000);
              }),
            content: (
              <Form form={form}>
                <FormItem
                  noStyle
                  name={'email'}
                  rules={[
                    { type: 'email', message: '请输入正确的邮箱' },
                    { required: true, message: '请输入邮箱' },
                  ]}
                >
                  <ReInput
                    style={{
                      background: '#F1F1F1',
                      borderRadius: rpxToPx(20),
                      height: rpxToPx(90),
                      width: '100%',
                      padding: `0 ${rpxToPx(31)}px`,
                    }}
                    placeholder={'请输入邮箱号码'}
                  />
                </FormItem>
              </Form>
            ),
          })
            .then(() => {
              showToast({ title: '确定' });
            })
            .catch(() => {
              showToast({ title: '取消' });
            })
        }
      >
        显示
      </Button>
      <Button
        type={'primary'}
        onTap={() =>
          Modal.show({
            title: '手动隐藏',
            content: <Button onTap={() => Modal.hide()}>隐藏</Button>,
            footer: null,
          })
        }
      >
        手动隐藏
      </Button>
    </Space>
  );
};
```

<API exports='["default", "Options"]'></API>
