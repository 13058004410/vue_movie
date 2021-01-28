<template>
    <div id="main">
        <top title="我是个人中心"/>
        <login/>
        <tabbar/>
    </div>
</template>

<script>
import top from '@/components/top';
import tabbar from '@/components/tabbar';
import login from '@/components/login';
export default {    
    name:'mine',
    components:{
        top,
        tabbar,
        login
    }
}
</script>

<style>
</style>