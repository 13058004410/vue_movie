var {Email, pool}=require('../pool.js')
// var UserModel=require('../models/users.js')
var login = async(req,res,next)=>{
    // var username=req.body.username
    // res.send({
    //     msg:'成功',
    //     status:0,
    //     username
    // })
    var {username,password}=req.body;
    console.log(username,password)
    var sql=`select*from users where username=? and password=?`;
    pool.query(sql,[username,password],function(err,result){
        if(err)throw err;
        console.log(result)
        if(result.length!=0){
            req.session.username=username;
            req.session.password=password;
            res.send({
                msg:'登陆成功',
                status:0
            })
            console.log('登陆成功')
        }else{
            res.send({
                msg:'登陆失败',
                status:-1
            })
            console.log('登陆失败')
        }
    })
}

//注册接口
var register = async(req,res,next)=>{
    var {username,password,email,verify}=req.body;
    if(email!==req.session.email||verify!==req.session.verify){
        res.send({
            msg:'验证码错误',
            status:-1
        })
    }
    // console.log(email)
    var sql=`insert into users values(null,'${username}','${password}','${email}')`
    pool.query(sql,function(err,result){
        if(err)throw err;
        
        if(result.affectedRows>0){
            res.send({code:1,msg:'添加数据成功'})
            console.log('添加数据成功')
        }else{
            res.send({
                code:-2,msg:'添加数据失败'
            })
            console.log('添加数据成功失败')
        }
    })
}

//验证码接口
var verify = async(req,res,next)=>{
    // res.send({
    //     msg:'成功',
    //     status:0
    // })
    var email=req.query.email;
    var verify=Email.verify;
    console.log(verify)
    req.session.email=email;
    req.session.verify=verify;
    var mailOptions={
        from: '深夜影院 13058004410@163.com', // sender address
        to: email, // list of receivers
        subject: "深夜影院邮箱验证码", // Subject line
        text: "验证码："+verify, // plain text body
    }
    Email.transporter.sendMail(mailOptions,(err)=>{
        if(err){
            res.send({
                msg:'验证码发送失败',
                status:-1
            })
        }else{
            res.send({
                msg:'验证码发送成功',
                status:0
            })
        }
    })

}

//退出登录接口
var logout = async(req,res,next)=>{
    req.session.username='';
    res.send({
        msg:'退出成功',
        status:0
    })
}

//登录态接口
var getUser = async(req,res,next)=>{
    if(req.session.username){
        res.send({
            mgs:'获取用户信息成功',
            status:0,
            data:{
                username:req.session.username
            }
        })
    }else{
        res.send({
            mgs:'获取用户信息失败',
            status:-1
        })
    }
}

//找回密码接口
var findPassword = async(req,res,next)=>{

}

module.exports={
    login,
    register,
    verify,
    logout,
    getUser,
    findPassword
}