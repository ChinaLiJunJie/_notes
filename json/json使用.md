# json使用
## 把 JSON 文本转换为 JavaScript 对象
JSON 最常见的用法之一，是从 web 服务器上读取 JSON 数据（作为文件或作为 HttpRequest），将 JSON 数据转换为 JavaScript 对象，然后在网页中使用该数据。
### JSON 实例 - 来自字符串的对象
创建包含 JSON 语法的 JavaScript 字符串：

```
var txt = '{ "sites" : [' +
'{ "name":"菜鸟教程" , "url":"www.runoob.com" },' +
'{ "name":"google" , "url":"www.google.com" },' +
'{ "name":"微博" , "url":"www.weibo.com" } ]}';
```

由于 JSON 语法是 JavaScript 语法的子集，JavaScript 函数 eval() 可用于将 JSON 文本转换为 JavaScript 对象。

eval() 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。必须把文本包围在括号中，这样才能避免语法错误：

```
var obj = eval ("(" + txt + ")");
```

生成的对象为obj.sites

### json解释器
eval() 函数可编译并执行任何 JavaScript 代码。这隐藏了一个潜在的安全问题。

使用 JSON 解析器将 JSON 转换为 JavaScript 对象是更安全的做法。JSON 解析器只能识别 JSON 文本，而不会编译脚本。
在浏览器中，这提供了原生的 JSON 支持，而且 JSON 解析器的速度更快。

较新的浏览器和最新的 ECMAScript (JavaScript) 标准中均包含了原生的对 JSON 的支持。

```
var txt = '{ "sites" : [' +
'{ "name":"菜鸟教程" , "url":"www.runoob.com" },' +
'{ "name":"google" , "url":"www.google.com" },' +
'{ "name":"微博" , "url":"www.weibo.com" } ]}';

var obj = JSON.parse(txt);

document.getElementById("name").innerHTML=obj.sites[0].name 
document.getElementById("url").innerHTML=obj.sites[0].url
```

### jsonp
Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

为什么我们从不同的域（网站）访问数据需要一个特殊的技术(JSONP )呢？这是因为同源策略。

同源策略，它是由Netscape提出的一个著名的安全策略，现在所有支持JavaScript 的浏览器都会使用这个策略。

[RUNOOB[JSONP]教程](http://www.runoob.com/json/json-jsonp.html)

### PHP JSON

[RUNOOB[PHP JSON]教程](http://www.runoob.com/php/php-json.html)

### json压缩格式化及转化格式工具

[RUNOOB[JSON工具]](http://c.runoob.com/front-end/53)