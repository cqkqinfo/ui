---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## F2 图表组件

跨平台[F2](https://f2.antv.vision/zh/docs/tutorial/getting-started)图表组件，`RN`暂时一次只能渲染一个图表

默认是[按需加载](https://f2.antv.vision/zh/docs/tutorial/require#%E5%BC%95%E5%85%A5%E9%9C%80%E8%A6%81%E7%9A%84%E6%A8%A1%E5%9D%97)用法，用到什么引入什么

```tsx
import React from 'react';
import { Space, F2, PartTitle } from '@kqinfo/ui';
import { View } from 'remax/one';
// 按需加载，用到什么引用什么
require('@antv/f2/lib/geom/interval'); // 只引入 interval-select 柱状图选中交互
require('@antv/f2/lib/geom/adjust/stack'); // 只加载层叠类型
require('@antv/f2/lib/geom/line');
require('@antv/f2/lib/coord/polar'); // 引入 极坐标
const f2 = require('@antv/f2/lib/core'); // 引入核心包 Core
const PieLabel = require('@antv/f2/lib/plugin/pie-label'); // 饼图
const Tooltip = require('@antv/f2/lib/plugin/tooltip');
// 注册插件
f2.Chart.plugins.register(PieLabel);
f2.Chart.plugins.register(Tooltip);

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
    <PartTitle>折线图</PartTitle>
    <F2
      data={[
        {
          date: '2017-06-05',
          value: 116,
        },
        {
          date: '2017-06-06',
          value: 129,
        },
        {
          date: '2017-06-07',
          value: 135,
        },
        {
          date: '2017-06-08',
          value: 86,
        },
        {
          date: '2017-06-09',
          value: 73,
        },
        {
          date: '2017-06-10',
          value: 85,
        },
        {
          date: '2017-06-11',
          value: 73,
        },
        {
          date: '2017-06-12',
          value: 68,
        },
        {
          date: '2017-06-13',
          value: 92,
        },
        {
          date: '2017-06-14',
          value: 130,
        },
        {
          date: '2017-06-15',
          value: 245,
        },
        {
          date: '2017-06-16',
          value: 139,
        },
        {
          date: '2017-06-17',
          value: 115,
        },
        {
          date: '2017-06-18',
          value: 111,
        },
        {
          date: '2017-06-19',
          value: 309,
        },
        {
          date: '2017-06-20',
          value: 206,
        },
        {
          date: '2017-06-21',
          value: 137,
        },
        {
          date: '2017-06-22',
          value: 128,
        },
        {
          date: '2017-06-23',
          value: 85,
        },
        {
          date: '2017-06-24',
          value: 94,
        },
        {
          date: '2017-06-25',
          value: 71,
        },
        {
          date: '2017-06-26',
          value: 106,
        },
        {
          date: '2017-06-27',
          value: 84,
        },
        {
          date: '2017-06-28',
          value: 93,
        },
        {
          date: '2017-06-29',
          value: 85,
        },
        {
          date: '2017-06-30',
          value: 73,
        },
        {
          date: '2017-07-01',
          value: 83,
        },
        {
          date: '2017-07-02',
          value: 125,
        },
        {
          date: '2017-07-03',
          value: 107,
        },
        {
          date: '2017-07-04',
          value: 82,
        },
        {
          date: '2017-07-05',
          value: 44,
        },
        {
          date: '2017-07-06',
          value: 72,
        },
        {
          date: '2017-07-07',
          value: 106,
        },
        {
          date: '2017-07-08',
          value: 107,
        },
        {
          date: '2017-07-09',
          value: 66,
        },
        {
          date: '2017-07-10',
          value: 91,
        },
        {
          date: '2017-07-11',
          value: 92,
        },
        {
          date: '2017-07-12',
          value: 113,
        },
        {
          date: '2017-07-13',
          value: 107,
        },
        {
          date: '2017-07-14',
          value: 131,
        },
        {
          date: '2017-07-15',
          value: 111,
        },
        {
          date: '2017-07-16',
          value: 64,
        },
        {
          date: '2017-07-17',
          value: 69,
        },
        {
          date: '2017-07-18',
          value: 88,
        },
        {
          date: '2017-07-19',
          value: 77,
        },
        {
          date: '2017-07-20',
          value: 83,
        },
        {
          date: '2017-07-21',
          value: 111,
        },
        {
          date: '2017-07-22',
          value: 57,
        },
        {
          date: '2017-07-23',
          value: 55,
        },
        {
          date: '2017-07-24',
          value: 60,
        },
      ]}
      recordScale={{
        value: {
          tickCount: 5,
          min: 0,
        },
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3,
        },
      }}
      setChart={chart => {
        chart.tooltip({
          custom: true,
          showXTip: true,
          showYTip: true,
          snap: true,
          crosshairsType: 'xy',
          crosshairsStyle: {
            lineDash: [2],
          },
        });
        chart.axis('date', {
          label: function label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          },
        });
        chart.line().position('date*value');
      }}
    />
  </Space>
);
```

<API></API>
