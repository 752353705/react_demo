
// 商品接口  用于 折扣活动
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var date = new Date()

var ctime = '' + date.getFullYear()+(date.getMonth()+1)+date.getDate()
console.log(ctime)
let shopsSchema = new Schema({
  shopNum:{type:String,required:true},
  shopName:{type:String,required:true},
  shopPrice:{type:String,required:true},
  Count:{type:String,required:true},
  CountPrice:{type:String,required:true},
  ctime:{type: Number,default:Number(ctime) }
  // ctime:{type: Date,default:new Date().getTime()}
})

let shopsModel = mongoose.model('shops',shopsSchema)
module.exports = shopsModel