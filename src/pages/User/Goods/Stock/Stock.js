import React,{Component, Fragment} from 'react'
import { Table } from 'antd';
import {columns,data} from './StockData'
class Stock extends Component{
  render(){
    return(
      <Fragment>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => '库存管理>'}
      />
    </Fragment>
    )
  }
}
export default Stock