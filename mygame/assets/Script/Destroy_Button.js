
cc.Class({
    extends: cc.Component,

    properties: {
        cavas:
        {
            default: null,
            type: cc.Canvas
        }
    },

    // use this for initialization
    destroy_button: function () {
        //cc.log("asd");
        //this.sprite.destroy();
        //this.label.destroy();
        this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(
            function(){
            cc.director.loadScene('enter_Scene');
        })));
        //this.sprite.fadeOut(0.8);
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
