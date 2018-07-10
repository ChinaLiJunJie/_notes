# 初始化

使用`npm init`及`tsc --init`初始化

tsconfig

```typescript
{
  "compilerOptions": {
    //指定生成哪个模块系统代码
    "module": "commonjs",
    //目标代码类型
    "target": "es6",
    //在表达式和声明上有隐含的'any'类型时报错。
    "noImplicitAny": false,
    //用于debug  
    "sourceMap": true,
    //仅用来控制输出的目录结构--outDir。
    "rootDir": "./src",
    //重定向输出目录。
    "outDir": "./build",
    //在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。   
    "watch": true
  },
  "include": [
    "./src/**/*.ts"
  ],
  "exclude": [
    "./node_modules/**/*",
    "./outfile/**/*"
  ]
}
```

# tsd
使用npm`npm install --save-dev @types/ws@1.0.0`来获取对应包的tsd

#nodemon
使用nodemon来自动重启服务