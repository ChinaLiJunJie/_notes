# cocoscreator中json的使用
cocoscreater是用js编写的，所以支持json格式的数据文件

## 文件内字符串类型的json的使用

```javascript
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

```javascript
//这是json格式的对象
var sites = [
            { "name": "runoob", "url": "www.runoob.com" },
            { "name": "google", "url": "www.google.com" },
            { "name": "微博", "url": "www.weibo.com" }
        ];
//可以直接使用，等同于js声明的对象
```

## 本地json文件的加载
## V1.0
以下内容适用于cocoscreator1.3.2版本
***
首先需要在assets文件夹下建立一个resources文件夹

***resources文件夹是cocoscreator规定的动态加载的文件夹，如果需要动态加载资源，就需要使用该文件夹***

### cc.loader.load

```javascript
//将相对url转为绝对url
var url = cc.url.raw( 'resources/data.json' )
cc.loader.load( url, function( err, res)
{
// 如果有異常會在 err 變數顯示, 否則在res就會是讀進來的json object
cc.log( 'load['+ url +'], err['+err+'] result: ' + JSON.stringify(res));
//JSON.stringify(res)是使用json库中的方法将json文件转换为字符串。
});
```

### cc.loader.loadRes
与load相同，但相对路径的起始点为res文件夹。

### 加载
可以使用JSON.parse(json)方法将json文件转化为js对象来使用。目前发现必须先使用JSON.stringify()将json文件转为字符串,再使用JSON.parse(json)来获取对象,否则会报错.

```javascript
    var url = cc.url.raw('resources/json/set.json');
    var self = this;
    cc.loader.load(url, function (err, res) {
        if (err != null) {
            cc.log(err);
        } else {
            //res已经是json转化的对象
            //var a = JSON.stringify(res);
            //self.setjson = JSON.parse(a);
            self.loadend = !0;
            //cc.log(self.setjson);
        };
    });
```
### 读取
调用此函数,传入参数为需要使用的json文件的属性名或对象名,参数为字符串类型.

由于cocoscreator中是用动态加载的方式读取json文件,所以有可能在你调用json文件数据时json文件还未被加载完成,所以如果为加载完成,则返回空.

```javascript
    getsetjson: function (a) {
        if (this.loadend == !0) {
            var b = this.setjson[a];
            cc.log("getsetjson:" + b);
            return b;
        } else {
            return null;
        };
    },
```
### 避免错误
为了避免错误,目前研究出来的比较安全的使用方法如下:

```javascript
//首先在组件初始化时将储存数据的变量初始化为空
this.a = null;
//然后在调度器中使用此方法读取
if(this.a==null){
            var b=this.getComponent("loadJSON").getsetjson("L1RaceLong");
            if(b!=null){
                this.a=Number(b);
            };
        };
//使用时加上一层判断来避免空值进入运算
if(this.a!=null){};
```

* 是否能用eval()函数暂未实验。

* 可以参考json笔记json使用。

## V2.0版本
### V1.0使用总结和新思路

在上个版本中,使用中发现如果需要读取大量保存在json中的数据,每次声明空变量及并在update中读取会使代码异常繁琐,同时加入update中的代码需要非常谨慎,因为每帧都会调用,会占用游戏性能.
并且在实验中发现,会导致这种情况出现是由于json文件是通过动态加载来获取的,而动态加载时在所有组件onload执行完毕后最后在执行.我们改不了引擎底层的代码,只能通过其他方式来解决这种情况.
同时,我决定好好利用cocoscreator的组件化功能,这种模式具有非常高的灵活性,如果代码可扩展,可维护,可复用,将会减少很多重复工作.

### V2.0组件

```javascript
//
//  loadJSON.js
//  V2.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/1/11.
//  Copyright © 2017年 李俊杰. All rights reserved.

//  用于读取JSON数据的组件

//  !!  目前只支持读取单个json文件
//  !!  json文件必须放在assets/resources/json目录下
//  !!  所有组件读取本地文件的操作需要放到该组件的LoadJsonEnd()方法下

//  **  getsetjson(attribute)   参数-json文件中的属性名 返回-该属性对象

cc.Class({
    extends: cc.Component,

    properties: {
        JsonName: cc.String,
        NeedJson: [cc.String],
    },

    init: function () {
        this.Json = null;
        var Jsonstring = "resources/json/" + this.JsonName;
        var url = cc.url.raw(Jsonstring);
        var self = this;
        cc.loader.load(url, function (err, res) {
            if (err != null) {
                cc.log(err);
            } else {
                self.Json = res;
                console.log("set.josn load success");
                console.log(self.Json);
                self.loadend();
            };
        });
    },

    //获取set.json数据
    getsetjson: function (a) {
        var b;
        b = this.Json[a];
        console.log("getsetjson:---" + a + ":" + b);
        return b;
    },

    //读取json文件结束后初始化
    loadend: function () {
        for(var i in this.NeedJson){
            var a = this.getComponentsInChildren(this.NeedJson[i]);
            for(var l in a){
                a[l].LoadJsonEnd();
            }
        }
    }
});
```

依旧通过动态加载读取json文件,并提供getsetjson()方法供其他组件获取json数据.

添加了一个函数,当动态加载json文件后自动调用所有加入请求json的LoadJsonEnd();

所以,在需要json文件的组件内,只要写一个LoadJsonEnd()方法,在方法内就能获取到json数据