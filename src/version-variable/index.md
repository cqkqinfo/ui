---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## versionVariable 版本变量

`小程序`上根据开发版、体验版和正式版返回不同的变量

`web`端是根据域名判断：localhost 对应开发版，tih 对应体验版，ih 对应正式版

### 返回不同域名

```javascript
versionVariable({
  develop: 'https://develop.com',
  trial: 'https://trial.com',
  release: 'https://release.com',
});
```

### 返回不同对象

```javascript
versionVariable({ develop: { a: 1 }, trial: { a: 2 }, release: { a: 3 } });
```

### 返回不同方法

```javascript
versionVariable({ develop: () => 1, trial: () => 2, release: () => 3 });
```

<API></API>
