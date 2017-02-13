//
//  Spe_MoveJoint.js
//  V1.0
//  CocosCreator V1.3.3
//
//  Created by 李俊杰 on 17/2/10.
//  Copyright © 2017年 李俊杰. All rights reserved.
//  E-mail: lljj2277@qq.com

//  地图滚动控制组件

//  !!  挂载在父节点上
//  !!  将调度器函数放到场景统一的调度器中进行管理
//  !!  从左到右依次放入精灵数组,否则会出现排序错乱的问题

//  **  Spe_MoveJoin_onLoad()   组件初始化函数,放到场景管理器中统一运行
//  **  update_Spe_MoveJoint(dt)    组件调度器,放到场景管理器中统一运行
//  **  MFrame_vessel[i].FTWidth/FTHeight  i:纹理位置  纹理拼接时实际计算的宽/高,可以在该组件初始化后修改
//  **  resetFrame()    自定义刷新器,自定义刷新逻辑

cc.Class({
    extends: cc.Component,

    properties: {
        Sprite: {
            default: [],
            type: [cc.Sprite],
            tooltip: "所有参与滚动的精灵"
        },
        Frame: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "所有的纹理图片,如果是一张图片翻转使用,需要拖进去两张,不能只拖一张"
        },
        FrameWidth: {
            default: [],
            type: [cc.Float],
            tooltip: "所有纹理的显示宽,与纹理顺序对应"
        },
        FrameHeight: {
            default: [],
            type: [cc.Float],
            tooltip: "所有纹理的显示高,与纹理顺序对应"
        },
        FrameFixation: {
            default: [],
            type: [cc.Float],
            tooltip: "所有纹理的不滚动的坐标值(如x轴方向滚动则储存y的值,反之相反),与纹理顺序对应"
        },
        FrameXoverturn: {
            default: [],
            type: [cc.Boolean],
            tooltip: "所有纹理的x轴翻转,与纹理顺序对应.勾了为翻转"
        },
        FrameYoverturn: {
            default: [],
            type: [cc.Boolean],
            tooltip: "所有纹理的y轴翻转,与纹理顺序对应,勾了为翻转"
        },
        MoveSpeed: {
            default: 0,
            tooltip: "滚动速度"
        },
    },

    //组件初始化函数,放到场景管理器中统一运行
    Spe_MoveJoin_onLoad: function () {
        //获取屏幕宽高
        this.ScreenX = this.node.parent.getComponent(cc.Canvas).designResolution.width;
        this.ScreenY = this.node.parent.getComponent(cc.Canvas).designResolution.height;
        //console.log(this.ScreenX + "..."+this.ScreenY);

        //纹理对象构造函数
        //纹理对象,纹理的图型宽,纹理的图形高,固定位置(滚动的另一个坐标,如x轴滚动则为y),x轴是否翻转,y轴是否翻转,
        //计算的宽度,计算的高度(可选,默认为图形宽高)
        function MoveFrame(Frame, FrameID, Width, Height, Fixation, Xoverturn, Yoverturn, TWidth, THeight) {
            this.FFrame = Frame;
            this.FFrameID = FrameID;
            this.FWidth = Width;
            this.FHeight = Height;
            this.FFixation = Fixation;
            this.FXoverturn = Xoverturn;
            this.FYoverturn = Yoverturn;
            this.FTWidth = TWidth || Width;
            this.FTHeight = THeight || Height;
            // console.log("this.FWidth:" + this.FWidth);
            // console.log("this.FHeight:" + this.FHeight);
            // console.log("this.FTWidth:" + this.FTWidth);
            // console.log("this.FHeight:" + this.FHeight);
        };

        //创建纹理对象容器
        this.MFrame_vessel = [];

        //初始化所有纹理对象
        for (var i in this.Frame) {
            this.MFrame_vessel[i] = new MoveFrame(
                this.Frame[i], i, this.FrameWidth[i], this.FrameHeight[i],
                this.FrameFixation[i], this.FrameXoverturn[i], this.FrameYoverturn[i]);
        };

        //滚动精灵对象构造函数
        function MoveSprite(ID, Sprite, MFrame) {
            this.MID = ID;
            this.MSprite = Sprite;
            this.MFrame = MFrame;
            this.MWidth = Sprite.node.width;
            this.MHeight = Sprite.node.height;
            this.reloadFrame = function () {
                this.MSprite.spriteFrame = this.MFrame.FFrame;
                this.MSprite.node.width = this.MFrame.FWidth;
                this.MSprite.node.height = this.MFrame.FHeight;
                this.MSprite.node.y = this.MFrame.FFixation;
                if (!this.MFrame.FXoverturn) {
                    this.MSprite.node.scaleX = 1
                } else { this.MSprite.node.scaleX = -1 };
                if (!this.MFrame.FYoverturn) {
                    this.MSprite.node.scaleY = 1
                } else { this.MSprite.node.scaleY = -1 };
                //this.MSprite_vessel[SpriteSeat].MSprite.node.scaleX *= !this.MFrame_vessel[FrameSeat].FXoverturn;
                //this.MSprite_vessel[SpriteSeat].MSprite.node.scaleY *= !sthis.MFrame_vessel[FrameSeat].FYoverturn;
                this.MWidth = this.MFrame.FTWidth;
                this.MHeight = this.MFrame.FTHeight;
            };
            //console.log(this.MWidth);
        };

        //创建滚动精灵容器
        this.MSprite_vessel = [];

        //初始化所有容器对象
        for (var i in this.Sprite) {
            this.MSprite_vessel[i] = new MoveSprite(i, this.Sprite[i], this.MFrame_vessel[0]);
            this.MSprite_vessel[i].reloadFrame();
            this.BiggestID = i;
        };

        //初始化排列
        for (var i in this.Sprite) {
            if (i == 0) {
                this.Sprite[i].node.x = -this.ScreenX / 2 + this.Sprite[i].node.width / 2;
            } else {
                this.Sprite[i].node.x = this.Sprite[i - 1].node.x + this.Sprite[i - 1].node.width / 2 + this.Sprite[i].node.width / 2;
            };
        };
        // console.log(this.FrameXoverturn);
        // console.log(this.FrameYoverturn);
    },

    //该组件调度器
    update_Spe_MoveJoint: function (dt) {
        for (var i in this.MSprite_vessel) {
            var Nextx = this.MSprite_vessel[i].MSprite.node.x - this.MoveSpeed * dt;
            var Swidth = this.MSprite_vessel[i].MWidth;
            // var Swidth = this.MSprite_vessel[i].MSprite.node.width;
            // var Sheight = this.MSprite_vessel[i].MSprite.node.height;
            // var SX = this.MSprite_vessel[i].MSprite.node.x;
            // var SY = this.MSprite_vessel[i].MSprite.node.y;
            if (Nextx > -Swidth / 2 - this.ScreenX / 2) {
                this.MSprite_vessel[i].MSprite.node.x = Nextx;
            } else {
                //获取最后一个精灵序号
                var Last = this.getLast();
                // console.log(Last);
                //随机刷新纹理
                //console.log(i);
                this.resetFrame(i, dt, Last);
                // console.log(this.MSprite_vessel[i].MSprite.node.x);
                // console.log(this.MSprite_vessel[i].MSprite.node.y);
                // console.log(this.MSprite_vessel[i].MSprite.node.x);
                // console.log(this.MSprite_vessel[i].MSprite.node.y);
                // console.log("-----------------------");       
                // Nextx = this.MSprite_vessel[Last].MSprite.node.x + this.MSprite_vessel[Last].MSprite.node.width / 2 + Swidth / 2;
                // if (i == 0) { Nextx -= this.MoveSpeed * dt; };
                // this.MSprite_vessel[i].MSprite.node.x = Nextx;
                // console.log("LastNodeX:"+this.MSprite_vessel[Last].MSprite.node.x);
                // console.log("LastNodeWidth:"+this.MSprite_vessel[Last].MSprite.node.width / 2);
                // console.log("Swidth:"+ Swidth/2);
                // console.log("End:"+ Nextx);
                //重新排序
                this.resort();
            };
        };
    },

    //重新排序
    resort: function () {
        for (var y in this.MSprite_vessel) {
            this.MSprite_vessel[y].MID--;
        };
        for (var y in this.MSprite_vessel) {
            if (this.MSprite_vessel[y].MID == -1) {
                this.MSprite_vessel[y].MID = this.BiggestID;
            };
        };
    },

    //计算刷新位置并刷新,容器内第一张图因执行顺序问题需要补一帧
    //精灵位置,dt,尾精灵位置
    resetspriteposition: function (SpriteSeat, dt, LastSeat) {
        //var Nextx = this.MSprite_vessel[Last].MSprite.node.x + this.MSprite_vessel[Last].MSprite.node.width / 2 + Swidth / 2;
        var Nextx = this.MSprite_vessel[LastSeat].MSprite.node.x + this.MSprite_vessel[LastSeat].MWidth / 2 + this.MSprite_vessel[SpriteSeat].MWidth / 2;
        if (SpriteSeat == 0) { Nextx -= this.MoveSpeed * dt; };
        this.MSprite_vessel[SpriteSeat].MSprite.node.x = Nextx;
        // console.log("LastNodeX:"+this.MSprite_vessel[Last].MSprite.node.x);
        // console.log("LastNodeWidth:"+this.MSprite_vessel[Last].MWidth / 2);
        // console.log("Swidth:"+ this.MSprite_vessel[i].MWidth / 2);
        // console.log("End:"+ Nextx);
    },

    //根据纹理设置精灵
    //精灵位置,纹理位置
    setSpritebyFrame: function (SpriteSeat, FrameSeat) {
        this.MSprite_vessel[SpriteSeat].MFrame = this.MFrame_vessel[FrameSeat];
        this.MSprite_vessel[SpriteSeat].reloadFrame();
        // var S = this.MSprite_vessel[SpriteSeat];
        // var F = this.MFrame_vessel[FrameSeat];
        //console.log(this.MSprite_vessel[SpriteSeat].MSprite);
        //console.log(this.MFrame_vessel[FrameSeat].FFrame);
    },

    //获取尾精灵位置
    getLast: function () {
        for (var i in this.MSprite_vessel) {
            // console.log(y);
            // console.log(this.MSprite_vessel[y].MID);
            // console.log(this.BiggestID);
            if (this.MSprite_vessel[i].MID == this.BiggestID) {
                return i;
                //console.log(Last);
            };
        };
    },

    //自定义刷新器
    //精灵位置,尾精灵位置
    resetFrame: function (SpriteSeat, dt, Last) {
        var Last_Frame_ID = this.MSprite_vessel[Last].MFrame.FFrameID;
        var n;
        //console.log(Last_Frame_ID)
        switch (Last_Frame_ID) {
            case "0":
                //console.log("Last_Frame_ID:" + Last_Frame_ID)
                var m = parseInt(cc.random0To1() * 2);
                if (m < 1) { n = 0 } else { n = 2 };
                break;
            case "1":
                var m = parseInt(cc.random0To1() * 6);
                if (m < 3) { n = 1 } else if (m == 5) { n = 4 } else { n = 3 };
                break;
            case "2":
                n = 1;
                break;
            case "3":
                n = 0;
                break;
            case "4":
                n = 1;
                break;
            default:
                //n = 0;
                break;
        }
        //var n = parseInt(cc.random0To1() * this.Frame.length);
        //console.log("n:"+n);
        this.setSpritebyFrame(SpriteSeat, n);
        //重设精灵位置
        this.resetspriteposition(SpriteSeat, dt, Last);
        //
        if (n == 4) { this.getComponent("Spe_MoveJoint_add").addSpecial(this.MSprite_vessel[SpriteSeat]) };
    },

});
