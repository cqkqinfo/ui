---
nav:
  title: 组件
  path: /components
group:
  title: 数据显示
  path: /data-display
---

## NoticeBar 通告栏

通告栏

```tsx
import React, { useState } from 'react';
import { Space, NoticeBar, PartTitle } from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <NoticeBar title="温馨提示">
        {[
          { id: '1', content: '温馨提醒：请于2.20日前填写健康监测信息' },
          { id: '2', content: '温馨提醒：请于2.8日前填写健康监测信息' },
          { id: '3', content: '温馨提醒：请于3.6日前填写健康监测信息' },
        ].map(item => (
          <span key={item.id}>{item.content}</span>
        ))}
      </NoticeBar>
    </Space>
  );
};
```

<API></API>
