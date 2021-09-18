---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Exceed 超出组件

超出组件，超出多少行显示省略号

```tsx
import React from 'react';
import { Shadow, Space, Exceed, PartTitle } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Exceed>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </Exceed>
    <PartTitle>自定义行数</PartTitle>
    <Exceed clamp={4}>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </Exceed>
    <PartTitle>自定义省略号</PartTitle>
    <Exceed
      clamp={4}
      more={<View style={{ color: 'blue' }}>...更多</View>}
      moreBg={'#f5f5f9'}
    >
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </Exceed>
    <PartTitle>自动过滤富文本</PartTitle>
    <Exceed
      clamp={4}
      more={<View style={{ color: 'blue' }}>...更多</View>}
      moreBg={'#f5f5f9'}
    >
      {`<p>&nbsp; &nbsp; 慢性呼吸道疾病是呼吸道和肺部其它结构的慢性病症。最为常见的一些疾病为：哮喘、慢性阻塞性肺病、职业性肺部疾病和肺动脉高压。</span></p><p>&nbsp; &nbsp; 世卫组织慢性呼吸道疾病规划的宗旨是支持各会员国做出努力，减少与慢性呼吸道疾病以及特别与哮喘和慢性阻塞性肺病相关的发病、残疾和过早死亡数。</p><p><img src="https://kq-kefu.oss-cn-beijing.aliyuncs.com/reticu/2021/04/10/1f2tv14rv-b.png" style="max-width:100%;"><br></p><p>&nbsp; &nbsp; 慢性呼吸道疾病是呼吸道和肺部其它结构的慢性病症。最为常见的一些疾病为：哮喘、慢性阻塞性肺病、职业性肺部疾病和肺动脉高压。</p><p>&nbsp; &nbsp; 世卫组织慢性呼吸道疾病规划的宗旨是支持各会员国做出努力，减少与慢性呼吸道疾病以及特别与哮喘和慢性阻塞性肺病相关的发病、残疾和过早死亡数。</p>`}
    </Exceed>
  </Space>
);
```

<API></API>
