<template>
    <div class="login">
        <p>
            <input v-model="username" type="text" placeholder="请输入帐号">
        </p>
        <p>
            <input v-model="password" type="text" placeholder="请输入密码">
        </p>
        <p>
            <input @touchstart="handleToLogin" type="submit" value="登陆">
        </p>
        <p>
            <a href="">立即注册</a>
            <a href="">找回密码</a>
        </p>
    </div>
</template>

<script>
import messageBox from '@/components/js/messageBox'
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        handleToLogin(){
            this.axios.post('/api2/users/login',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                console.log(res)
                var status=res.data.status;
                var This=this;
                if(status===0){
                    messageBox({
                        title:'登录',
                        content:'登录成功',
                        ok:'确定',
                        handleOk(){
                            This.$router.push('/mine/center')
                        }

                    })
                }else{
                    messageBox({
                        title:'登录',
                        content:'登录失败',
                        ok:'确定'
                    })
                }
            })
        }
    }
}
</script>

<style>
.login p{text-align: center;}
.login p:nth-child(4){display:flex;justify-content: space-between;font-size:18px}
.login p input{line-height:60px;width:100%;text-align: center;font-size:35px}
</style>