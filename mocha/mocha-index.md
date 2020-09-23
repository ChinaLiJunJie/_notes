# mocha

一个nodejs用的单元测试模块,用于单元测试

[mocha 总结文档](https://cnodejs.org/topic/59e3873520a1a3647d72ac39)

[测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

[Github](https://github.com/mochajs/mocha)

[官网](https://mochajs.org/)

[vscode 插件](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)

[中文文档](https://segmentfault.com/a/1190000011362879)

### 如何使用

```bash
npm install -save --dev mocha
npm install -save --dev @types/mocha
mocha test/**/*.test.js
```

测试代码写法参考仓库

### 试用体验

尝试使用ts来编写单元测试,发现非常难用,需要依赖许多包才能实现,且会有依赖不对应的问题。

于是尝试使用js来写,体验不错,ts编译成的js有代码提示,原生的库因为使用d.ts文件,同样也有代码提示。

而且 js 还可以方便的修改类的私有属性，不用担心报错。

由于是测试例,并不用太关心拓展复用重构等问题,所以用 js 直接写意外的合适？