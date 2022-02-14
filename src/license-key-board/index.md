---
nav:
  title: 组件
  path: /components
group:
  title: 数据输入
  path: /data-entry
---

## LicenseKeyBoard 车牌号输入键盘

车牌号输入键盘

```tsx
import React, { useState } from 'react';
import {
  Space,
  LicenseKeyBoard,
  List,
  ListItem,
  PartTitle,
  ReInput,
  showToast,
} from '@kqinfo/ui';

export default () => {
  const [value, setValue] = useState<string>('');
  const [defaultValue, setDefaultValue] = useState<string>('渝A888888');
  const [visible, setVisible] = useState<any>('');

  const openKeyboard = (name: string) => {
    setVisible(name);
  };

  const onClose = () => {
    setVisible('');
  };
  const onInput = (value: string) => {
    setValue(v => v + value);
  };

  const onDelete = () => {
    setValue(v => v.slice(0, v.length - 1));
  };

  return (
    <Space vertical size={'20px'}>
      <PartTitle>默认键盘</PartTitle>
      <div onClick={() => openKeyboard('demo1')}>
        {/* 添加 readOnly 阻止原生键盘弹出 */}
        <ReInput placeholder="请输入内容" value={value} readOnly />
      </div>
      <LicenseKeyBoard
        visible={visible === 'demo1'}
        value={value}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
      />
      <PartTitle>带标题键盘</PartTitle>
      <div onClick={() => openKeyboard('demo2')}>
        {/* 添加 readOnly 阻止原生键盘弹出 */}
        <ReInput placeholder="请输入内容" value={value} readOnly />
      </div>
      <LicenseKeyBoard
        title={'车牌键盘'}
        visible={visible === 'demo2'}
        value={value}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
      />
      <PartTitle>自定义确认按钮文字键盘</PartTitle>
      <div onClick={() => openKeyboard('demo3')}>
        {/* 添加 readOnly 阻止原生键盘弹出 */}
        <ReInput placeholder="请输入内容" value={value} readOnly />
      </div>
      <LicenseKeyBoard
        visible={visible === 'demo3'}
        value={value}
        onClose={onClose}
        onInput={onInput}
        onDelete={onDelete}
        confirmText={'确认'}
      />
      <PartTitle>设置默认值</PartTitle>
      <div onClick={() => openKeyboard('demo4')}>
        {/* 添加 readOnly 阻止原生键盘弹出 */}
        <ReInput placeholder="请输入内容" value={defaultValue} readOnly />
      </div>
      <LicenseKeyBoard
        visible={visible === 'demo4'}
        onClose={onClose}
        value={defaultValue}
        onInput={value => setDefaultValue(v => v + value)}
        onDelete={() => setDefaultValue(v => v.slice(0, v.length - 1))}
        confirmText={'确认'}
      />
    </Space>
  );
};
```

### API

| 属性            | 说明                         | 类型                  | 默认值 |
| --------------- | ---------------------------- | --------------------- | ------ |
| visible         | 是否展示                     | `boolean`             | -      |
| title           | 键盘标题                     | `string`              | -      |
| confirmText     | 完成按钮文案，`null` 不展示  | `string \| null`      | `null` |
| showCloseButton | 是否展示收起键盘箭头         | `boolean`             | `true` |
| onInput         | 输入内容回调                 | `(v: string) => void` | -      |
| onDelete        | 删除内容回调                 | `() => void`          | -      |
| onClose         | 点击关闭时触发               | `() => void`          | -      |
| onConfirm       | 点击确定按钮时触发           | `() => void`          | -      |
| afterShow       | 键盘完全弹出回调             | `() => void`          | -      |
| afterClose      | 键盘完全收起回调             | `() => void`          | -      |
| closeOnConfirm  | 是否在点击确定按钮时自动关闭 | `boolean`             | `true` |
| safeArea        | 是否开启安全区适配           | `boolean`             | `true` |

此外还支持 [Popup](https://mobile.ant.design/zh/components/popup) 的以下属性: `stopPropagation`
