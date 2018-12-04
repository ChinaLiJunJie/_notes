# Html
## 概述
* hmtl是一种标记性语言
* 使用javascript来进行脚本工作
* 使用css来格式化样式

例：

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
 
<h1>我的第一个标题</h1>
 
<p>我的第一个段落。</p>
 
</body>
</html>
```

* <!DOCTYPE html> 声明为 HTML5 文档
* <html> 元素是 HTML 页面的根元素
* <head> 元素包含了文档的元（meta）数据
* <title> 元素描述了文档的标题
* <body> 元素包含了可见的页面内容
* <h1> 元素定义一个大标题
* <p> 元素定义一个段落
* 只有<body>区块中的内容才会在网页上显示
* <meta charset="utf-8">可以解决直接输出中文出现中文乱码的情况
* 从开始标签到结束标签为一个元素
* 在元素中，一般在开始标签中描述属性，属性总是以名称/值对的形式出现，比如：name="value"