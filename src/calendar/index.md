---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Calendar 日历

日历

```tsx
import React from 'react';
import { Calendar, Space, PartTitle } from '@kqinfo/ui';
import dayjs from 'dayjs';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>基本用法</PartTitle>
    <Calendar />
    <PartTitle>渲染标记点</PartTitle>
    <Calendar
      renderDot={(_, index) =>
        index === 5 ? (
          <div style={{ transform: 'scale(.6)' }}>满</div>
        ) : (
          index > 7
        )
      }
    />
  </Space>
);
```

<API></API>
