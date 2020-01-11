// import React,{Component, Fragment} from 'react'
// class User extends Component{
//   render(){
//     return(
//       <Fragment>
//         这里是用户管理
//       </Fragment>
//     )
//   }
// }
// export default User

import React ,{Component,Fragment} from "react"
import { Table,Pagination,Input,Popconfirm, message,Drawer,Button,Form, Col, Row} from 'antd';
import styles from "./user.module.less"
// import {userInfo,delInfo,valueInfo} from "../../api/users"
import {userInfo,delInfo,valueInfo} from "../../../api/users"


const { Search } = Input;

  const data = [
    {
      key: '1',
      uid: 'John Brown',
      name: 32,
      password: 'New York No. 1 Lake Park',
      jurisdiction:"管理员",
    },
    {
      key: '2',
      uid: 'Jim Green',
      name: 42,
      password: 'London No. 1 Lake Park',
      jurisdiction:"管理员",
    },
    {
      key: '3',
      uid: 'Joe Black',
      name: 32,
      password: 'Sidney No. 1 Lake Park',
      jurisdiction:"管理员",
    },
  ];

class User extends Component {
  constructor(){
    super()
   this.state={
     data:data,
     page:1,
     pageSize:3,
     drawerShow:false,
     selectValue:"用户名",
     columns : [
      {
        title: 'Uid编号',
        dataIndex: 'uid',
        key: "_id",
        render: text => text,
      },
      {
        title: 'Name用户名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'ID身份证',
        dataIndex: 'password',
        key: 'password',
      },
      {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
      },
      
      {
        title: 'userRight权限',
        key:'jurisdiction',
       
         render:(record)=> {
          // 可以当前数据条数的相关内容 如果有dataIndex 参数就是dataIndex关联的内容
          // 如果没 有dataIndex显示数据所有的内容
          // console.log('操作数据',record)
          return(
            <div>
              <Popconfirm
              title='你确定要删除啊嘛?'
              onConfirm={()=>{
                let _id = record._id;
               this.delInfo(_id)
              }}
              onCancel={()=>{
                message.info('取消删除')
              }}
  
              okText='删除'
              cancelText="取消"
  
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              {/*点击修改时将drawerShow设为true让他显示 */}
              <Button size='small' onClick={()=>{
                this.setState({drawerShow:true})
                console.log(record,"修改时的数据")
              }}>修改</Button>
            </div>
          )
        }},
    ]
   }
  }
  componentDidMount(){
    let page = this.state.initpage;
    let pageSize = this.state.pageSize;
    this.getinfo(page,pageSize)
  }

getinfo(page,pageSize){
  userInfo(page,pageSize).then((data)=>{
    this.setState({data:data.data})
   }).catch((err)=>{
     console.log(err)
   })
}

delInfo(_id){
  let page = this.state.page;
  delInfo(_id,page).then((data)=>{
    this.setState({data:data.data})
  }).catch((err)=>{
    console.log(err)
  })
}

searchvalue(value){
  let page = this.state.page;
  

  
  valueInfo(value,page).then((data)=>{
    this.setState({data:data.data})
  }).catch((err)=>{
    console.log(err)
  })
}

  render(){
    console.log(this.state.data,"render")
    return(
      <Fragment>
          <div>
              <div>
                  <span>用户管理></span>
                  <br/>
                  <select onChange={(e)=>{this.setState({selectValue:e.target.value})}}>
                      <option>用户id</option>
                      <option>用户名</option>
                  </select>
                  <span>
                      <Search width="20px" 
                      placeholder="input search text"
                      enterButton="Search"
                      size="small"
                      onSearch={value => this.searchvalue(value)}
                      />
                </span>
  
                      
              </div>

              <div>
                  <Table columns={this.state.columns} dataSource={this.state.data} pagination={false}/>
              </div>

              <div className={styles.pagination}><Pagination defaultCurrent={1} total={50} 
              defaultPageSize={3}
              onChange={(page,pageSize)=>{
                this.setState({page:page,pageSize:pageSize})
                this.getinfo(page,pageSize)
              }}
              /></div>
          </div>
              {/*抽屉 */}
              <Drawer
              title="增加修改用户数据"
              width={720}
              closable={false}
              onClose={this.onClose}
              visible={this.state.drawerShow}
              bodyStyle={{ paddingBottom: 80 }}
            >
            <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Name">
                  {/* {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(<Input placeholder="用户名输入" />)} */}
                </Form.Item>
              </Col>
              <Col span={12}>
                
              </Col>
            </Row>
            
            
          </Form>
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
            </Drawer>

      </Fragment>
  )
  }
  
  }

export default User