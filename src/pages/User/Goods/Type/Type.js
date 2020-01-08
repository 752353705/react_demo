import React,{Component, Fragment} from 'react'
import { Table } from 'antd';
import {columns,data} from './TypesData'
class Type extends Component{
  render(){
    return(
      <Fragment>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          title={() => '品类管理>'}
        />
      </Fragment>
    )
  }
}
export default Type