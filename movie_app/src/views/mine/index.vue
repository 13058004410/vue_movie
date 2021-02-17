<template>
    <div id="main">
        <top title="我的"/>
        <div id="contetn">
            <router-view></router-view>
            <!-- <login/> -->
        </div>
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