# yarn 

yarn 是一个试图替代 npm 的 nodejs 模块管理器

## 书签

[【中文文档】](https://yarn.bootcss.com/)
[【中文文档2】](https://yarn.org.cn/)

## 基本

### 全局模块安装位置

~/.config/yarn/global/node_modules/.bin

## 常用命令

### 设置仓库为淘宝镜像

```
yarn config set registry https://registry.npm.taobao.org --global

yarn config set disturl https://npm.taobao.org/dist --global
```

### 取消设置淘宝镜像

```
yarn config delete registry

yarn config set disturl
```

### 全局

yarn 处理文件目录

yarn global 处理全局目录