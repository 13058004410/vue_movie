import Vue from 'vue';
import MessageBox from './messageBox';

export var messageBox=(function(){
    
    var MyComponent=Vue.extend(MessageBox);

    return function(opts){  //配置参数
        var defaults={  //默认值
            title:'',
            content:'',
            cancel:'',
            ok:'',
            handleOk:null,
            handleCancel:null           
        };
        
        for(var attr in opts){
            defaults[attr]=opts[attr];
        }
        
        var vm=new MyComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                }
                ,
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        })
        document.body.appendChild(vm.$el)
    }

})()