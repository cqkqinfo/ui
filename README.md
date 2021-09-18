# 凯桥 UI

[![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Test coverage][codecov-image]][codecov-url] [![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@kqinfo/ui.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@kqinfo/ui
[travis-image]: https://img.shields.io/travis/remaxjs/@kqinfo/ui.svg?style=flat-square
[travis-url]: https://travis-ci.org/remaxjs/@kqinfo/ui
[codecov-image]: https://codecov.io/gh/remaxjs/@kqinfo/ui/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/remaxjs/@kqinfo/ui
[download-image]: https://img.shields.io/npm/dm/@kqinfo/ui.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/@kqinfo/ui

## 使用

```bash
$ yarn add @kqinfo/ui
```

## 按需加载

安装`babel-plugin-import`插件

```bash
$ yarn add babel-plugin-import -D
```

修改`babel.config.js`文件

```diff
// babel.config.js
module.exports = {
  plugins: [
+    [
+      'import',
+      {
+        libraryDirectory: 'es',
+        libraryName: '@kqinfo/ui'
+      },
+      '@kqinfo/ui'
+    ]
  ]
};

```

## 定制主题

修改`remax.config.js`文件

```diff
module.exports = {
  ...
-  plugins: [less()],
+  plugins: [
+   less({
+     lessOptions: {
+       modifyVars: { '@brand-primary': '#2780d9' },
+       javascriptEnabled: true
+     }
+   })
+ ]
  ...
};
```

修改`app.tsx`文件

```diff
+import { ConfigProvider } from '@kqinfo/ui';

const App = (props) => {
-  return props.children;
+  return <ConfigProvider.Provider initialState={{brandPrimary: '#2780d9'}}>{props.children}</ConfigProvider.Provider>;
};
```

## 开发

安装依赖

```bash
$ yarn
```

启动服务

```bash
$ yarn start
```

## 本地调试

启动调试

```bash
$ yarn dev
```

本地连接

```bash
$ yarn link
```

本地项目调试

```bash
$ yarn link @kqinfo/ui
```

## 编写测试

- 相关库 [jest](https://jestjs.io/zh-Hans/docs/getting-started) 、[testing-library](https://testing-library.com/docs/react-testing-library/intro)
- [如何编写测试](https://segmentfault.com/a/1190000022054307)

## 开发注意项

- 先`fork`到自己名下，再提`merge request`
- 样式不要嵌套
- 样式用`less-modules`
- 表单组件暴露`value`和`onChange`
- 不要用图片当`icon`
- 尽量暴露节点的`class`，缩写用`cls`，比如暴露子项类名就用`itemCls`
- 例子尽量写多点

## 钉钉交流群

<img width="320" src="https://z3.ax1x.com/2021/09/18/4l7gmT.jpg">
