cc.Class({
    extends: cc.Component,

    properties: {
        label:{
            default: null,
            type: cc.Label
        },
        next_button:{
            default:null,
            type: cc.Button
        }
        // defaults, set visually when attaching this script to the Canvas
    },

    // use this for initialization
    onLoad: function () {
        this.label.string='';
        var cot=0;
        var text= '我是阿博，我喜欢阴阳师,大学专业是计算机，典型的理工男，本来一切都很平常，直到她的出现...';
        var show_Message=function(){
            // 这里的 this 指向 component
            if(cot%10===0) {this.label.string += '\n';}
            this.label.string += text[cot];
            cot++;
            if(cot>=text.length) this.unschedule(show_Message);
        }
        this.schedule(show_Message, 0.2);
    },

    // called every frame
    update: function (dt) {

    },
});
