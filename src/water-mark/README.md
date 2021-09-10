---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

# WaterMark 水印组件

给页面的某个区域加上水印。

## 何时使用

页面需要添加水印标识版权时使用。
更多使用访问这里：[https://procomponents.ant.design/components/water-mark](https://procomponents.ant.design/components/water-mark)

## 代码演示

### 文字水印

通过 `content` 指定文字水印内容。

```tsx
/** Title: 文字水印 */
import React from 'react';
import { WaterMark } from '@kqinfo/ui';

export default () => (
  <WaterMark content="Kqinfo UI">
    <div style={{ height: 300 }} />
  </WaterMark>
);
```

### 图片水印

通过 `image` 指定图片地址。为保证图片高清且不被拉伸，请传入水印图片的宽高 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。

```tsx
/** Title: 图片水印 */
import React from 'react';
import { WaterMark } from '@kqinfo/ui';

export default () => {
  return (
    <WaterMark
      height={72}
      width={230}
      image="https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg"
    >
      <div style={{ height: 500 }}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          aliquid perferendis, adipisci dolorum officia odio natus facere cumque
          iusto libero repellendus praesentium ipsa cupiditate iure autem eos
          repudiandae delectus totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          praesentium, aperiam numquam voluptatibus asperiores odio? Doloribus
          saepe, eligendi facere inventore culpa, exercitationem explicabo earum
          laborum deleniti reiciendis deserunt accusantium ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          voluptas numquam impedit architecto facilis aliquam at assumenda,
          nostrum explicabo accusantium ipsam error provident voluptate
          molestias magnam quisquam excepturi illum sit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          accusantium quo corporis fugit possimus quaerat ad consequatur veniam
          voluptatum ut cumque illo beatae. Magni assumenda eligendi itaque eum
          voluptate non!
        </p>
      </div>
    </WaterMark>
  );
};
```

## API

### 基础参数

| 参数      | 说明                                                 | 类型                 | 默认值            | 版本 |
| --------- | ---------------------------------------------------- | -------------------- | ----------------- | ---- |
| width     | 水印的宽度                                           | number               | 180               |      |
| height    | 水印的高度                                           | number               | 64                |      |
| rotate    | 水印绘制时，旋转的角度，单位 °                       | number               | -22               |      |
| image     | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string`             | -                 |      |
| zIndex    | 追加的水印元素的 z-index                             | number               | 9                 |      |
| content   | 水印文字内容                                         | `string`             | -                 |      |
| fontColor | 水印文字颜色                                         | `string`             | `rgba(0,0,0,.15)` |      |
| fontSize  | 文字大小                                             | `string` \| `number` | 22                |      |

### 高级参数

| 参数          | 说明                                                                                            | 类型                | 默认值                 | 版本 |
| ------------- | ----------------------------------------------------------------------------------------------- | ------------------- | ---------------------- | ---- |
| markStyle     | 水印层的样式                                                                                    | React.CSSProperties | -                      |      |
| markClassName | 水印层的类名                                                                                    | string              | -                      |      |
| gapX          | 水印之间的水平间距                                                                              | number              | 212                    |      |
| gapY          | 水印之间的垂直间距                                                                              | number              | 222                    |      |
| offsetLeft    | 水印在 canvas 画布上绘制的水平偏移量, 正常情况下，水印绘制在中间位置, 即 `offsetTop = gapX / 2` | number              | `offsetTop = gapX / 2` |      |
| offsetTop     | 水印在 canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置, 即 `offsetTop = gapY / 2` | number              | `offsetTop = gapY / 2` |      |

### 水印 API 可视化

```jsx | inline
import react from 'react';

export default () => (
  <div>
    <img
      src="https://gw.alipayobjects.com/zos/alicdn/joeXYy8j3/jieping2021-01-11%252520xiawu4.47.15.png"
      width="100%"
    />
  </div>
);
```
