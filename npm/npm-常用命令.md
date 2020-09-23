# npm常用框架

## 命令列表

需要root权限

### 常用包

```bash
// 可以使用 save和dev之间不要有空格
npm install --save-dev packagename
npm install --save-dev @types/packagename
// 只安装使用模块,不装开发模块
npm install --production

npm install --save --only=dev packagename
npm install --save --only=dev @types/packagename
```

### 常用命令

```bash
// 升级自己
npm install -g npm
// 安装包 -g 全局 --save 添加到package -dev 添加到开发包依赖
npm install -g packageName --save-dev
// 查看全局位置
npm root -g
```

### install
```bash
// 两者等同
$ npm i -S
$ npm install --save

// 不安装开发版本的包,仅安装包中运行版本的包
$ npm i <package name> -S --production
```

#### 查看全局安装包列表 -g 全局 --depth 0 显示依赖深度 0 为不显示依赖包

``` bash
npm list -g --depth 0
```