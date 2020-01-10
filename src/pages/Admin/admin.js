import React,{ Fragment, Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Modal } from 'antd';
import styles from './admin.module.less' 
import CustomNav from '../../components/CustomNav/CustomNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {clear} from '../../utils/webStorage'
import ActionCreator from '../../store/ActionCreatore'
import {bindActionCreators} from 'redux'
const { Header, Sider, Content } = Layout;
class Admin extends Component {
  render(){
    let {tokenModal,history,setTokenModal} = this.props
    return(
      <Layout className={styles.admin}>
        <Modal visible={tokenModal} onOk={()=>{
          setTokenModal(false)
          clear();
          history.replace('/login')
          
        }}
        onCancel={()=>{
          setTokenModal(false)
        }}
        >
        token失效,请重新登录
        </Modal>
        <Header className={styles.admin_Header} >
        <HeaderNav></HeaderNav>
        </Header>
        
    <Layout>
      <Sider width={200} >
        <CustomNav></CustomNav>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>

          {/* 这里来动态显示当前所在路径 */}
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}

        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
  }
}

export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreator,dispath)
})(withRouter(Admin))
