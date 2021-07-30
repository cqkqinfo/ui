---
nav:
  title: 组件
  path: /components
group:
  title: 数据输入
  path: /data-entry
---

## Rate 评分

评分组件

```tsx
import React, { useState } from 'react';
import { Space, Rate, PartTitle, Icon } from '@kqinfo/ui';
export default () => {
  const [value, setValue] = useState(3);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>一般用法</PartTitle>
      <Rate />
      <div style={{ marginBottom: 10 }} />
      <Rate maxValue={2} />
      <div style={{ marginBottom: 10 }} />
      <PartTitle>更换样式</PartTitle>
      <Rate activeColor="red" />
      <Rate activeColor="red" size={30} />
      <Rate activeColor="red" gutter={'1em'} />
      <div style={{ marginBottom: 10 }} />
      <Rate activeColor="blue" defaultColor="bisque" />
      <div style={{ marginBottom: 10 }} />
      <PartTitle>自定义样式</PartTitle>
      <Rate iconName="kq-notice" />
      <div style={{ marginBottom: 10 }} />
      <Rate
        renderItem={param => {
          if (param.actived) {
            return <Icon name="kq-zengjia" size={30} color="skyblue" />;
          } else {
            return <Icon name="kq-jianshao" size={30} />;
          }
        }}
      />
      <div style={{ marginBottom: 10 }} />
      <PartTitle>受控组件</PartTitle>
      <Rate value={value} onChange={setValue} />
      <div style={{ marginBottom: 10 }} />
      <Rate defaultValue={2} disabled />
    </Space>
  );
};
```

<API></API>
