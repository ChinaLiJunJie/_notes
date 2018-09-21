使用 loadFile 接口加载html文件时老加载不出来,指向的地址是 electron 包里的一个默认的 html 文件

最后发现是因为我在设置 package.json 时, 跑的命令是 electron ./build/index.js, 而改为 electron . 之后就好了

不知道为什么,但这样处理之后确实就好了