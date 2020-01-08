import React, { Component ,Fragment} from 'react'
import { Table } from 'antd';
import {columns,data} from './DSdata'
import Add from './add'

class Discounts extends Component{
  state = {
    visible: false 
  }
  
  add=()=>{
    // visible = this.state.visible
   this.setState({visible:!this.state.visible}) //为何报错
  }
  del=()=>{
    console.log('del')
  }
  render(){
    return(
      <Fragment>
      <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() =>{
        return(
          <div style={{display:'flex',justifyContent: 'space-between'}}>
          <div>
            折扣活动>
          </div>
          <div>
            <button onClick={this.add}>添加折扣商品</button>
            <button onClick={this.del}>删除折扣商品</button>
          </div>
        </div>
        )
      }}
      footer={() => 'Footer'}
      />
      <Add data={this.state.visible} setData={this.add}></Add>
      </Fragment>
      )
    }
  }
  
  export default Discounts

