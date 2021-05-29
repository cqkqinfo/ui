---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## F2

跨平台[F2](https://f2.antv.vision/zh/docs/tutorial/getting-started)图表组件

默认是[按需加载](https://f2.antv.vision/zh/docs/tutorial/require#%E5%BC%95%E5%85%A5%E9%9C%80%E8%A6%81%E7%9A%84%E6%A8%A1%E5%9D%97)用法，用到什么引入什么

```tsx
import React from 'react';
import { Space, F2, PartTitle } from '@kqinfo/ui';
import { View } from 'remax/one';
// 按需加载，用到什么引用什么
require('@antv/f2/lib/geom/interval'); // 只引入 interval-select 柱状图选中交互
require('@antv/f2/lib/geom/adjust/stack'); // 只加载层叠类型
require('@antv/f2/lib/coord/polar'); // 引入 极坐标
const f2 = require('@antv/f2/lib/core'); // 引入核心包 Core
const PieLabel = require('@antv/f2/lib/plugin/pie-label'); // 饼图
// 注册插件
f2.Chart.plugins.register(PieLabel);

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <F2
      setChart={chart => {
        chart
          .interval()
          .position('genre*sold')
          .color('genre');
      }}
      data={[
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]}
    />
    <PartTitle>饼图</PartTitle>
    <F2
      data={[
        {
          amount: 20,
          ratio: 0.1,
          memo: '学习',
          const: 'const',
        },
        {
          amount: 100,
          ratio: 0.5,
          memo: '睡觉',
          const: 'const',
        },
        {
          amount: 10,
          ratio: 0.05,
          memo: '吃饭',
          const: 'const',
        },
        {
          amount: 30,
          ratio: 0.15,
          memo: '讲礼貌',
          const: 'const',
        },
        {
          amount: 10,
          ratio: 0.05,
          memo: '其他',
          const: 'const',
        },
        {
          amount: 20,
          ratio: 0.1,
          memo: '运动',
          const: 'const',
        },
        {
          amount: 10,
          ratio: 0.05,
          memo: '暂无备注',
          const: 'const',
        },
      ]}
      setChart={chart => {
        chart.coord('polar', {
          transposed: true,
          innerRadius: 0.7,
          radius: 1,
        });
        chart.axis(false);
        // 配置文本饼图
        chart.pieLabel({
          sidePadding: 40,
          label1: function label1(data) {
            return {
              fill: '#333333',
              text: '¥' + data.amount.toFixed(2),
              fontWeight: 700,
              fontSize: 10,
            };
          },
          label2: function label2(data) {
            return {
              text: data.memo,
              fill: '#666666',
            };
          },
        });
        chart
          .interval()
          .position('const*ratio')
          .color('memo', [
            '#1890FF',
            '#13C2C2',
            '#2FC25B',
            '#FACC14',
            '#F04864',
            '#8543E0',
            '#3436C7',
            '#223273',
          ])
          .adjust('stack');
      }}
    />
  </Space>
);
```

<API></API>
