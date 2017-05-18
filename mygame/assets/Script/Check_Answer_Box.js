cc.Class({
    extends: cc.Component,

    properties: {
        sprite_node:
        {
            default: null,
            type: cc.Node
        },
        complier_button:
        {
            default: null,
            type: cc.Button
        }
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    Show_the_Editbox:function()
    {
        var editbox=this.node.getComponent(cc.EditBox);
        this.node.opacity=255;
    },
    Check_the_Answer: function () {
        var editbox=this.node.getComponent(cc.EditBox);
        var click_Event=this.complier_button.clickEvents;
            click_Event[1].customEventData='0';
        if(editbox.string==='l+=1)'||editbox.string==='l=l+1)'||editbox.string==='l=1+l)')
        {
            click_Event[1].customEventData='1';
            this.sprite_node.destroy;
        }
        this.sprite_node.active=false;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
