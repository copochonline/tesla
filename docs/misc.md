1. lerna 必须全局安装，才能使用 bootstrap
2. lerna 简单使用教程

```bash
  lerna init

  在 sub package 中添加依赖，如: "@copoch/tesla-middleware-webpack": "^0.0.1"。注意：有 scope 记得包含进去

  最后，输入 `lerna bootstrap`。注意：必须等待结束，否则会出现中间态文件

```

3. lerna publish 如果有 scope 的话，不能使用 npmClientArgs，可以使用下面方式解决

```bash
lerna exec -- npm publish --access public
```

待提 issue

4.  