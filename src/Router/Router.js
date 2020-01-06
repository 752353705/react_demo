import React,{Component} from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Admin from '../pages/Admin.js/admin'


class Router extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default Router
