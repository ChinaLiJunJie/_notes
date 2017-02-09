//
//  Com_Title.js
//  V1.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/2/9.
//  Copyright © 2017年 李俊杰. All rights reserved.

//  标题场景模板

//  !!  

//  **  

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        //注册按键监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    //按键监听回调
    onKeyDown: function (e) {
        if (e.keyCode == 37) {
        };
        if (e.keyCode == 39) {
        };
        if (e.keyCode == 13 || e.keyCode == 273) {
        };
        if (e.keyCode == 8 || e.keyCode == 48) {
        };
    },
});
