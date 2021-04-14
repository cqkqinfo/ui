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
+        libraryName: 'parsec-hooks',
+        camel2DashComponentName: false,
+        customName: name => {
+          if (/^(use)/.test(name)) {
+            return `parsec-hooks/lib/${name
+              .replace(/^(use)/, '')
+              .replace(/^\S/, s => s.toLowerCase())}Hooks`;
+          } else {
+            return `parsec-hooks/lib/utils/${name}`;
+          }
+        }
+      }
+    ],
+    [
+      'import',
+      {
+        libraryName: 'antd-mobile',
+        style: true
+      },
+      'antd-mobile'
+    ],
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
-  plugins: [less(), sass()],
+  plugins: [less({modifyVars: { '@brand-primary': '#2780d9' }}), sass()],
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

## 开发注意项

- 先`fork`到自己名下，再提`merge request`
- 样式不要嵌套
- 样式用`less-modules`
- 表单组件暴露`value`和`onChange`
- 不要用图片当`icon`
- 尽量暴露节点的`class`，缩写用`cls`，比如暴露子项类名就用`itemCls`
- 例子尽量写多点
