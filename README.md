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

## 快速开始

按照依赖

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
