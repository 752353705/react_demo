import React,{Component, Fragment} from 'react'
import { Table,Card,Pagination,Spin ,Button,Icon,Popconfirm, message,Drawer } from 'antd';
// import {data} from './TypesData'
import {goodsStock,DelGoods} from '../../../../api/goods'
import TypeHead from './Type-Head'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
import TypeAdd from './TypeAdd'
import TypeUpdata from './TypeUpdata'
class Type extends Component{
  constructor(){
    super()
    this.state={
      nowPage:1,
      pageSize:5,
      total:0,
      spinning:true,
      updataData:[],
      columns : [
        {
          title: '类名编号',
          dataIndex: 'Num',
          key:'Num'
        },
        {
          title: '类名别称',
          key: 'name',
          dataIndex: 'name',
        },
        {
          title: '编辑',
          key: 'change',
          render:(record)=>{
            return(
            <div>
              <Button style={{marginRight:'10%'}} onClick={()=>{
                // 没有dataIndex时,record表示当前这个数据的所有值,有dataIndex时,record就只表示dataIndex后面跟的值
                console.log('这里是修改',record);
                console.log('这里是修改',this.props)
                this.props.setUpShow(true)
                console.log('这里是修改',this.props)
                                // this.setState({drawerShow:true,updataData:record})
            
              }}><Icon type="form" /></Button>
              <Popconfirm title='确认要删除吗?'
              okText='删除'
              cancelText='取消'
              onConfirm={()=>{
                console.log('删除',record);
                this.del(record._id)
              }}
              onCancel={()=>{
                message.info('取消删除')
              }}
              >
              <Button><Icon type="close-circle" /></Button>
              </Popconfirm>
            </div>
            ) 
          }
        }
      ],
      data:[],
    }
  }
  closeDrawer = ()=>{
    this.setState({drawerShow:false})
    this.getTableData(this.nowPage,this.pageSize)
  }
  // changePage=(page)=>{
  //   this.setState({current:page})
  // }
  componentDidMount(){
    this.getTableData(1,5)
  }
  getTableData(nowPage,pageSize){
    goodsStock(nowPage,pageSize).then((res)=>{
      console.log('库存管理返回的数据',res);
      let {foods,allCount} = res.list
      // this.setState({data:data,spinning:false,total:allCount})
      this.setState({data:foods,spinning:false,total:allCount})
    })
  }
  del(id){
    DelGoods(id).then(()=>{
      this.getTableData()
    })
  }
  showType(){
    if(this.props.UpShow){
     return(<TypeUpdata closeShow={this.props.UpShow}></TypeUpdata>) 
    }else{
      return 
    }
  }
  render(){
    let {columns,data,spinning,total,pageSize} = this.state
    return(
      <Fragment>
        <Card title='品类管理'>
          <TypeHead></TypeHead>
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
         this.getTableData(nextPage,pageSize)
       }}></Pagination>
        </Spin>
        <Drawer
          title='添加产品'
          placement='right'
          closable={false}
          onClose={()=>{
            this.props.setDrawerShow(false)
          }}
          visible={this.props.drawerShow}
        > 
        <TypeAdd closeDrawer={this.closeDrawer}></TypeAdd>
        </Drawer>
        { this.showType()}
        </Card>
      </Fragment>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Type) 