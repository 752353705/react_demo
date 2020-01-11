import React,{Component, Fragment} from 'react'
import { Table,Card,Pagination,Spin,Drawer } from 'antd';
import {goodsStock} from '../../../../api/goods'
import StockAdd from './StockAdd'
import StockHead from './Stock-Head'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
class Stock extends Component{
  constructor(){
    super()
    this.state={
      nowPage:1,
      pageSize:5,
      total:0,
      spinning:true,
      columns : [
        {
          title: '库存编号',
          dataIndex: 'KCode',
          key:'KCode'
        },
        {
          title: '商品编号',
          dataIndex: 'shopCode',
          key:'shopCode'
        },
        {
          title: '商品名称',
          dataIndex: 'shopName',
          key:'shopName'
        },
        {
          title: '库存数量',
          dataIndex: 'KNum',
          key:'KNum'
        }
      ],
      data:[],
    }
  }
  // 关闭抽屉
  closeDrawer = ()=>{
    this.setState({drawerShow:false})
    this.getTableData(this.nowPage,this.pageSize)
  }
// 打开抽屉
openDrawer=()=>{
  this.setState({drawerShow:true})
}
  changePage=(page)=>{
    this.setState({current:page})
  }
  componentDidMount(){
    this.getTableData(1,5)
  }
  getTableData(nowPage,pageSize){
    goodsStock(nowPage,pageSize).then((res)=>{
      console.log('页码数',nowPage,pageSize);
      console.log('库存管理返回的数据',res);
      let {stocks,allCount} = res.list
      console.log(stocks);
      this.setState({data:stocks,spinning:false,total:allCount})
      // console.log(this.state.spinning);
      
    })
  }
  render(){
    let {columns,data,spinning,total,pageSize,drawerShow} = this.state
    // console.log('列表',spinning);
    
    return(
      <Fragment>
        <Card title='库存管理'>
        <StockHead openDrawer={this.openDrawer}></StockHead>
        <Spin spinning={spinning}>
         <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        rowKey={data.key}
      >   
      </Table>
       <Pagination total={total} pageSize={pageSize} onChange={(nextPage,pageSize)=>{
         console.log('页数',nextPage,pageSize);
         
         this.getTableData(nextPage,pageSize)
       }}></Pagination>
        </Spin>
        {/* 添加的抽屉 */}
        <Drawer
          title='添加产品'
          placement='right'
          closable={false}
          onClose={()=>{
            this.props.setDrawerShow(false)
          }}
          visible={this.props.drawerShow}
        > 
        <StockAdd closeDrawer={this.closeDrawer}></StockAdd>
        </Drawer>
        </Card>
      
      
    </Fragment>
    )
  }
}
// export default Stock
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Stock) 