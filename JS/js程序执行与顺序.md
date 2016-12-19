# js浏览器解析星星顺序
## 函数的声明及调用
### 定义型函数与赋值型函数

```
//“定义式”函数定义 
function Fn1(){ 
alert("Hello World!"); 
} 
//“赋值式”函数定义 
var Fn2 = function(){ 
alert("Hello wild!"); 
} 
```

浏览器会遵循先定义后使用的原则，预执行定义式函数，然后从上到下执行脚本。

例：

```
//“定义式”函数定义 
Fn1(); 
function Fn1(){ 
alert("Hello World!"); 
} 
```

正常输出。

```
//“赋值式”函数定义 
Fn2(); 
var Fn2 = function(){ 
alert("Hello wild!"); 
} 
```

Firebug报错：Fn2 is not a function，浏览器未对Fn2进行预处理，依序执行，所以报错Fn2未定义。 

## 代码块及js文件的处理
浏览器对每个块或文件进行独立的扫描，然后对全局的代码进行顺序执行。所以，在一个块(文件)中，函数可以在调用之后进行“定义式”定义；但在两个块中，定义函数所在的块必须在函数被调用的块之前。 

## 其他
* 重复定义函数会覆盖前面的定义
* HTML中body的onload函数与body内部函数的执行
* JavaScript是没有多线程概念的，所有的程序都是“单线程”依次执行的。
* 最常见的回调就是onclick、onmouseo教程ver、onmousedown、onload等等浏览器事件的调用函数；还有Ajax异步请求数据的处理函数；setTimeOut延时执行、setInterval循环执行的函数
