---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。

## 代码演示

<code src="./demo/index.tsx" />

## API

#### Skeleton

| 属性        | 说明                                              | 类型                   | 默认值  |
| ----------- | ------------------------------------------------- | ---------------------- | ------- |
| title       | 标题                                              | boolean                | `false` |
| titleColor  | 标题背景色                                        | string                 | -       |
| avatar      | 头像                                              | boolean                | `false` |
| image       | 图片                                              | boolean                | `false` |
| paragraph   | 段落                                              | SkeletonParagraphProps | -       |
| customize   | 自定义占位图                                      | ReactNode              | -       |
| repetitions | 占位图重复次数                                    | number                 | 1       |
| space       | 配合 `repetitions` 属性使用，定义占位图之间的间距 | number                 | `30`    |
| style       | 设置占位图的样式                                  | CSSProperties          | -       |
| loading     | 为 `true` 时，显示占位图。反之则直接展示子组件    | boolean                | `true`  |
| fade        | 配置骨架屏的淡入淡出效果                          | boolean                | `false` |

#### SkeletonParagraphProps

| 属性  | 说明                                               | 类型                                             | 默认值              |
| ----- | -------------------------------------------------- | ------------------------------------------------ | ------------------- |
| rows  | 设置段落占位图的行数                               | number                                           | 3                   |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度 | `number` \| `string` \| `number[]` \| `string[]` | `[80, 'auto', 200]` |
