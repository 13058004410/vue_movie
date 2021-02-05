<template>
    <div id="main">
        <top title="我是电影列表" />       
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movies/city" class="nav_name">
                    <span>城市</span>
                </router-link>
                <router-link tag="div" to="/movies/movieList" class="nav_name">
                    <span>正在热映</span>
                </router-link>
                <router-link tag="div" to="/movies/search" class="nav_name">
                    <img src="../../assets/img/search_1.png" alt="" class="search_btn">
                </router-link>
            </div>
            <keep-alive>
                <router-view/>
            </keep-alive>

        </div>
        <tabbar/>
    </div>
</template>

<script>
import top from '@/components/top';
import tabbar from '@/components/tabbar';
import movieList from '@/components/movieList';
import cityList from '@/components/cityList';
import search from '@/components/search';
import {Navbar,TabItem} from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
export default {    
    name:'movies',
    data(){
        return{
            selected:''
        }
    },
    components:{
        top,
        tabbar,
        movieList,
        cityList,
        search,
        Navbar,
        TabItem,
        TabContainer,
        TabContainerItem
    }
}
</script>

<style scoped>
    #content{width:100%;height:100%}
    #content .movie_menu{width:100%;display:flex;justify-content:space-between;position:relative;background:rgb(255, 255, 255);padding:10px 10px}
    #content .movie_menu .nav_name{max-width:20%}
    #content .movie_menu .nav_name span{font-size:18px;}
    #content .movie_menu .nav_name .search_btn{display:block;width:28%;float:right}
    #content .movie_menu .nav_name.router-link-active{color:red;}
</style>>