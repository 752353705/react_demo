const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let typeSchema = new Schema({
  Num:{type:String,required:true},
  name:{type:String,required:true}
})

let typeModel = mongoose.model('types',typeSchema)
module.exports = typeModel