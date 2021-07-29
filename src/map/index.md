---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Map

地图

```tsx
import React from 'react';
import { Space, Map, PartTitle, getLocation, CommonImg } from '@kqinfo/ui';
import { usePromise } from 'parsec-hooks';

export default () => {
  const {
    data: { latitude: lat, longitude: log },
  } = usePromise(getLocation, { initValue: {} });
  return (
    <Map
      onMarkerClick={console.log}
      markers={data.list.map(({ id, name, latitude, longitude, logoUrl }) => ({
        id,
        iconPath: CommonImg.hospital,
        label: { content: name, textAlign: 'center', anchorY: 10 },
        latitude,
        longitude,
        width: (81 / 3) * 2,
        height: (88 / 3) * 2,
      }))}
      style={{ width: '100%', height: '100vh' }}
      id={'map'}
      longitude={log}
      latitude={lat}
    />
  );
};

const data = {
  list: [
    {
      id: 21,
      serialNumber: 'H20210402082537380919',
      name: '大竹林接种点',
      logoUrl:
        'https://kq-kefu.oss-cn-beijing.aliyuncs.com/reticu/2021/04/03/1f2aq7rla-yylogo@3x.png',
      longitude: 106.512329,
      latitude: 29.585162,
      distance: 1.79,
      address: '重庆市渝北区武陵路1号',
      inoculationIds: '1',
      injectNums: '2',
    },
    {
      id: 1,
      serialNumber: 'H0001',
      name: '北部宽仁接种点',
      logoUrl:
        'https://kq-kefu.oss-cn-beijing.aliyuncs.com/reticu/2021/04/03/1f2aq85aa-yylogo@3x.png',
      longitude: 106.504711,
      latitude: 29.619515,
      distance: 2.67,
      address: '重庆市渝北区星光大道69号(两江幸福广场D区对面)',
      inoculationIds: '1,2,3',
      injectNums: '1,2',
    },
    {
      id: 22,
      serialNumber: 'H20210402160649370459',
      name: '人和接种点',
      logoUrl:
        'https://kq-kefu.oss-cn-beijing.aliyuncs.com/reticu/2021/04/03/1f2aq7g9l-yylogo@3x.png',
      longitude: 106.507853,
      latitude: 29.643231,
      distance: 4.96,
      address: '重庆市渝北区两江新区星光大道118号',
      inoculationIds: '3',
      injectNums: '1',
    },
  ],
  pageNum: 1,
  pageSize: 10,
  size: 3,
  startRow: 1,
  endRow: 3,
  total: 3,
  pages: 1,
};
```

<API></API>
