import React,{Component} from 'react'
import {HashRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import Login from '../pages/Login/login'
import Admin from '../pages/Admin/admin'
import Home from '../pages/Home/Home'
import User from '../pages/User/User'
import Inventory from '../pages/Inventory/Inventory'
import Activity from '../pages/Goods/Activity'
import Stock from '../pages/Goods/Stock'
import Type from '../pages/Goods/Type'
class Router extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return(
            <Admin>
              <Redirect exact from='/admin' to='/admin/home'></Redirect>
              {/* 首页 */}
              <Route path='/admin/home' component={Home}></Route>
              {/* 用户管理 */}
              <Route path='/admin/user' component={User}></Route>
              {/* 商品管理 */}
              <Route path='/admin/goods/stock' component={Stock}></Route>
              <Route path='/admin/goods/type' component={Type}></Route>
              <Route path='/admin/goods/activity' component={Activity}></Route>
              {/* 盘点管理 */}
              <Route path='/admin/inventory' component={Inventory}></Route>
            </Admin>
          )
        }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Router