// const express=require('express');
const mysql=require('mysql');
const nodemailer=require('nodemailer')
const Email={
    config:{
        host: "smtp.163.com",
        port: 25,
        auth: {
            user: '13058004410@163.com', // generated ethereal user
            pass: 'HJIQDPDPPUVFDLKF', // generated ethereal password
        }
    },
    get transporter(){
        return nodemailer.createTransport(this.config);
    },
    get verify(){
        return Math.random().toString().substring(2,6)
    }
}    

const pool=mysql.createPool({
    user:'root',
    password:'123456',
    host:'127.0.0.1',
    port:'3306',
    database:'shenye',
    connectionLimit:20
});

// pool.get('/huoqu',function(err,result){
//     if(err)throw err
// });

module.exports={
    pool,
    Email
}