<template>
    <div class="list" ref="list">
        <ul>
            <li v-for='item in movies' :key='item.id'>
                <div class="img">
                    <img :src="item.poster|setWH(128*180)" alt="">
                </div>
                <div class="intro">
                    <h4>{{item.title}}</h4>
                    <p>主演：{{item.actors}}</p>
                    <p>评分：{{item.rating}}</p>
                    <p>上映日期：{{item.release_date}}</p>
                </div>
                <div class="btn">
                    <button>观看</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name:'movieList',
        data(){
            return {
                movies:[]
            }
        },
        mounted(){
            this.axios.get('/static/dianying.json').then((res)=>{
                var reason=res.data.reason;
                if(reason==='成功的返回'){
                    var movies=res.data.result
                    console.log(movies)
                    this.movies=movies
                    this.$nextTick(()=>{
                        new Bscroll(this.$refs.list,{})
                    })
                    
                }
                
            })
            
        },
        methods:{
            // formatMovieList(movies){
            //     var _movieList=[]
            // }
        }
    }
</script>

<style scoped>
    .list{overflow:auto;width:100%;height:100%}
    .list ul{padding:0 5px}
    .list ul li{display:flex;justify-content: space-between;padding:5px 0;border-bottom: 1px solid #ccc;}
    .list ul li .img{width:20%}
    .list ul li img{width:100%;display:block;height:100%}
    .list ul li .intro{width:60%;margin:0 5px}
    .list ul li .intro h4{text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
    .list ul li .intro p:nth-child(2){text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
    .list ul li .btn{width:20%;line-height:117px}
    .list ul li .btn button{width:100%}
</style>