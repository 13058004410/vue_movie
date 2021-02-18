<template>
    <div class="register_body">
        <div  class="register_email">
            邮箱：<input type="text"  class="register_text" v-model="email"> <button @click="handleToVerify">发送验证码</button>
        </div>
        <div>
            用户名：<input type="user" class="register_text" v-model="username">
        </div>
        <div>
            密码：<input type="password" class="register_text" v-model="password">
        </div>
        <div>
            确认密码：<input type="password" class="register_text">
        </div>
        <div>
            验证码：<input type="text" class="register_text" v-model="verify">
        </div>
        <div class="register_btn">
            <button @click="handleToRegister">注册</button>
        </div>
        <div class="register_link">
            <router-link to="/mime/login">立即登录</router-link>
            <router-link to="/mime/findpassword">找回密码</router-link>
        </div>
    </div>
</template>

<script>
import {messageBox} from '@/components/js'
export default {
    data(){
        return{
            email:'',
            username:'',
            password:'',
            verify:''
        }
    },
    methods:{
        handleToVerify(){
            this.axios.get('/api2/users/verify?email='+this.email).then((res)=>{
                var status=res.data.status;
                // console.log(res.data)
                if(status===0){
                    messageBox({
                        title:'验证码',
                        content:'验证码已发送',
                        ok:'确定'
                    })
                }else{
                    messageBox({
                        title:'验证码',
                        content:'验证码发送失败',
                        ok:'确定'
                    })
                }
            })
        },
        handleToRegister(){
            this.axios.post('/api2/users/register',{
                email:this.email,
                username:this.username,
                password:this.password,
                verify:this.verify
            }).then((res)=>{
                var This=this;
                var code=res.data.code;
                console.log(code)
                if(code===1){
                    messageBox({
                        title:'注册',
                        content:'注册成功',
                        ok:'确定',
                        handleOk(){
                            This.$router.push('/mine/login')
                        }
                    })
                }else{
                    messageBox({
                        title:'注册',
                        content:'注册失败',
                        ok:'确定'
                    })
                }
            })
        }
    }
}
</script>

<style scoped>

</style>