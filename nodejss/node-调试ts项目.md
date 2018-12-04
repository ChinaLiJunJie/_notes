#### 添加以下两个参数

``` json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "program": "${workspaceFolder}/启动文件.ts",
            "outFiles": [
                "${workspaceFolder}/编译后的js文件目录/**.*.js"
            ]
        }
    ]
}
```

这样就能成功进入程序进行调试