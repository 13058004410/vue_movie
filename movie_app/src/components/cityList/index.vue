<template>
    
        <div class="city_body">
            <Loading v-if="isLoading"/>
            <scroller v-else ref="city_List">
                <div>
                    <div class="citi_list" v-for='(value,key,index) in cities' :key='index'>
                        <h2>{{key}}</h2>
                        <ul>
                            <li v-for='(value,key,index) in value' :key='index'>{{value.nm}}</li>
                        </ul>
                    </div>
                </div>
            </scroller> 
        </div>
   
</template>

<script>
export default {
    name:'city',
    data(){
        return{
            cities:[],
            isLoading:true
        }
    },
    mounted(){
        this.axios.get('/static/city.json').then((res)=>{
            // console.log(res)
            var msg=res.data.msg;
            if(msg==='ok'){
                this.isLoading=false;
                var cities=res.data.letterMap;
                console.log(typeof(cities))
                this.cities=cities;
            }
        })

    },
    methods:{
        formatCityList(city){
            
        },
        handleToIndex(index){
            var h2=this.$refs.city_sort.getElementsByTagName('h2')
            this.$refs.city_List.toScrollTop(-h2[index].offsetTop)
        }
    }

}
</script>

<style scoped>
    .city_body{overflow: auto;height:100%}
    .citi_list h2{background:#ccc}
    .citi_list ul{background:rgb(238, 101, 153)}
    .citi_list ul li{line-height:28px}
</style>