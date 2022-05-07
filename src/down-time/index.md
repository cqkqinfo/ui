---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## DownTime 倒计时

在小程序获取倒计时频繁`setState`会导致卡顿，这个组件使用`Native`做了优化，性能很好。

```tsx
import React, { useEffect, useState } from 'react';
import { Table, Space, PartTitle, DownTime } from '@kqinfo/ui';
import { View } from 'remax/one';
import dayjs from 'dayjs';

export default () => {
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>基本用法</PartTitle>
      <DownTime
        targetDate={dayjs()
          .add(10, 's')
          .add(2, 'd')
          .toString()}
        format={({ d, h, m, s, isEnd, diff }) => {
          return isEnd ? 'end' : `${d}天${h}时${m}分${s}`;
        }}
      />
      <PartTitle>结束状态</PartTitle>
      <DownTime
        targetDate={dayjs()
          .add(10, 's')
          .toString()}
        format={({ d, h, m, s, isEnd, diff }) => {
          console.log(diff);
          return isEnd ? 'end' : `${d}天${h}时${m}分${s}`;
        }}
      />
      <PartTitle>自动停止</PartTitle>
      <DownTime
        autoStop
        targetDate={dayjs()
          .add(10, 's')
          .toString()}
        format={({ d, h, m, s, isEnd, diff }) => {
          return `${d}天${h}时${m}分${s}`;
        }}
      />
    </Space>
  );
};
```

<API></API>
