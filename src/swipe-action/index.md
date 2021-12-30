---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## SwiperAction 滑动操作

滑动操作

```tsx
import React from 'react';
import {
  Space,
  PartTitle,
  SwipeAction,
  ListItem,
  CommonImg,
  rpxToPx,
} from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <SwipeAction
        action={
          <Space
            style={{
              width: rpxToPx(300),
              fontSize: rpxToPx(32),
              color: '#fff',
            }}
          >
            <Space
              alignItems={'center'}
              justify={'center'}
              flex={1}
              style={{ background: '#ff2124' }}
            >
              删除
            </Space>
            <Space
              style={{ background: '#096dd9' }}
              alignItems={'center'}
              justify={'center'}
              flex={1}
            >
              标记
            </Space>
          </Space>
        }
      >
        <ListItem
          img={CommonImg.doctor}
          title={'王医生'}
          subtitle={'外科'}
          text={'新生儿中心'}
          footer={'凯桥互联网医院'}
        />
      </SwipeAction>
    </Space>
  );
};
```

<API></API>
