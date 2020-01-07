import React,{Component} from 'react'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
// <<<<<<< HEAD

// const { SubMenu } = Menu;

// class CustomNav extends Component{
//   render(){
//    return(
//     <Menu
//     theme='dark'
//     mode="inline"
//     defaultSelectedKeys={['1']}
//     defaultOpenKeys={['sub1']}
//     style={{ height: '100%', borderRight: 0 }}
//   >
//     <Menu.Item
//       key="sub1"
//     >
//       <span>
//         <Icon type="user" />
//         首页概况
//       </span>
//     </Menu.Item>

//     <Menu.Item
//       key="sub2"
//     >
//       <span>
//         <Icon type="laptop" />
//         用户管理
//       </span>
//     </Menu.Item>

//     <SubMenu
//       key="sub3"
//       title={
//         <span>
//           <Icon type="notification" />
//           商品管理
//         </span>
//       }
//     >
//       <Menu.Item key="9">
//         库存管理
//       </Menu.Item>
//       <Menu.Item key="10">
//         品类管理
//       </Menu.Item>
//       <Menu.Item key="11">
//         <Link to={'/admin/Discounts'}>
//           折扣活动
//         </Link>
//       </Menu.Item>
//     </SubMenu>
    
//     <Menu.Item
//       key="sub4"
//     >
//       <Link to='/admin/InventoryBinding'>
//         <span>
//           <Icon type="laptop" />
//           盘点管理
//         </span>
//       </Link>
//     </Menu.Item>    
//   </Menu>

//    )
//   }

// }

// export default CustomNav

// =======
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
      defaultSelectedKeys={['1']}
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
// >>>>>>> 2689918bc34e4b3885e4b81337f11e1be63bcdab
