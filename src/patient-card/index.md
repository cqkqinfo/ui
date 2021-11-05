---
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /business
---

## PatientCard 患者就诊卡

患者就诊卡

```tsx
import React from 'react';
import { PatientCard } from '@kqinfo/ui';

export default () => {
  return (
    <PatientCard
      patientName={'小明'}
      patCardNo={'32132132131'}
      hisName={'凯桥医院'}
    />
  );
};
```

<API></API>
