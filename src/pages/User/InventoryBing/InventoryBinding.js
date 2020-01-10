import React, { Component } from  'react'
import { Table,Button,Pagination } from 'antd';
import {data,columns} from './IBdata'
import Time from '../Time'
import { Link } from 'react-router-dom';
import {getData} from '../../../api/shop'

class InventoryBinding extends Component{
  constructor(){
    super()
    this.state={
      startTime:'',
      endTiem:'',
      nowPage:1,
      pageSize:3,
      data:[],
      columns:[
        {
          title: '商品编码',
          dataIndex: '_id',
          key:'_id',
          render: text => <a>{text}</a>,
        },
        {
          title: '条形码',
          dataIndex: 'barCode',
          key:'barCode',
        },
        {
          title: '类别编号',
          dataIndex: 'categroyCode',
          key:'categroyCode',
        },
        {
          title: '商品名称',
          dataIndex: 'shopName',
          key:'shopName',
        },
        {
          title: '库存数量',
          dataIndex: 'Number',
          key:'Number',
        },
        {
          title: '折扣id',
          dataIndex: 'discountID',
          key:'discountID',
        },
      ]
    }
  }

  // 获取日期时间  便于盘点
  getTime = ()=>{
    console.log('获取盘点日期',this.refs)
  }

  // 挂载时请求 数据库中的数据
  componentDidMount(){
    // console.log('挂载上')
    // 请求数据库中的 数据
    this.getTableDate(1,3)
  }

  // 修改当前的时间
  changeTime = (dateString) => {
    console.log(dateString)
  }

  // 获取表格数据
  getTableDate = (nowPage,pageSize) => {
    // console.log('更新表格数据')
    getData(nowPage,pageSize).then((res)=>{
      // console.log(res)
      let {shops,allCount} = res.list
      this.setState({data:shops,total:allCount})
    })
  }
  chart=()=>{
    console.log('曲线图')
  }
  render(){
    let {columns,data,total,pageSize,startTime,endTiem} = this.state
    return(
      <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      title={() =>{return(
          <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <span>盘点管理</span>
            <div style={{display: 'flex',justifyContent: 'center'}}>
              <Time style={{width:'100px'}} timeData={[this.startTime,this.endTiem]} />
              <Button onClick={this.getTime} >
                开始盘点
              </Button>
              <Link to={'/admin/InventoryBinding/chart'}>
                <Button type="primary" onClick={this.chart}>
                  曲线图
                </Button>
              </Link>

            </div>
          </div>
      )}}
      footer={() => <Pagination  total={total} pageSize={pageSize} defaultPageSize={1}
        onChange={(nextPage,pageSize)=>{
          // console.log(nextPage,pageSize)
          this.getTableDate(nextPage,pageSize)

          }
        }
      />}
      />
    
    )
    
  }
}

export default InventoryBinding



