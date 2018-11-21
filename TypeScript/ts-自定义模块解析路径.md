[Ts模块解析](https://www.tslang.cn/docs/handbook/module-resolution.html#base-url)

#### 使用方法

tsconfig中

baseurl 指定根目录位置

paths 对象名用正则指定应用的文件范围，对象属性是个数组，指定查找顺序及查找地址。

#### 注意

paths 参数只会改变编译时查找对应文件的位置，并不会编译时自动更改文件路径。

#### 用途

编译时和运行时，文件在不同位置时，引用路径写运行时的路径，在 paths 中添加对应编译时文件的查找路径