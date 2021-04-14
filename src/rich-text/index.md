---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## RichText

富文本

```tsx
import React from 'react';
import { Space, RichText, PartTitle } from '@kqinfo/ui';

const content =
  '<p>&nbsp; &nbsp; 慢性呼吸道疾病是呼吸道和肺部其它结构的慢性病症。最为常见的一些疾病为：哮喘、慢性阻塞性肺病、职业性肺<span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;">部疾病和肺动脉高压。</span></p><p>&nbsp; &nbsp; 世卫组织慢性呼吸道疾病规划的宗旨是支持各会员国做出努力，减少与慢性呼吸道疾病以及特别与哮喘和慢性阻塞性肺病相关的发病、残疾和过早死亡数。</p><p><img src="https://kq-kefu.oss-cn-beijing.aliyuncs.com/reticu/2021/04/10/1f2tv14rv-b.png" style="max-width:100%;"><br></p><p>&nbsp; &nbsp; 慢性呼吸道疾病是呼吸道和肺部其它结构的慢性病症。最为常见的一些疾病为：哮喘、慢性阻塞性肺病、职业性肺部疾病和肺动脉高压。</p><p>&nbsp; &nbsp; 世卫组织慢性呼吸道疾病规划的宗旨是支持各会员国做出努力，减少与慢性呼吸道疾病以及特别与哮喘和慢性阻塞性肺病相关的发病、残疾和过早死亡数。</p>';

export default () => (
  <Space vertical size={10}>
    <PartTitle>一般用法</PartTitle>
    <RichText nodes={content} />
  </Space>
);
```

<API></API>
