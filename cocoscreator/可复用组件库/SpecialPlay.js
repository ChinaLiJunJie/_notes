//
//  SpecialPlay.js
//  V1.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/1/17.
//  Copyright © 2017年 李俊杰. All rights reserved.

//  可以通过这个组件管理场景下所有动画的播放,恢复播放前的状态

//  !!  该组件为动画组件的扩展,需要配合cc.Animation使用

//  **  playSpecial(nodeid,specialname,x,y,scalex,scaley,anchorx,anchory):播放某个节点的某个动画,设定缩放,位置,并储存
//  **  stopSpecial(nodeid,specialname,x,y,scalex,scaley,anchorx,anchory):停止某个节点的某个动画,可以设定结束动画后的属性,如没有设置,将还原播放前的设置

cc.Class({
    extends: cc.Component,

    properties: {
        playnode: [cc.Node],//需要播放动画的节点
    },

    onLoad: function () {
        //管理Special的数组
        this.SpecialSave = [];
        //储存Special的数组
        this.Special = [];
    },

    playSpecial: function (nodeid, specialname, x, y, scalex, scaley, anchorx, anchory) {
        this.playnode[nodeid].active = true;
        this.playnode[nodeid].x = x || this.playnode[nodeid].x;
        this.playnode[nodeid].y = y || this.playnode[nodeid].y;
        this.playnode[nodeid].scaleX = scalex || this.playnode[nodeid].scaleX;
        this.playnode[nodeid].scaleY = scaley || this.playnode[nodeid].scaleY;
        this.playnode[nodeid].anchorX = anchorx || this.playnode[nodeid].anchorX;
        this.playnode[nodeid].anchorY = anchory || this.playnode[nodeid].anchorY;
        this.saveSpecial(nodeid, specialname, x, y, scalex, scaley, anchorx, anchory);
        this.playnode[nodeid].getComponent(cc.Animation).play(specialname);
    },

    stopSpecial: function (nodeid, specialname, x, y, scalex, scaley, anchorx, anchory) {
        this.playnode[nodeid].getComponent(cc.Animation).stop();
        this.playnode[nodeid].getComponent(cc.Sprite).spriteFrame = null;
        // this.playnode[nodeid].x = x || this.getSpecial(nodeid, 2);
        // this.playnode[nodeid].y = y || this.getSpecial(nodeid, 3);
        // this.playnode[nodeid].scaleX = scalex || this.getSpecial(nodeid, 4);
        // this.playnode[nodeid].scaleY = scaley || this.getSpecial(nodeid, 5);
        // this.playnode[nodeid].anchorX = anchorx || this.getSpecial(nodeid, 6);
        // this.playnode[nodeid].anchorY = anchory || this.getSpecial(nodeid, 7);
        // this.deleSpecial(nodeid);
    },

    saveSpecial: function (nodeid, specialname, x, y, scalex, scaley, anchorx, anchory) {
        this.Special[0] = nodeid;
        this.Special[1] = specialname;
        this.Special[2] = x;
        this.Special[3] = y;
        this.Special[4] = scalex;
        this.Special[5] = scaley;
        this.Special[6] = anchorx;
        this.Special[7] = anchory;
        this.SpecialSave.push(this.Special);
    },

    deleSpecial: function (nodeid) {
        for (var index in this.SpecialSave) {
            if (this.SpecialSave[index][0] == nodeid) {
                this.SpecialSave.splice(index, 1);
            };
        };
    },

    getSpecial: function (nodeid, id) {
        for (var index in this.SpecialSave) {
            if (this.SpecialSave[index][0] == nodeid) {
                return this.SpecialSave[index][id];
            };
        }
    },
});