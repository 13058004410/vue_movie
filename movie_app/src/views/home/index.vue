<template>
    <div id="main">
        <top title="我是首页" />
        <h1>我是首页</h1>
        <tabbar/>
    </div>
</template>

<script>
import top from '@/components/top';
import tabbar from '@/components/tabbar';
export default {    
    name:'home',
    components:{
        top,
        tabbar
    }
}
</script>

<style>
</style>