<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:'top', 
    props:{
        title:{
            type:String,
            default:'头部'
        }
    }
}
</script>

<style>
    #header{height:80px;background:red;text-align: center;line-height: 80px;}
</style>