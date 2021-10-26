---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Icon 图标

图标

```tsx
import React from 'react';
import { Icon, Space, PartTitle } from '@kqinfo/ui';

const renderItem = (name: string) => (
  <Space
    justify={'center'}
    size={'10px'}
    alignItems={'center'}
    vertical
    style={{
      background: '#fff',
      width: 100,
      height: 100,
      border: '1px solid #eee',
    }}
  >
    <Icon name={name} size={'20px'} color={'#333'} />
    {name}
  </Space>
);

const names = [
  'kq-search',
  'kq-loading',
  'kq-down',
  'kq-loading2',
  'kq-yes',
  'kq-add',
  'kq-clear',
  'kq-clear2',
  'kq-notice',
  'kq-zengjia',
  'kq-right',
  'kq-tip',
  'kq-jianshao',
  'kq-xingxing',
  'kq-xiangji',
  'kq-voice',
  'kq-biaoqing',
  'kq-album',
  'kq-jia',
  'kq-filter',
  'kq-left',
  'kq-mobile',
  'kq-keshi',
  'kq-yiyuan',
  'kq-home',
  'kq-tongzhi',
  'kq-shuaxin',
  'kq-shoucang',
  'kq-zan',
  'kq-eye',
  'kq-weixin',
  'kq-yisheng',
  'kq-chuangzuo',
  'kq-zhibo',
  'kq-rili',
  'kq-jiankang',
  'kq-kanjian',
  'kq-bukanjian',
  'kq-zhuanlan',
  'kq-shijian',
  'kq-zan1',
  'kq-shoucang1',
  'kq-zhibozhong',
  'kq-bofang',
  'kq-zanting',
  'kq-caidan',
  'kq-time',
  'kq-shouye',
  'kq-tag',
  'kq-fenge',
  'kq-zhengque',
  'kq-sousuo',
];

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>基本用法</PartTitle>
    <Space flexWrap={'wrap'}>{names.map(renderItem)}</Space>
  </Space>
);
```

<API></API>
