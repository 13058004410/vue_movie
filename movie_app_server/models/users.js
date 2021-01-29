var mysql=require('mysql')
const { pool } = require('../pool')





// var USerschema=new mysql.Schema({
//     username:{type:String,required:true,index:{unique:true}},
//     password:{type:String,required:true},
//     email:{type:String,required:true,index:{unique:true}},
//     date:{type:Date,default:Date.now()}
// })

// var userModel=mysql.model('user',UserSchema)
// userModel.createIndexs()

// var save=(data)=>{
//     var user=new userModel(data)
//     return user.save()
//             .then(()=>{
//                 return true;
//             })
//             .catch(()=>{
//                 return false;
//             })
// }

// module.exports={
//     save
// }

