<<<<<<< HEAD
var {pool, Email}=require('../pool.js')

=======
var {Email, pool}=require('../pool.js')
// var UserModel=require('../models/users.js')
>>>>>>> dev
var login = async(req,res,next)=>{

}
var register = async(req,res,next)=>{
    var {username,password,email,verify}=req.body;
<<<<<<< HEAD
    // console.log(verify)
=======
>>>>>>> dev
    if(email!==req.session.email||verify!==req.session.verify){
        res.send({
            msg:'验证码错误',
            status:-1
        })
    }
<<<<<<< HEAD
    var sql=`insert into users values(null,'${username}','${password}','${email}')`;
    pool.query(sql,function(err,result){
        if(err)throw err;
        if(result.affectedRows>0){
            return res.send({code:1,msg:'注册成功'})
        }else{
            return res.send({code:-1,msg:'注册失败'})
        }
        
    })
    // res.send({
    //     msg:'访问成功'
    // })
    // console.log(req)
    
=======
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
>>>>>>> dev
}
var verify = async(req,res,next)=>{
    // res.send({
    //     msg:'成功',
    //     status:0
    // })
    var email=req.query.email;
<<<<<<< HEAD
    var verify=Email.verify;
    console.log(verify)
    req.session.email=email;
    req.session.verify=verify;
=======
    // console.log(email)
    // res.send({
    //     msg:'成功',
    //     status:0
    // })
    req.session.verify=verify;
    req.session.email=email;
>>>>>>> dev
    var mailOptions={
        from: '深夜影院 13058004410@163.com', // sender address
        to: email, // list of receivers
        subject: "深夜影院邮箱验证码", // Subject line
        text: "验证码："+Email.verify, // plain text body
<<<<<<< HEAD
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
    var info=await Email.transporter.sendMail(mailOptions)
    
=======
    }   
    var info=await Email.transporter.sendMail(mailOptions)
    console.log(info)
>>>>>>> dev
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