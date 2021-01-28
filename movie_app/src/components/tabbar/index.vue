<template>
    <footer id="footer">
        <router-link tag="div" to="/home">
            <img src="../../assets/img/home.png" alt="">
            <span>首页</span>
        </router-link>
        <router-link tag="div" to="/movies">
            <img src="../../assets/img/movies.png" alt="">
            <span>电影</span>
        </router-link>
        <router-link tag="div" to="/mine">
            <img src="../../assets/img/mine.png" alt="">
            <span>我的</span>
        </router-link>
    </footer>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style>
    #footer{display:flex;justify-content:space-around;height:80px;background:rgb(240, 170, 170);position:fixed;bottom:0;right:0;left:0;text-align:center;}
    #footer div{width:12%;height:100%;}
    #footer div.router-link-active{background:red;color:blue}
    #footer div img{display:block;width:100%;}
    #footer div span{text-align: center;vertical-align: bottom;;width:100%}
</style>