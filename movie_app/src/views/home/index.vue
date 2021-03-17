<template>
    <div id="main">
        <!-- 父组件的数据：我是首页          -->
        <top title="我是首页" />
        <h1>我是首页</h1>
        <tabbar/>
    </div>
</template>

<script>
import top from '@/components/top';
import tabbar from '@/components/tabbar';
export default {    
    name:'home',   //我是父组件
    components:{
        top,   //这个是子组件
        tabbar
    }
}
</script>

<style>
</style>