---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Native 原生组件

可以直接修改原生组件的属性，绕过`react diff`来达到快速的界面响应

```tsx
import React, { useRef, useState } from 'react';
import { Space, Native, PartTitle, Button } from '@kqinfo/ui';
import { NativeInstance } from '@kqinfo/ui/es/native';

export default () => {
  const nativeRef = useRef<NativeInstance>(null);
  const [wh, setWh] = useState(100);
  const startAnimation = (cb: (wh: number) => void) => {
    let wh = 0;
    const timer = setInterval(() => {
      if (wh === 100) {
        clearInterval(timer);
      } else {
        wh += 1;
        cb(wh);
      }
    }, 1);
  };
  return (
    <Space vertical size={'10px'}>
      <PartTitle>传统的设置元素样式</PartTitle>
      <div style={{ width: wh, height: wh, border: '1px solid red' }}>
        传统写法
      </div>
      <Button
        type={'primary'}
        onTap={() => {
          startAnimation(setWh);
        }}
      >
        开始动画
      </Button>
      <PartTitle>优化过后的写法</PartTitle>
      <Native
        ref={nativeRef}
        initData={{
          visible: true,
          style: 'width: 100px;height: 100px;border: 1px solid red;',
        }}
      >
        优化写法
      </Native>
      <Button
        type={'primary'}
        onTap={() => {
          // 直接修改元素属性
          startAnimation(wh =>
            nativeRef.current?.setData({
              visible: true,
              style: `width: ${wh}px;height: ${wh}px;border: 1px solid red;`,
            }),
          );
        }}
      >
        开始动画
      </Button>
      这里渲染了50000条列表数据
      <div style={{ height: 100, overflow: 'auto', border: '1px solid red' }}>
        {new Array(50000).fill(0).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
    </Space>
  );
};
```

<API></API>
