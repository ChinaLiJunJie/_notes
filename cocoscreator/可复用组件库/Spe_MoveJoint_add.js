//
//  Spe_MoveJoint_add.js
//  V1.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/2/13.
//  Copyright © 2017年 李俊杰. All rights reserved.
//  E-mail: lljj2277@qq.com

//  未做低耦合处理,只适用于零速争霸
//  MoveJoint的定制补充组件

//  !!  挂载在MoveJoint的同一节点下
//  !!  初始化方法要放在MoveJoint的初始化方法后调用

cc.Class({
    extends: cc.Component,

    properties: {
        Spec_Sprite: [cc.Sprite],
    },

    // use this for initialization
    Spe_MoveJoint_add_onLoad: function () {

        this.getComponent("Spe_MoveJoint").MFrame_vessel[4].FTWidth = 450;

        function SpecialSprite(Sprite, Used) {
            this.Sprite = Sprite;
            this.Used = false;
        };
        this.SpecialSprite_vessel = [];
        for(var i in this.Spec_Sprite){
            this.SpecialSprite_vessel[i] = new SpecialSprite(this.Spec_Sprite[i]);
        };
    },

    Spe_MoveJoint_add_update: function (dt) {
        for (var i in this.SpecialSprite_vessel) {
            //console.log(i + this.SpecialSprite_vessel[i].Used)
            if (this.SpecialSprite_vessel[i].Used) {
                var Nextx = this.SpecialSprite_vessel[i].Sprite.node.x - this.getComponent("Spe_MoveJoint").MoveSpeed * dt;
                //console.log(Nextx);
                if (Nextx > -this.SpecialSprite_vessel[i].Sprite.node.width / 2 - this.getComponent("Spe_MoveJoint").ScreenX / 2) {
                    this.SpecialSprite_vessel[i].Sprite.node.x = Nextx;
                } else {
                    this.SpecialSprite_vessel[i].Sprite.node.x = this.getComponent("Spe_MoveJoint").ScreenX / 2 + this.SpecialSprite_vessel[i].Sprite.node.width / 2;
                    this.SpecialSprite_vessel[i].Used = false;
                };
            };
            //console.log(this.SpecialSprite_vessel[i].Used);
        };
    },

    getSpecial:function(){
        for(var i in this.SpecialSprite_vessel){
            if(!this.SpecialSprite_vessel[i].Used){
                return i;
            }else{
                console.log("Warning!!!Spe_MoveJoint_add->getSpecial()->can't find Special_Sprite which haven't used")
            };
        }
    },

    addSpecial:function(MoveSprite){
        var i = this.getSpecial();
        this.SpecialSprite_vessel[i].Sprite.node.x = MoveSprite.MSprite.node.x +10;
        this.SpecialSprite_vessel[i].Sprite.node.y = MoveSprite.MSprite.node.y;
        this.SpecialSprite_vessel[i].Used = true;
    },
});
