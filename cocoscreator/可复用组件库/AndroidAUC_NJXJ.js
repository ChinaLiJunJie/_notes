//
//  AndroidAUC_NJXJ.js
//  V1.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/2/14.
//  Copyright © 2017年 李俊杰. All rights reserved.

//  通过炫佳安卓平台进行游戏鉴权操作

//  !!  如果未在南京炫佳安卓平台环境下运行本游戏,会无法正常进行游戏
//  !!  此组件挂载在与canvas平级的空节点下
//  !!  此组件会使节点变为常驻节点,不会被切换场景所销毁
//  !!  如果不在公司平台下,游戏会正常运行
//  !!  需要在游戏的index.html页面下添加两个函数来调用CallBack_authenSuccess()及CallBack_authenFail();

//  **  checkAndroidIsReady(){return true or false}:检测是否在公司平台下运行
//  **  start_AUC():如果游戏未购买且在平台环境下,则进行鉴权操作
//  **  exitGame():调用安卓关闭游戏窗口

//  $$  whenSuccess():当鉴权成功后调用,默认为空函数
//  $$  whenFailFirst():当第一次鉴权失败后调用,默认为空函数
//  $$  whenFail():当鉴权失败后调用,默认为空函数
//  $$  skip_AUC():开始鉴权时,如果未在平台下或已购买时调用,默认为空函数

cc.Class({
    extends: cc.Component,

    properties: {
        FreeTime: 30,
    },

    onLoad: function () {
        //使此节点为常驻节点,不会再切换场景时被销毁
        cc.game.addPersistRootNode(this.node);
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
        }else{
            this.skip_AUC();
        };
    },

    //鉴权成功后安卓调用
    authenSuccess: function () {
        this.HavedBuy = true;
        this.whenSuccess();
    },

    //鉴权失败后安卓调用
    authenFail: function () {
        //首次调用
        if (this.FirstAUC) {
            this.scheduleOnce(function () {
                this.FirstAUC = false;
                //暂停游戏
                this.whenFailFirst();
                //订购
                androidjs.order();
            }, this.FreeTime);
        } else {
            //暂停游戏
            this.whenFail();
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

    whenSuccess:function(){},
    whenFailFirst:function(){},
    whenFail:function(){},
    skip_AUC:function(){},
});
