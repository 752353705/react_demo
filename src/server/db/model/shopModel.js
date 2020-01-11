// 商品接口

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let shopsSchema = new Schema({
  shopNum:{type:String,required:true},
  shopName:{type:String,required:true},
  shopPrice:{type:String,required:true},
  Count:{type:String,required:true},
  CountPrice:{type:String,required:true},
})

let shopsModel = mongoose.model('shops',shopsSchema)
module.exports = shopsModel