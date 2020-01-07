import React, { Component } from  'react'
import { Table } from 'antd';


const columns = [
  {
    title: '商品编码',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '条形码',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: '类别编号',
    dataIndex: 'address',
  },
  {
    title: '商品名称',
    dataIndex: 'shopID',
  },
  {
    title: '库存数量',
    dataIndex: 'Number',
  },
  {
    title: '折扣id',
    dataIndex: 'discountID',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

  

class InventoryBinding extends Component{
  render(){
    return(
      <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() => '盘点管理'}
      footer={() => 'Footer'}
    />
  
    )
  }
}

export default InventoryBinding
