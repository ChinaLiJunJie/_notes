## 描述

形如

``` typescript
interface aa {
  func: ({
    arg0: string,
    arg1: ()=>void
  }) => void
}
```

此时报错,报错信息无用

但这样写

``` typescript
interface aa {
  func: function({
    arg0: string,
    arg1: ()=>void
  }): void
}
```

无报错

不知为何 等有时间研究下