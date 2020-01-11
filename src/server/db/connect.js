var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/market',{useUnifiedTopology: true,useNewUrlParser: true});
var db = mongoose.connection;
db.on('error',()=>{
  console.log('数据库连接失败');
});
db.once('open',()=>{
  console.log('数据库连接成功');
});
db.on('disconnected', ()=>{
  console.log('数据库连接断开');
})
// // 创建Schema对象
// let loginSchema = mongoose.Schema({
//   userName:{type:String,require:true},
//   passWord:{type:String,require:true},
//   rootLevel:{type:Number,default:0},
//   token:{type:String},
//   ctime:{type:Date,default:Date.now}
// })
// // 将创建的Schema对象和集合做关联,转化成数据模型
// let model = mongoose.model('admins',loginSchema)
// console.log(model);

// // 使用语句操作数据库
// model.insertMany({userName:"12345",passWord:"12345"})
// .then((data)=>{
// console.log(data);

// })
// .catch((err)=>{
// console.log(err);

// })