import React,{Component} from 'react'
import {HashRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import Login from '../pages/Login/login'
import Admin from '../pages/Admin/admin'
import Home from '../pages/Home/Home'
import User from '../pages/User/User/User'
import Inventory from '../pages/User/InventoryBing/InventoryBinding'
import Activity from '../pages/User/Goods/Discounts/Discounts'
import Stock from '../pages/User/Goods/Stock/Stock'
import Type from '../pages/User/Goods/Type/Type'


class Router extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
        <Redirect exact from='/' to='/login'></Redirect>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return(
            <Admin>
              <Switch>
              <Redirect exact from='/admin' to='/admin/home'></Redirect>
              {/* 首页 */}
              <Route path='/admin/home' component={Home}></Route>
              {/* 用户管理 */}
              <Route path='/admin/user' component={User}></Route>
              {/* 商品管理 */}
              <Route path='/admin/goods/stock' component={Stock}></Route>
              <Route path='/admin/goods/type' component={Type}></Route>
              <Route path='/admin/Discounts' component={Activity}></Route>
              {/* 盘点管理 */}
              <Route path='/admin/InventoryBinding' component={Inventory}></Route>
              </Switch>
            </Admin>
          )
        }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Router
