vscode 调试设置

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Game",
            "url": "http://localhost:7456",
            "webRoot": "${workspaceFolder}/temp/quick-scripts",
            "sourceMaps": true,
            "skipFiles": [
                "app/"
            ]
        }
    ]
}
```

vscode 编译设置

```json
{
    "label": "compile",
    "command": "curl",
    "args": [
        "http://localhost:7456/update-db"
    ],
    "type": "shell",
    "isBackground": false,
    "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared",
        "showReuseMessage": false,
        "clear": false
    }
}
```

在调试前编译

```json
{
    "type": "chrome",
    "request": "launch",
    "name": "Launch Game",
    "url": "http://localhost:7456",
    "webRoot": "${workspaceFolder}/temp/quick-scripts",
    "sourceMaps": true,
    "skipFiles": [
        "app/"
    ],
    "preLaunchTask": "compile"
}
```