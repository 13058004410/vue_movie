<template>
    <div class="search_body" ref="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <img src="../../assets/img/search_2.png" alt="图片无法显示" class="iconfont">
                <input type="text" v-model="message" class="input">
            </div>
        </div>
        <div class="search_result">
            <h3>返回的电影</h3>
            <ul>
                <li v-for="(value,key,index) in moviesList" :key="index">
                    <div class="img">
                        <img :src="value.img|setWH(128.180*5)" alt="图片无法显示">
                    </div>
                    <div class="intro">
                        <h4>{{value.nm}}</h4>
                        <p>主演：{{value.act}}</p>
                        <p>评分：{{value.cat}}</p>
                        <p>上映日期：{{value.rt}}</p>
                    </div>
                    <div class="btn">
                        <span>{{value.sc}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'search',
    data(){
        return{
            message:'',
            moviesList:[]
        }
    },
    methods:{
        cancelRequest(){
            if(typeof this.source==='function'){
                this.source('终止请求')
            }
        }
    },
    watch:{
        message(newVal){
            var that=this
            this.cancelRequest()
            // console.log(newVal)
            this.axios.get('/api/ajax/search?kw='+newVal+'&cityId=1',{
                cancelToken:new this.axios.CancelToken(function(c){
                    that.source=c
                })
            }).then((res)=>{
                var reason=res.data.reason;
                if(reason==='成功的返回'){
                    var movies=res.data.result
                    console.log(movies)
                    this.movies=movies
                    this.$nextTick(()=>{
                        new Bscroll(this.$refs.list,{})
                    })
                    
                }
                // console.log(res.data.movies.list)
                var movies=res.data.movies;
                var list=res.data.movies.list;
                if(movies&&list){                   
                    // for(var i in list){
                    //     console.log(list[i].img.replace(/w\.h/,'128.180'))
                    //     list[i].img.replace(/w\.h/,'128.180')
                    // }
                    this.moviesList=list
                }
            }).catch((err)=>{
                if(this.axios.isCancel(err)){
                    console.log('Request canceled',err.message)
                }else{
                    console.log(err)
                }
            })
        }
    }
}
</script>

<style scoped>

    .search_body{overflow: auto;height:100%}
    .search_body .search_input{position:relative}
    .search_body .search_input .search_input_wrapper{padding:10px 15px;background:#ccc}
    .search_body .search_input .search_input_wrapper .iconfont{width:5%;position:absolute;top:12px;left:25px}
    .search_body .search_input .search_input_wrapper .input{width:100%;line-height:25px;border:none;border-radius:3%;outline:none;padding:0 35px}

    .search_result ul{padding:0 5px}
    .search_result ul li{display:flex;justify-content: space-between;padding:5px 0;border-bottom: 1px solid #ccc;}
    .search_result ul li .img{width:20%}
    .search_result ul li img{width:100%;height:100%;display:block}
    .search_result ul li .intro{width:60%;margin:0 5px}
    .search_result ul li .intro h4{text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
    .search_result ul li .intro p:nth-child(2){text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
    .search_result ul li .btn{width:20%;line-height:117px;text-align: center;}
    .search_result ul li .btn span{width:100%;color:orange}
</style>