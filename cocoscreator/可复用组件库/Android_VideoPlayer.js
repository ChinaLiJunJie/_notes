//
//  Android_VideoPlayer.js
//  V1.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/2/9.
//  Copyright © 2017年 李俊杰. All rights reserved.

//  通过调用安卓视频播放器来实现机顶盒H5视频播放

//  !!  如果安卓并未做支持,将不会播放视频

//  **  

cc.Class({
    extends: cc.Component,

    properties: {
    },

    //初始化组件
    onLoad: function () {
        if (this.checkAndroidIsReady()) {
            this.bool_AndriodReady = true;
        } else {
            this.bool_AndriodReady = false;
        };
        this.bool_VideoPlaying = false;
        this.sch_checkVideoPlaying = null;
    },

    //检测安卓是否支持
    checkAndroidIsReady() {
        if (typeof androidjs != undefined) {
            return false;
        };
        return true;
    },

    //通过传递URL来播放视频
    playvideobyURL: function (URL) {
        if (this.bool_AndriodReady) {
            this.bool_VideoPlaying = true;
            androidjs.startVideo(URL);
        }
    },

    //获取播放状态
    IsPlayingVideo: function () {
        if (this.bool_AndriodReady) {
            return androidjs.isPlaying();
        }
    },

    //开启视频播放结束检测,
    checkPlayingVideo: function (fun_VideoEndCallBack) {
        if (this.bool_AndriodReady) {
            this.fun_checkVideoPlaying = function () {
                if (!this.IsPlayingVideo()) {
                    this.bool_VideoPlaying = false;
                    if (fun_VideoEndCallBack != undefined) { fun_VideoEndCallBack(); };
                    this.unschedule(this.fun_checkVideoPlaying);
                };
            };
            this.schedule(this.fun_checkVideoPlaying, 1);
        } else {
            fun_VideoEndCallBack();
        };
    },

});
