# cocoscreator中json的使用
cocoscreater是用js编写的，所以支持json格式的数据文件

## 文件内字符串类型的json的使用

```
//这是json格式的字符串
var txt = '{ "sites" : [' +
            '{ "name":"菜鸟教程" , "url":"www.runoob.com" },' +
            '{ "name":"google" , "url":"www.google.com" },' +
            '{ "name":"微博" , "url":"www.weibo.com" } ]}';
//这是js内建的方法读取json文件
//所有js脚本内都支持，无需额外的库
//但有安全性问题，不推荐使用
var obj = eval("(" + txt + ")");
//这是浏览器提供的读取json文件的方法
//需要提供支持
//安全性高，推荐
var obj = JSON.parse(txt);
```

```
//这是json格式的对象
var sites = [
            { "name": "runoob", "url": "www.runoob.com" },
            { "name": "google", "url": "www.google.com" },
            { "name": "微博", "url": "www.weibo.com" }
        ];
//可以直接使用，等同于js声明的对象
```

## 本地json文件的加载
以下内容适用于cocoscreator1.3.2版本
***
首先需要在assets文件夹下建立一个resources文件夹

***resources文件夹是cocoscreator规定的动态加载的文件夹，如果需要动态加载资源，就需要使用该文件夹***

### cc.loader.load

```
//将相对url转为绝对url
var url = cc.url.raw( 'resources/data.json' )
cc.loader.loadRes( url, function( err, res)
{
// 如果有異常會在 err 變數顯示, 否則在res就會是讀進來的json object
cc.log( 'load['+ url +'], err['+err+'] result: ' + JSON.stringify(res));
//JSON.stringify(res)是使用json库中的方法将json文件转换为字符串。
});
```

### cc.loader.loadRes
与load相同，但默认为在resources文件夹下。

### 使用
可以使用JSON.parse(json)方法将json文件转化为js对象来使用。目前发现必须先使用JSON.stringify()将json文件转为字符串,再使用JSON.parse(json)来获取对象,否则会报错.
```
    onLoad: function () {
        var url = cc.url.raw( 'resources/json/set.json' );
        var self = this;
        cc.loader.load(url,function(err,res){
            if(err != null){
                cc.log(err);
            }else{
                var a = JSON.stringify(res);
                self.setjson = JSON.parse(a);
                cc.log(self.setjson);
            };
        });
    },

    //获取set.json数据
    //传入的参数a为字符串,是对象的属性名
    getsetjson: function(a){
        var b = this.setjson[a];
        cc.log(b);
        return b;
    },
```

是否能用eval()函数暂未实验。

可以参考json笔记json使用。