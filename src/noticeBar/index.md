---
nav:
  title: Components
  path: /components
group:
  title: 数据显示
  path: /data-display
---

## NoticeBar

通告栏

```tsx
import React, { useState } from 'react';
import { Space, NoticeBar, PartTitle, Icon } from '@kqinfo/ui';

export default () => {
  const [checkValue, setCheckValue] = useState('1');
  return (
    <Space vertical size={10}>
      <PartTitle>一般用法</PartTitle>
      <NoticeBar icon={<Icon name="kq-notice" />} title="温馨提示">
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
