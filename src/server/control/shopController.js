// 存放和商品 数据操作的相关信息 数据库的操作
const ShopModel = require('../db/model/shopModel')
// 添加
async function add(shopNum,shopName,shopPrice,Count,CountPrice){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的时候catch
  let result = await ShopModel.insertMany({shopNum,shopName,shopPrice,Count,CountPrice})
  console.log(result)
}
// 查询数据
  // 分页查询
async function get(page,pageSize){
  let allShops = await ShopModel.find()
  // 获取商品数据 总数量
  let allCount = allShops.length
  let shops = await ShopModel.find().skip((page-1)*pageSize).limit(pageSize)
  return {shops,allCount}
}
  // 条件查询 按照添加时间进行盘点
async function getByCtime(startTime,endTime,page,pageSize){
  let allShops = await ShopModel.find({ctime:{$gt:startTime,$lt:endTime}})
  let allCount = allShops.length
  let shops = await ShopModel.find({ctime:{$gt:startTime,$lt:endTime}}).skip((page-1)*pageSize).limit(pageSize)
  return {shops,allCount}
}

// 修改数据
async function update(_id,shopNum,shopName,shopPrice,Count,CountPrice){
  let result = await ShopModel.updateOne({_id},{shopNum,shopName,shopPrice,Count,CountPrice})
  console.log(result)
  return result
}
// 删除
async function del(_id){
  let result = await  ShopModel.deleteOne({_id})
  return result
}

// 库存相关的操作
const stockModel = require('../db/model/stockModel')
// 库存获取商品数据信息
async function getStockList(page,pageSize){
  let allShops = await stockModel.find()
  // 获取商品数据 总数量
  let allCount = allShops.length
  let stocks = await stockModel.find().skip((page-1)*pageSize).limit(pageSize)
  return {stocks,allCount}
}
// 库存添加商品数据信息
async function addstock(KCode,shopCode,shopName,KNum){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的时候catch
  console.log('前端传过来',KCode,shopCode,shopName,KNum);
  
  let result = await stockModel.insertMany({KCode,shopCode,shopName,KNum})
  console.log(result)
}


// 品类管理相关操作
const typeModel = require('../db/model/typeModel')
// // 品类获取商品数据信息
async function getTypeList(page,pageSize){
  let allShops = await typeModel.find()
  // 获取商品数据 总数量
  let allCount = allShops.length
  let types = await typeModel.find().skip((page-1)*pageSize).limit(pageSize)
  return {types,allCount}
}
// 品类添加商品数据信息
async function addtype(Num,name){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的时候catch
  console.log('前端传过来',Num,name);
  let result = await typeModel.insertMany({Num,name})
  console.log(result)
}
// 品类删除
async function deltype(_id){
  let result = await  typeModel.deleteOne({_id})
  return result
}
// 品类修改数据
async function updatetype(_id,Num,name){
  let result = await typeModel.updateOne({_id},{Num,name})
  console.log(result)
  return result
}
module.exports = {add,del,update,get,getStockList,addstock,getTypeList,addtype,deltype,updatetype,getByCtime}
