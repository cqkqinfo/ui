---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Tip 温馨提示

温馨提示

```tsx
import React from 'react';
import { Space, PartTitle, Tip } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Tip
      items={[
        <Space style={{ color: '#D95E38', marginBottom: 20 }}>
          请在预约时间段内携带本人身份证前往医院登记台完成登记与接种
        </Space>,
        '1、3-7天之内不宜饮酒',
        '2、不宜剧烈运动，应注意休息',
        '3、一周内避免接触个人既往过敏物及常见致敏源',
        '4、一周内不宜进食辛辣刺激或海鲜类食物，建议清淡饮食',
      ]}
    />
  </Space>
);
```

<API></API>
