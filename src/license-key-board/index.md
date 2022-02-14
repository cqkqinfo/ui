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
