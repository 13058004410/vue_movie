var {pool, Email}=require('../pool.js')

var login = async(req,res,next)=>{

}
var register = async(req,res,next)=>{
    var {username,password,email,verify}=req.body;
    // console.log(verify)
    if(email!==req.session.email||verify!==req.session.verify){
        res.send({
            msg:'验证码错误',
            status:-1
        })
    }
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
    
}
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
        text: "验证码："+Email.verify, // plain text body
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