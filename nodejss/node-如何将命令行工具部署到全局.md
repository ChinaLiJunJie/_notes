# 如何将命令行工具部署到全局

## step 1

在项目内建立bin文件夹

在文件夹内建立以命令行标识符为名的文件

文件内容

```js
// 这一行似乎是指定了node的目录
#!/usr/bin/env node
// 引用的js文件的位置
require('../build/index.js')
```

## step2

在package.json中添加如下字段

```json
"bin": { 
    "ljj": "./bin/ljj" 
}
```

ljj指定了全局命令行的名字

后面指定了bin的目录

如果更新了版本,需要手动改版本号

## step3

在项目目录内 执行 `npm install . -g`

测试 完成