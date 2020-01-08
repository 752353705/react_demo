import React, { Component } from  'react'
import { Table } from 'antd';
import {data,columns} from './IBdata'
import Time from '../Time'

class InventoryBinding extends Component{
  render(){
    return(
      <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() =>{return(
          <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <span>盘点管理</span>
            <Time/>
          </div>
      )}}
      
      footer={() => 'Footer'}
    >

      
    </Table>
    )
    
  }
}

export default InventoryBinding



