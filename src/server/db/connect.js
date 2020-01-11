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