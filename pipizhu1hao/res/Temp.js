




var HelloWorldScene = cc.Scene.extend({
    count:0,
    scheduleId:0,
    onEnter: function () {
        this._super();

        var sp = new cc.Sprite('res/title_7.png')
        this.addChild(sp)

        var actionA = cc.moveBy(1,cc.p(100,100))
        var actionB = cc.rotateBy(1,180)
        var seq = cc.sequence(actionA,actionB,cc.callFunc(test),actionA,actionB)
        var span = cc.spawn(actionA,actionB,cc.callFunc(test))

        //sp.runAction(cc.repeatForever(span))
        sp.runAction(cc.repeat(span, 3))

        function test(){
            console.log(9987)
        }
       /* sp.runAction(actionA)
        sp.runAction(actionB)*/

        /*sp.setPosition(300,300)
        sp.runAction(cc.tintTo(2,255,0,0))
        setTimeout(function(){
            sp.runAction(cc.tintTo(2,255,255,255))
        },2200)*/
        /*sp.setPosition(300,300)
        sp.opacity = 0
        sp.runAction(cc.fadeIn(1))*/
        /*sp.runAction(cc.fadeOut(1))
        setTimeout(function(){
            sp.runAction(cc.fadeIn(1))
        },1100)*/


        /*sp.runAction(cc.moveTo(2,cc.p(500,500)))
        setTimeout(function(){
            sp.runAction(cc.moveBy(2,cc.p(0,-500)))
        },2100)*/

        /*sp.setPosition(300,300)
        sp.runAction(cc.rotateTo(1,90))
        setTimeout(function(){
            sp.runAction(cc.rotateBy(1,-90))
        },1100)*/

        /*sp.setPosition(300,300)
        console.log(sp.width)
        sp.runAction(cc.scaleTo(1,9))
        setTimeout(function(){
            //sp.runAction(cc.scaleBy(1,1/9))
            sp.runAction(cc.scaleTo(1,1))
            //sp.runAction(cc.scaleBy(1,))
        },1100)
        setTimeout(function(){
            console.log(sp.width)
        },2200)*/
        //this.scheduleUpdate()
        /*this.scheduleOnce(function(){
            console.log(123,this)
        },1)*/
       /* setTimeout(function(){
            console.log(123,this)
        },100)
        console.log(this)*/
        //this.schedule(this.scheduleHandle,0.4,5,0.000001)

       /* this.schedule(function(){
            console.log(123)
        },0.4,5,0.000001)*/
    },
    scheduleHandle:function(){
        //console.log(this.count++)
        //if(this.count == 3){
            //this.unschedule(this.scheduleHandle)
            /*this.unschedule(function(){
                console.log(123)
            })*/
            //this.unscheduleAllCallbacks()
        //}
    },
    update:function(){
        console.log(this.count++)
        if(this.count >= 30){
            //this.unscheduleUpdate()
            this.unscheduleAllCallbacks()
        }
    },
})