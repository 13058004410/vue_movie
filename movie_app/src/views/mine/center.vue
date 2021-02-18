<template>
    <div>
        个人中心:<a href="javascript:;" @click="handleToLogout($event)">退出</a>
    </div>
</template>

<script>

export default {
    name:'center',
    methods:{       
        handleToLogout(e){
            e.preventDefault()
            console.log(5566)
            this.axios.get('/api2/users/logout').then((res)=>{
                var status=res.data.status;
                
                if(status===0){
                    this.$router.push('/mine/login')
                }
            })
        }
    }
}
</script>

<style>

</style>