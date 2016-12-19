# javascript错误-throw,tryh和catch
try 语句测试代码块的错误。

catch 语句处理错误。

throw 语句创建自定义错误。

## JavaScript try 和 catch
try 语句允许我们定义在执行时进行错误测试的代码块。

catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。

JavaScript 语句 try 和 catch 是成对出现的。

语法
```
try {
  //在这里运行代码
} catch(err) {
  //在这里处理错误
}
```
## Throw语句
throw 语句允许我们创建自定义错误。

正确的技术术语是：创建或抛出异常（exception）。

如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息。

语法
```
throw exception
```

## 综合使用
```
function myFunction(){
	try{ 
		var x=document.getElementById("demo").value;
		if(x=="")    throw "值为空";
		if(isNaN(x)) throw "不是数字";
		if(x>10)     throw "太大";
		if(x<5)      throw "太小";
	}
	catch(err){
		var y=document.getElementById("mess");
		y.innerHTML="错误：" + err + "。";
	}
}
```