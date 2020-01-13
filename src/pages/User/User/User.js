import React ,{Component,Fragment} from "react"
import { Table,Pagination,Input,Popconfirm, message,Button} from 'antd';
import styles from "./user.module.less"

import {userInfo,delInfo,valueInfo} from "../../../api/users"
import Add from './add'


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
    nowPage:1,
    total:5,
     data:data,
     page:1,
     pageSize:3,
     drawerShow:false,
     updateData:{},//要修改的数据
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
        title: 'id',
        dataIndex: 'id',
        key: 'id',
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
                this.setState({drawerShow:true,updateData:record})
                this.add(record)
                console.log(record,"修改时的数据")
              }}>修改</Button>
            </div>
          )
        }},
    ]
   }
  }

 // 控制抽屉的现实与隐藏
 state = {
  visible: false 
}

// 使更新后的页数 指向第一页
changeNowPage(){
  this.setState({nowPage:1})
}


add=()=>{
 this.setState({visible:!this.state.visible}) 
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

//根据关键字查找
searchvalue(value){
  let page = this.state.page;
  console.log(value)
  valueInfo(value,page).then((data)=>{
    console.log(data,"mohu")
    this.setState({data:data.data})
    console.log(this.state.data,"gyeudijo")
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
                    <span >
                        <Search width="20px" className={styles.span}
                        placeholder="input search text"
                        enterButton="Search"
                        size="small"
                        onSearch={value => this.searchvalue(value)}
                        />
                  </span>
                  {/*添加用户按钮 */}
                  <span >
                      <Button className={styles.add} onClick={this.add}
                      >添加用户</Button>
                  </span>
    
                       
                </div>

                <div>
                    <Table columns={this.state.columns} dataSource={this.state.data} pagination={false}/>
                </div>

                {/* 分页*/}

                <div className={styles.pagination}>
                  <Pagination defaultCurrent={1} total={50} 
                  defaultPageSize={3}
                   onChange={(page,pageSize)=>{
                  this.setState({page:page,pageSize:pageSize})
                  this.getinfo(page,pageSize)
                   }} />
                </div>
           </div>
            
          


           <Add data={this.state.visible} 
                setData={this.add} 
                getTableDate={this.getinfo}
                changeNowPage={this.changeNowPage}
              ></Add>
        </Fragment>
    )
    }
    
    }

  
 

 
          

      

export default User