---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## createAnimation 创建动画

使用方法参考 [wx.createAnimation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html) ，用法更简单

remax/one 的 View 不支持 animation 属性，请用 @kqinfo/ui 里的 Space 代替。

```tsx
import React, { useEffect, useRef } from 'react';
import { createAnimation, Button, Space, PartTitle } from '@kqinfo/ui';

export default () => {
  const animation = createAnimation({ duration: 500 });
  const animation2 = createAnimation({ duration: 500 });
  useEffect(() => {
    const start = () => {
      animation2
        .translateX((Math.random() * 1000) % 300)
        .opacity(Math.random())
        .end(start);
    };
    start();
  }, []);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Space
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
        animation={animation}
      />
      <Button
        onTap={() => {
          animation
            .translateX((Math.random() * 1000) % 300)
            .opacity(Math.random());
        }}
        type={'priary'}
      >
        位移
      </Button>
      <PartTitle>循环动画</PartTitle>
      <Space
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
        animation={animation2}
      />
    </Space>
  );
};
```
