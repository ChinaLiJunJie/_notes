# js自执行函数
自执行函数是指形如:

```
(function(){alert('iifksp')})()
!function(){alert('iifksp')}()
(function(){alert('iifksp')}())
```

这样写可以使一个匿名函数的自调变成合法,将函数从声明变成表达式,使解释器可以执行这些函数.

同理如!+_~等符号或void,new,delete都可以达到同样的效果.

new方法效率最低,+-效率最高,!可读性最强.