<template>
    <div class='wrapper' ref='wrapper'>
        <slot></slot>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name:'Scroll',
        props:{
            handleToScroll:{
                type:Function,
                default:function(){}

            },
            handleToTouchEnd:{
                type:Function,
                default:function(){}
            }
        },
        updated(){
            
            var scroll=new Bscroll(this.$refs.wrapper,{
                tap:true,
                probeType:1,
                mouseWheel: true,//开启鼠标滚轮
                disableMouse: false,//启用鼠标拖动
                disableTouch: false//启用手指触摸
            });
            this.scroll=scroll;
            scroll.on('scroll',(pos)=>{
                this.handleToScroll(pos)
            })
            scroll.on('touchEnd',(pos)=>{
                this.handleToTouchEnd(pos)
            })

        },
        methods:{
            ToScrollTop(y){
                this.scroll.scrollTo(0,y)
            }
        }
    }
</script>

<style scoped>
    .wrapper{height:100%}
</style>