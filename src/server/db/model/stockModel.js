// 库存的Schema对象
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let stockSchema = new Schema({
  KCode:{type:String,required:true},
  shopCode:{type:String,required:true},
  shopName:{type:String,required:true},
  KNum:{type:String,required:true}
})

let stockModel = mongoose.model('stocks',stockSchema)
module.exports = stockModel