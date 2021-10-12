---
nav:
  title: 组件
  path: /components
group:
  title: 布局
  path: /layout
---

## Tile 功能磁贴

功能磁贴

```tsx
import React from 'react';
import { Tile, Space, PartTitle } from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Space size={'10px'} alignItems="stretch">
        <Tile
          text={'预约挂号'}
          tag={'热门推荐'}
          light
          size={'large'}
          vertical
          backgroundColor={'#5686e9'}
          image={
            'https://smp.med.gzhc365.com/views/fe-his-app/images/home/yygh-old.png'
          }
        />
        <Space size={'10px'} vertical flex={1}>
          <Tile
            text={'门诊缴费'}
            light
            backgroundColor={'#ebaa57'}
            image={
              'https://smp.med.gzhc365.com/views/fe-his-app/images/home/mzjf-old.png'
            }
          />
          <Tile
            text={'住院缴费'}
            light
            backgroundColor={'#EA7C62'}
            image={
              'https://smp.med.gzhc365.com/views/fe-his-app/images/home/zyyj-old.png'
            }
          />
        </Space>
      </Space>
      <PartTitle>列表用法</PartTitle>
      <Space vertical size={'10px'}>
        <Tile
          text={'预约挂号'}
          size={'small'}
          image={
            'https://smp.med.gzhc365.com/views/fe-his-app/images/home/yygh-old.png'
          }
        />
        <Tile
          text={'报告查询'}
          size={'small'}
          image={
            'https://smp.med.gzhc365.com/views/fe-his-app/images/home/bgcx-old.png'
          }
        />
      </Space>
    </Space>
  );
};
```

<API></API>
