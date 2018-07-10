[Ts模块解析](https://www.tslang.cn/docs/handbook/module-resolution.html#base-url)

#### 使用方法

tsconfig中

baseurl 指定根目录位置

paths 对象名用正则指定应用的文件范围,对象属性是个数组,指定查找顺序及查找地址

#### 用途

* 自定义引用位置,简化代码内引用

* 一个项目内分成多个`tsconfig`来编译时,可以保证编译出来引用正确,且开发时不报错