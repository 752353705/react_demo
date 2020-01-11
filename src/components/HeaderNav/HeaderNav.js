
import React,{Component,Fragment} from "react"
import {UserLogOut} from '../../api/user'

class HeaderNav extends Component {

  loginOut = () => {
    // console.log(localStorage.getItem('uid').replace('"','').replace('"',''))
    let uid = localStorage.getItem('uid').replace('"','').replace('"','')
    UserLogOut(uid)
    .then((res)=>{
      if(res.err=== 0){
        localStorage.clear()
        window.location.reload()
      }
    })
  }

  render(){
      return(
          <Fragment>
            <img src="/logo.png"/>
      <div >欢迎管理员<b>{localStorage.getItem('userName')}</b>到来!您上次的登录时间是:<span>2019年09月09日</span></div>
            <div style={{cursor:'pointer'}}><span>修改密码</span>|<span onClick={this.loginOut} >退出</span></div>
          </Fragment>
      )
  }
}

export default HeaderNav;

