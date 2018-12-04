# json
## 简介
* json是储存和交换文本信息的语法，类似XML,但更小，更快，更易解析。

* json使用javascript的语法，但独立于语言和平台，json解析器和json库支持许多不同的编程语言，如php,jsp,.net。

* json文本格式在语法上与创建js对象代码相同，所以js能用内建的eval()函数用json数据来生成原生的js对象。

## 与XML的异同
### 相同之处
* json是纯文本
* json具有自我描述性（人类可读）
* json具有层级结构（值中存在值）
* json可通过js进行解析
* json可通过ajax进行传输

### 不同之处
* 没有结束标签
* 更短
* 读写速度更快
* 能使用内建的eval()方法进行解析
* 使用数组
* 不使用保留字

## json语法
### json语法规则
* 数据在名称／值对中
* 数据由逗号分隔
* 花括号保存对象
* 方括号保存数组

### json名称／值对
JSON 数据的书写格式是：名称/值对。
名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是值：

```
"name" : "菜鸟教程"
```

这很容易理解，等价于这条 JavaScript 语句：

```
name = "菜鸟教程"
```

### JSON 对象
JSON 对象在花括号中书写：
对象可以包含多个名称/值对：

```
{ "name":"菜鸟教程" , "url":"www.runoob.com" }
```

这一点也容易理解，与这条 JavaScript 语句等价：

```
name = "菜鸟教程"
url = "www.runoob.com"
```

### JSON 数组
JSON 数组在方括号中书写：
数组可包含多个对象：

```
{
"sites": [
{ "name":"菜鸟教程" , "url":"www.runoob.com" }, 
{ "name":"google" , "url":"www.google.com" }, 
{ "name":"微博" , "url":"www.weibo.com" }
]
}
```

在上面的例子中，对象 "employees" 是包含三个对象的数组。每个对象代表一条关于某人（有姓和名）的记录。

### JSON 文件
* JSON 文件的文件类型是 ".json"
* JSON 文本的 MIME 类型是 "application/json"
