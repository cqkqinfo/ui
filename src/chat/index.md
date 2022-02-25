---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Chat 聊天

聊天

```tsx
import React from 'react';
import { Space, Chat, PartTitle } from '@kqinfo/ui';
import dayjs from 'dayjs';

export default () => (
  <Chat
    isDoctor
    patInfo={{
      patName: '姓名',
      patAge: '年龄',
      patSex: '性别',
      visit: '当次就诊',
      illnessDesc: '患者主述',
      diagnosisDesc: '主要诊断',
      onToDetail: () => alert('查看详情'),
    }}
    message={{
      doctorName: '医生',
      patName: '患者',
      initData: [
        {
          content: '233',
          date: dayjs()
            .subtract(1, 'd')
            .toString(),
        },
        {
          content: '666',
          date: dayjs().toString(),
          isMe: true,
        },
      ],
    }}
    header={{
      endDate: dayjs()
        .add(10, 'm')
        .toString(),
      onDownTimeEnd: () => console.log('问诊结束'),
      remainder: '3',
      onToRecord: () => alert('跳转就诊记录'),
      onClickEnd: () => alert('结束问诊'),
      endMoreActions: [
        {
          text: '留言',
          onTap: () => alert('留言'),
        },
        {
          text: '修改病例',
          onTap: () => alert('修改病例'),
        },
      ],
    }}
  />
);
```

<API exports='["default", "patInfo", "header", "message", "messageData"]'></API>
