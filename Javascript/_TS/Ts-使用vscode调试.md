# 使用vscode调试

* 修改launch.json

  ```json
  {
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "init",
      // 程序主入口,ts文件就可以,会映射到js文件上
      "program": "${workspaceRoot}/src/index.ts",
      "args": [
        "-init"
      ],
      "smartStep": true,
      "cwd": "${workspaceFolder}",
      "runtimeArgs": [
        "--nolazy"
      ],
      "sourceMaps": true,
      // 映射的js文件目录
      "outFiles": [
        "${workspaceRoot}/build/**/*.js"
      ]
    }
  ]
}
  ```