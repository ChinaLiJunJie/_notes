# npm常用框架

## 命令列表

需要root权限

### 常用包

```js
//-- express框架
npm install express
//-- node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
npm install body-parser 
//-- 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
npm install cookie-parser
//-- node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
npm install multer
//-- ws
npm install ws
```

```ts
npm install --save-dev @types/ws
```

### 常用命令

```bash
// 升级自己
npm install -g npm
// 安装包 -g 全局 --save 添加到package -dev 添加到开发包依赖
npm install -g sss --save-dev
// 查看全局安装包列表 -g 全局 --depth 0 显示依赖深度 0 为不显示依赖包
npm list -g --depth 0
// 查看全局位置
npm root -g
```