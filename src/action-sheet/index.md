---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## ActionsSheet

操作项

```tsx
import React, { useRef, useState } from 'react';
import { Space, ActionSheet, PartTitle, Button } from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <ActionSheet />
      <PartTitle>一般用法</PartTitle>
      <Button
        type={'primary'}
        onTap={() => {
          ActionSheet.show({ items: ['操作项1', '操作项2'] }).then(console.log);
        }}
      >
        显示
      </Button>
    </Space>
  );
};
```

<API></API>
