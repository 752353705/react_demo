import React,{Component} from 'react'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

import styles from './CustomNav.module.less'
import {getRootList} from './data'
const { SubMenu } = Menu;
class CustomNav extends Component{
  constructor(){
    super()
    this.state = {list:[]}
  }
  componentDidMount(){
    let list = getRootList()
    this.setState({list:list})
  }
  // 封装动态生成侧边栏的函数
  renderMenuItem(item){
    if(item.children){
      // 说明有二级菜单
     return (
       <SubMenu title={
         <span>
           <Icon type={item.icon || 'setting'}/>
       <span>{item.name}</span>
         </span>
       }key={item.id}>
         {item.children.map((childrenItem)=>{
           return this.renderMenuItem(childrenItem)
         })}
       </SubMenu>
     )
    }else{
      //一级菜单
      return (
        <Menu.Item key={item.id}>
          <Link to={'/admin'+item.path}>
          <Icon type={item.icon ||"setting"} />
      <span>{item.name}</span>
          </Link>
        </Menu.Item>
      )
    }
  }
  render(){
    // console.log(this.state.list);
    
    return(
      <Menu
      className={styles.menu}
      theme="dark"
      // onClick={this.handleClick}
      
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {this.state.list.map((item)=>{
        return this.renderMenuItem(item)
      })}
    </Menu>
    )
  }
}
export default CustomNav
