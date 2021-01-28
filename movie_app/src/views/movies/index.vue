<template>
    <div id="main">
        <top title="我是电影列表" />
        <div id="content">
			<movieList/>
        </div>
        <tabbar/>
    </div>
</template>

<script>
import top from '@/components/top';
import tabbar from '@/components/tabbar';
import movieList from '@/components/movieList';
export default {    
    name:'movies',
    components:{
        top,
        tabbar,
        movieList
    }
}
</script>

<style>
</style>