//
//  AndroidAUC_NJXJ.js
//  V1.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/2/14.
//  Copyright © 2017年 李俊杰. All rights reserved.

//  通过安卓进行游戏鉴权操作

//  !!  如果未在南京炫佳安卓平台环境下运行本游戏,会无法正常进行游戏

//  **  

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        //是否已购买游戏
        this.HavedBuy = false;
        //是否在公司安卓环境下运行
        this.ISAndroidReady = this.checkAndroidIsReady();
        //是否是第一次鉴权
        this.FirstAUC = true;
        //进行初次鉴权
        this.start_AUC();
        //
        var self = this;
        window.CallBack_authenSuccess = function () {
            self.authenSuccess();
        };
        window.CallBack_authenFail = function () {
            self.authenFail();
        };
        //console.log(window);
    },

    //检测是否在公司平台下运行
    checkAndroidIsReady: function () {
        //console.log(typeof androidjs);
        if (typeof androidjs != "undefined") {
            return true;
        };
        return false;
    },

    //鉴权
    start_AUC: function () {
        //进行鉴权
        //console.log(this.ISAndroidReady);
        if (this.ISAndroidReady && !this.HavedBuy) {
            androidjs.authenInGame();
        };
    },

    //鉴权成功后安卓调用
    authenSuccess: function () {
        this.HavedBuy = true;
        this.getComponent("GameCon").Zanting.node.active = false;
        this.getComponent("GameCon").Black.node.active = false;
        this.getComponent("GameCon").gamestart = true;
        cc.director.resume();
    },

    //鉴权失败后安卓调用
    authenFail: function () {
        //首次调用
        if (this.FirstAUC) {
            this.scheduleOnce(function () {
                this.FirstAUC = false;
                //暂停游戏
                var self = this.getComponent("GameCon");
                self.Zanting.node.active = true;
                self.Black.node.active = true;
                self.gamestart = false;
                self.chooseid = 0;
                self.Zanting.node.getChildByName("kuangzi").x = -70;
                cc.director.pause();
                //订购
                androidjs.order();
            }, 30);
        } else {
            //暂停游戏
            var self = this.getComponent("GameCon");
            self.Zanting.node.active = true;
            self.Black.node.active = true;
            self.gamestart = false;
            self.chooseid = 0;
            self.Zanting.node.getChildByName("kuangzi").x = -70;
            cc.director.pause();
            //订购
            androidjs.order();
        };
    },

    exitGame:function(){
        if(this.ISAndroidReady){
            androidjs.exitGame();
        }else{
            window.close();
        };
    },

    // CheckHavedBuy() {
    //     var a = location.href;
    //     console.log("______");
    //     console.log(a);
    //     var n = a.search(/authenResult=/i);
    //     var m = a[n + 13];
    //     if (m == "t" || m == "T") {
    //         this.HavedBuy = true;
    //     };
});
