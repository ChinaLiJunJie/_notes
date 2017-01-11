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
//  !!  所有请求json的组件,需要在NeedJson字符串数组内加入自己的组件名,
//      并在组件内创建LoadJsonEnd()方法,在方法内读取json数据

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
