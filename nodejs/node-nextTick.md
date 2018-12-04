# nodejs-nextTick

使用nextTick,首先要理解js中的事件轮询机制

[js事件轮询机制](../Javascript/js事件轮询机制.md)

## `setTimeout(fn, 0)` 与 `nextTick(fn) 的异同`

两者都是在同步代码全部执行完后(主线程空时)执行

`setTimeout`使用的是时间队列,在时间到达时,才会添加回任务队列等待执行

`nextTick`是直接加入任务队列,然后等待执行

故`nextTick`要比`setTimeout`效率更高

## nextTick应用

* `fs`模块的`createReadStream`,`createWriteStream`

  可以在调用这两个函数后,再注册事件,并不会导致漏事件

  原因可能是这两个函数内部使用了`nextTick`,故会在注册之后管道才开始流动.