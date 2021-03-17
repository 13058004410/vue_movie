<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:'top', 
    props:{                 //我是子组件
        title:{
            type:String,
            default:'头部'
        }
    }
}
</script>

<style>
    #header{width:100%;height:80px;background:red;text-align: center;line-height: 80px;position:fixed;top:0;z-index: 1;}
</style>