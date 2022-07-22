---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Indexes 索引选择器

索引选择器

```tsx
import React, { useEffect, useState } from 'react';
import { Indexes, ListItem, CommonImg } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => {
  return (
    <Indexes
      style={{ height: '98vh' }}
      renderItem={({ diseasesName }) => ({
        index: diseasesName,
        node: (
          <ListItem
            img={CommonImg.doctor}
            title={diseasesName}
            footer={'男 23岁'}
          />
        ),
      })}
      list={[
        {
          id: 1550286187964502000,
          hisId: 8900,
          diseasesName: '722',
        },
        {
          id: 1549310765571346400,
          hisId: 8900,
          diseasesName: '啧啧啧',
        },
        {
          id: 1549310737394012200,
          hisId: 8900,
          diseasesName: '嘤嘤嘤',
        },
        {
          id: 1549310699779494000,
          hisId: 8900,
          diseasesName: '嘻嘻嘻',
        },
        {
          id: 1549310664018858000,
          hisId: 8900,
          diseasesName: '汪汪汪',
        },
        {
          id: 1549310599997001700,
          hisId: 8900,
          diseasesName: 'uuu',
        },
        {
          id: 1549310550659403800,
          hisId: 8900,
          diseasesName: '通天塔',
        },
        {
          id: 1549310506979922000,
          hisId: 8900,
          diseasesName: '杀杀杀',
        },
        {
          id: 1549310477816926200,
          hisId: 8900,
          diseasesName: '热热热',
        },
        {
          id: 1549310443658514400,
          hisId: 8900,
          diseasesName: '强强强强',
        },
        {
          id: 1549310414025756700,
          hisId: 8900,
          diseasesName: '噼噼啪啪',
        },
        {
          id: 1549310381079498800,
          hisId: 8900,
          diseasesName: '哦哦哦',
        },
        {
          id: 1549310344949764000,
          hisId: 8900,
          diseasesName: '牛牛牛',
        },
        {
          id: 1549310315367338000,
          hisId: 8900,
          diseasesName: '买买买',
        },
        {
          id: 1549310286577635300,
          hisId: 8900,
          diseasesName: '啦啦啦',
        },
        {
          id: 1549310234622791700,
          hisId: 8900,
          diseasesName: '酷酷酷',
        },
        {
          id: 1549310199633907700,
          hisId: 8900,
          diseasesName: '斤斤计较',
        },
        {
          id: 1549310160832401400,
          hisId: 8900,
          diseasesName: 'i',
        },
        {
          id: 1549310083795619800,
          hisId: 8900,
          diseasesName: '哈哈哈',
        },
        {
          id: 1549310037180125200,
          hisId: 8900,
          diseasesName: '嘎嘎嘎嘎',
        },
        {
          id: 1549309987062386700,
          hisId: 8900,
          diseasesName: '分分分',
        },
        {
          id: 1549309937888366600,
          hisId: 8900,
          diseasesName: '呃呃呃',
        },
        {
          id: 1549309894582177800,
          hisId: 8900,
          diseasesName: '滴滴答答',
        },
        {
          id: 1549309847547252700,
          hisId: 8900,
          diseasesName: '踩踩踩',
        },
        {
          id: 1549309803377037300,
          hisId: 8900,
          diseasesName: '斑斑驳驳',
        },
        {
          id: 1549302511525007400,
          hisId: 8900,
          diseasesName: '测试病种719',
        },
        {
          id: 1547862471786147800,
          hisId: 8900,
          diseasesName: '12312322',
        },
        {
          id: 1547862116084002800,
          hisId: 8900,
          diseasesName: '123123',
        },
      ]}
    />
  );
};
```

<API></API>
