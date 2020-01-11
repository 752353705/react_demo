const mongoose = require('mongoose')
let RegSchema = mongoose.Schema({
  userName:{type:String,require:true},
  passWord:{type:String,require:true},
  code:{type:String,require:true}
}) 
let RegModel = mongoose.model('regs',RegSchema)
module.exports = RegModel