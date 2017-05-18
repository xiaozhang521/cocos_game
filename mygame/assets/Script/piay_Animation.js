cc.Class({
    extends: cc.Component,

    properties: {
        drag_Sprite_Node:{
            default: null,
            type: cc.Node
        },
        talk_Meaasge:
        {
            default: null,
            type: cc.Label
        },
        button1_Node:
        {
            default: null,
            type: cc.Node
        },
        button2_Node:
        {
            default: null,
            type: cc.Node
        },
        talk_speed: 0.01,
        click_Times:    0
    },

    // use this for initialization
    onLoad: function () {
        var anim = this.getComponent(cc.Animation);
        var animState=anim.playAdditive('opendoor');
        animState.speed=0.8;
        var sprite_node=this.node.getChildByName('talk_Message_Sprite');
        var modify_Code=this.node.getChildByName('modify_Code');
        var drag_Sprite_Node=this.node.getChildByName('drag_Sprite');
        modify_Code.active=false;
        sprite_node.active=false;
        drag_Sprite_Node.active=false;
        this.button1_Node.active=false;
        this.button2_Node.active=false;

        this.talk_Meaasge.node.color=new cc.color(0,0,0,255);
    },
    onAnimCompleted: function () {
       this.node.opacity=255;
        var anim = this.getComponent(cc.Animation);
       anim.playAdditive('walk_to_talk');
    },
    startTalk: function(){
        var sprite_node=this.node.getChildByName('talk_Message_Sprite');
        //var tmp_label=label_Node.getComponent(cc.Label);
        this.talk_Meaasge.string = '室友:\n';
        var text='阿博，我们去接学妹好不好啊?';
        var cot=0;
        var schedule_Show_Message=function()
        {
            if(cot&&cot%16===0) {this.talk_Meaasge.string+='\n';}
            this.talk_Meaasge.string+=text[cot];
            cot++;
            if(cot>=text.length) 
            {
                this.unschedule(schedule_Show_Message);
                this.node.once('mousedown', this.next_dialog_1,this);
            }
        };
        this.schedule(schedule_Show_Message,this.talk_speed);
        sprite_node.active=true;
    },
    next_dialog_1:function()
    {
        this.talk_Meaasge.string='阿博:\n';
        var cot=0;
        var text='不了,我还要码代码呢,这儿还有个BUG,我改不出来';
        var schedule_Show_Message=function()
        {
            if(cot&&cot%16===0) {this.talk_Meaasge.string+='\n';}
            this.talk_Meaasge.string+=text[cot];
            cot++;
            if(cot>=text.length) 
            {
                this.unschedule(schedule_Show_Message);
                this.node.once('mousedown', this.next_dialog_2,this);
            }
        };
        this.schedule(schedule_Show_Message,this.talk_speed);
    },
    next_dialog_2:function()
    {
        this.talk_Meaasge.string='室友:\n';
        var cot=0;
        var text='什么BUG啊,让我来帮你找找';
        var schedule_Show_Message=function()
        {
            if(cot&&cot%16===0) {this.talk_Meaasge.string+='\n';}
            this.talk_Meaasge.string+=text[cot];
            cot++;
            if(cot>=text.length) 
            {
                this.unschedule(schedule_Show_Message);
                this.node.once('mousedown', this.Modify_Code_Fun,this);
            }
        };
        this.schedule(schedule_Show_Message,this.talk_speed);
    },
    Modify_Code_Fun:function()
    {
        var sprite_Node=this.node.getChildByName('talk_Message_Sprite');
        var modify_Code=this.node.getChildByName('modify_Code');
        var self = this;
        cc.loader.loadRes("3.3", cc.SpriteFrame, function (err, spriteFrame) {
        self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        modify_Code.active = true;
        //sprite_Node.active = false;
    },
    Respon_the_answer:function(event, customEventData)
    {
        this.talk_Meaasge.string='阿博:\n';
        var cot=0;
        var text;
        var tmp=customEventData;
        if(tmp==='1')
        text='你真棒，原来是l和1弄错了';
        else
        text='这好像不对吧,你再帮我改改';
        var schedule_Show_Message=function()
        {
            //if(cot&&cot%16===0) {this.talk_Meaasge.string+='\n';}
            this.talk_Meaasge.string+=text[cot];
            cot++;
            if(cot>=text.length) 
            {
                this.unschedule(schedule_Show_Message);
                if(tmp==='0')
                this.node.once('mousedown', this.Modify_Code_Fun,this);
                else
                this.node.once('mousedown', this.next_dialog_3,this);
            }
        };
        this.schedule(schedule_Show_Message,this.talk_speed); 
    },
    next_dialog_3:function()
    {
        this.button1_Node.active=false;
        this.button2_Node.active=false;
        
        this.talk_Meaasge.string='室友:\n';
        var cot=0;
        var text;
        if(this.click_Times===0)
        text='现在改好了，可以出门了吧';
        else if(this.click_Times%2===1)text='别码了，快跟我出去吧';
        else text='小伙子你这样会单身一辈子的';
        var schedule_Show_Message=function()
        {
            if(cot&&cot%16===0) {this.talk_Meaasge.string+='\n';}
            this.talk_Meaasge.string+=text[cot];
            cot++;
            if(cot>=text.length) 
            {
                this.unschedule(schedule_Show_Message);
                this.node.once('mousedown', this.next_dialog_4,this);
            }
        };
        this.schedule(schedule_Show_Message,this.talk_speed);
    },
    next_dialog_4:function()
    {
        this.talk_Meaasge.string='阿博:\n';
        var cot=0;
        var text;
        if(this.click_Times===0)
        text='不行,我还要码代码';
        else if(this.click_Times%2===1) text='没有什么比码代码重要';
        else text='我才不要女朋友呢';
        var schedule_Show_Message=function()
        {
            if(cot&&cot%16===0) {this.talk_Meaasge.string+='\n';}
            this.talk_Meaasge.string+=text[cot];
            cot++;
            if(cot>=text.length) 
            {
                this.click_Times++;
                this.unschedule(schedule_Show_Message);
                this.node.once('mousedown', this.next_dialog_5,this);
            }
        };
        /*var self = this;
        cc.loader.loadRes("3.3", cc.SpriteFrame, function (err, spriteFrame) {
        self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });*/
        this.schedule(schedule_Show_Message,this.talk_speed);
    },
    label_Move:function(event)
    {
            this.drag_Sprite_Node.y+=event.getDeltaY();
            this.drag_Sprite_Node.x+=event.getDeltaX();
    },
    next_dialog_5:function()
    {
        this.talk_Meaasge.string='作为室友你将如何选择?';
        var sprite_Node=this.node.getChildByName('talk_Message_Sprite');
        var anim = this.getComponent(cc.Animation);
        /*var button1_Node =new cc.Node('button1_Node');
        var button1=button1_Node.addComponent(cc.Button);
        var button1_Sprite=button1_Node.addComponent(cc.Sprite);
        button1_Node.width=10;
        button1_Node.height=10;
        cc.loader.loadRes("2", cc.SpriteFrame, function (err, spriteFrame) {
        button1_Sprite.spriteFrame = spriteFrame;
        });
        
        var button1_Label_Node=new cc.Node('button1_label_Node');
        button1_Label_Node.color=new cc.Color(0,0,0);
        var button1_Label=button1_Label_Node.addComponent(cc.Label);
        button1_Label.string='OK';
        
        button1_Node.addChild(button1_Label_Node);
        sprite_Node.addChild(button1_Node);
        //var button2 = this.node.addComponent(cc.Button);*/
        this.button1_Node.active=true;
        this.button2_Node.active=true;
        var label1_Node=this.button1_Node.getChildByName('Label');
        label1_Node.getComponent(cc.Label).string='继续劝说';
        var label2_Node=this.button2_Node.getChildByName('Label');
        label2_Node.getComponent(cc.Label).string='放弃';
        this.drag_Sprite_Node.active=true;
        var controller_Node=this.drag_Sprite_Node;
        var self=this;
        var before_Y=controller_Node.y;
        self.drag_Sprite_Node.on('mousedown',function(){
            cc.log('down');
            self.drag_Sprite_Node.on('mousemove',self.label_Move,self);
        });
        self.drag_Sprite_Node.on('mouseup',function(){
            cc.log('up');
            self.drag_Sprite_Node.off('mousemove',self.label_Move,self);
            if(before_Y-self.drag_Sprite_Node.y>=10)
            {
                sprite_Node.destroy();
                var animState=anim.playAdditive('drag_Out');
            }
        });
    },
    end_Scene:function()
    {
        this.node.opacity=0;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    
    // },
});
