<template>
    <div id="main">
        <top title="我是电影列表" />       
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movies/city" class="city_name">
                    <span>城市</span>
                </router-link>
                <router-link tag="div" to="/movies/nowplaying" class="city_name">
                    <span>正在热映</span>
                </router-link>
                <router-link tag="div" to="/movies/comingSoon" class="city_name">
                    <span>即将上映</span>
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
import cityList from '@/components/cityList'
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
        Navbar,
        TabItem,
        TabContainer,
        TabContainerItem
    }
}
</script>

<style scoped>
    #content .movie_menu{width:100%;display:flex;justify-content:space-between;position:fixed;top:10%;background:rgb(255, 255, 255)}
    #content .movie_menu .city_name span{font-size:18px;}
    #content .movie_menu .city_name.router-link-active{color:red;}
</style>>