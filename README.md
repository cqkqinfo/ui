# 凯桥 UI

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

## 开发

安装依赖

```bash
$ yan i
```

启动服务

```bash
$ yan start
```

编译文档

```bash
$ yarn docs:build
```

编译项目

```bash
$ yarn build
```

## 开发主要项

- 先`fork`到自己名下，再提`merge request`
- 样式不要嵌套
- 样式用`less-modules`
- 表单组件暴露`value`和`onChange`
- 不要用图片当`icon`
- 尽量暴露节点的`class`，缩写用`cls`，比如暴露子项类名就用`itemCls`
- 例子尽量写多点
