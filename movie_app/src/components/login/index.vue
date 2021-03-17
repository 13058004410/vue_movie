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
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/findPassword">找回密码</router-link>
        </p>
    </div>
</template>

<script>

import {messageBox} from '@/components/js'   //如果那个文件里边的内容是用export导出的，在别的文件引入它的时候就要用到花括号
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
                var This=this;                                //这个This指向那个js/index.js文件里边的vm对象
                if(status==0){
                    
                    messageBox({
                        title:'登录',
                        content:'登录成功',
                        ok:'确定',
                        handleOk(){
                            console.log(1315)
                            This.$router.push('/mine/center')   //这个This指向那个js/index.js文件里边的vm对象
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

<style scoped>
    .login p{text-align: center;}
    .login p:nth-child(4){display:flex;justify-content: space-between;font-size:18px}
    .login p input{line-height:60px;width:100%;text-align: center;font-size:35px}
</style>