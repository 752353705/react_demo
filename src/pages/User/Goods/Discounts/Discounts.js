import React, { Component ,Fragment} from 'react'
import { Table ,Pagination, Button, Popconfirm, message, Spin} from 'antd';
// import {columns,data} from './DSdata'
import {getData,delShop} from '../../../../api/shop'
import Add from './add'

class Discounts extends Component{
  constructor(){
    super()
    this.state={
      nowPage:1,
      total:5,
      pageSize:3,
      drawerShow:false,
      updateData:{},//要修改的数据
      spinning:true,
      columns:[  {
        title: '商品编号',
        dataIndex: 'shopNum',
        render: text => <a>{text}</a>,
      },
      {
        title: '商品名称',
        dataIndex: 'shopName',
      },
      {
        title: '商品价格',
        dataIndex: 'shopPrice',
      },
      {
        title: '打折力度',
        dataIndex: 'Count',
      },
      {
        title: '折后价格',
        dataIndex: 'CountPrice',
      },{
        title:'操作',
        dataIndex:'_id',
        render:(record)=>{
          return(
            <Fragment>
              <Popconfirm
                title='你确定要删除吗？'
                onConfirm={()=>{
                  console.log('record  this',this)
                  this.del(record)
                }}
                onCancel={()=>{
                  message.info('取消删除')
                }}
                okText="删除"
                cancelText='取消'
              >
              <Button onClick={()=>{
                this.setState({drawerShow:true,updateData:record})
              }}>
                删除
              </Button> 
              </Popconfirm>
              
            </Fragment>
          )
        }
      }],
      data:[]
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

  // 挂载时
  componentDidMount(){
    this.getTableDate(1,3)
  }

  add=()=>{
    // visible = this.state.visible
   this.setState({visible:!this.state.visible}) //为何报错
  }
  del=(_id)=>{
    // console.log('del')
    delShop(_id).then(()=>{
      this.getTableDate()
    })
  }
  getTableDate=(nowPage,pageSize)=>{
    // 通过网络请求获取数据更新界面
    // console.log('更新表格数据')
    getData(nowPage,pageSize).then((res)=>{
      // console.log(nowPage,pageSize)
      // console.log('res',res)
      let {shops,allCount} = res.list
      // console.log('shops',shops)
      // console.log('allCount',allCount)
      this.setState({data:shops,total:allCount,spinning:false})
      // console.log(this.state.data)
    })
  }
  render(){
    let {columns,data,spinning,total,pageSize,nowPage} = this.state
    // console.log('nowPage',nowPage)
    return(
      <Fragment>
        <Spin spinning={spinning}>
            <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={false}
            title={() =>{
              return(
                <div style={{display:'flex',justifyContent: 'space-between'}}>
                <div>
                  折扣活动>
                </div>
                <div>
                  <button onClick={this.add}>添加折扣商品</button>
                  {/* <button onClick={this.del}>删除折扣商品</button> */}
                </div>
              </div>
              )
            }}
            footer={() => <Pagination  total={total} pageSize={pageSize} defaultPageSize={nowPage}
              onChange={(nextPage,pageSize)=>{
                  // console.log(nextPage,pageSize)
                  nowPage = nextPage
                  this.getTableDate(nextPage,pageSize)

                }
              }
            />}
          >

          </Table>
        </Spin>

      <Add data={this.state.visible} 
          setData={this.add} 
          getTableDate={this.getTableDate}
          changeNowPage={this.changeNowPage}
      ></Add>
      
      
      </Fragment>
      )
    }
  }
  
  export default Discounts

