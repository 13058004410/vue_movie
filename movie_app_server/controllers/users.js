var {Email, pool}=require('../pool.js')
// var UserModel=require('../models/users.js')
var login = async(req,res,next)=>{

}
var register = async(req,res,next)=>{
    var {username,password,email,verify}=req.body;
    if(email!==req.session.email||verify!==req.session.verify){
        res.send({
            msg:'验证码错误',
            status:-1
        })
    }
    console.log(email)
    var sql=`insert into user values(null,${username},${password},${email})`
    pool.query(sql,function(err,result){
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:'添加数据成功'})
        }else{
            res.send({
                code:-2,msg:'添加数据失败'
            })
        }
    })
    // var result=await UserModel.save({
    //     username,
    //     password,
    //     email
    // })
    // if(result){
    //     res.send({
    //         msg:'注册成功',
    //         status:0
    //     })
    // }else{
    //     res.send({
    //         msg:'注册失败',
    //         status:-2
    //     })
    // }
}
var verify = async(req,res,next)=>{
    var email=req.query.email;
    // console.log(email)
    // res.send({
    //     msg:'成功',
    //     status:0
    // })
    req.session.verify=verify;
    req.session.email=email;
    var mailOptions={
        from: '深夜影院 13058004410@163.com', // sender address
        to: email, // list of receivers
        subject: "深夜影院", // Subject line
        text: "验证码："+Email.verify, // plain text body
    }   
    var info=await Email.transporter.sendMail(mailOptions)
    console.log(info)
    if(info){
        res.send({
            msg:'验证码发送成功',
            status:0
        })
    }else{
        res.send({
            msg:'验证码发送失败',
            status:-1
        })
    }
}
var logout = async(req,res,next)=>{

}
var getUser = async(req,res,next)=>{

}
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