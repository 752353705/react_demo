const express = require('express')
const router = express.Router()

// 注册reg  登录
const Login = require('./adminRouter/adminUserRouter')
// 权限
// const Root = require('./adminRouter/adminRootRouter')
// // 与产品相关的
const Shop = require('./adminRouter/adminShopRouter')

// 用户相关
router.use('/user',Login)
// 权限管理
// router.use('/root',Root)
// 商品管理
router.use('/shop',Shop)

module.exports=router

