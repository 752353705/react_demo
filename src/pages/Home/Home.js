import React ,{Component,Fragment} from "react"
import Line from "../../components/Line/line"
import styles from "./index.module.less"
import { Row, Col,Icon,Statistic, Menu,Dropdown,Pagination} from 'antd';
import { DatePicker } from 'antd';
import {getindexinfo} from "../../api/index"
import moment from 'moment';
const menu = (
    <Menu>
      <Menu.Item key="1">数据概况</Menu.Item>
    </Menu>
  );

  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYYMMDD'||undefined;

class Index extends Component {
   constructor(){
     super()
     this.state={
       page:7,
       startTime:undefined,
       endTime:undefined,
       profitArray:[],
       customnumArray:[],
       stocknumArray:[],
       moneyArray:[],
       data:[],
       obj:{},
       sale:1500,
       profit:2000,
       customNum:900
     }
   }
  

  handlePanelChange = (value, mode) => {
    console.log(value,mode,"你好嗨")
    this.setState({
      value
    });
  };

  handleChange = value => {
    console.log(value,"handleChange")
    this.setState({ value });
   
  };
  
   componentDidMount(){
      let {startTime,endTime,page} = this.state;
      getindexinfo(startTime,endTime,page).then((data)=>{
        console.log(data,"挂载")
        this.setState({data:data})
      }).catch((err)=>{
        console.log(err)
      })
   }





   getinfo(page){
     this.setState({page:page})
    let {startTime,endTime} = this.state;
    getindexinfo(startTime,endTime,page).then((data)=>{
     this.setState({data:data.data})
    }).catch((err)=>{
      console.log(err)
    })
   }
  
  

//根据请求回来的数据进行分类
 indexData=()=>{
   
   let data = this.state.data;
  let sale,profit,customnum,stocknum=[];
  for(let i=0;i<data.legth;i++){
     sale.push(data[i].money);
     profit.push(data[i].profit);
     customnum.push(data[i].customnum);
     stocknum.push(data[i].stocknum)
  }
  let weekSale =this.Sum(sale);
  let weekProfit =this.Sum(profit);
  let weekCustomnum =this.Sum(customnum);
  let weekStocknum =this.Sum(stocknum);
  let obj={allsale:[sale,weekSale],allprofit:[profit,weekProfit],
      allcustonum:[customnum,weekCustomnum],allstocknum:[stocknum,weekStocknum]}
      console.log(this,obj)
  return obj;
}

//将各项数据进行求和
 Sum=(arr)=>{
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  return sum;
}

   //时间改变的方法
  onPickerChange=(date, dateString)=>{
    console.log("data",date,"dateString",dateString);
    //这两个参数值antd自带的参数
    console.log("dateString",dateString[0],"dateString",dateString[1]);
    this.setState({
      startTime:dateString[0],
      endTime:dateString[1],  
    })
    getindexinfo(this.state.startTime,this.state.endTime).then((data)=>{
      console.log(data,"fanhu")
     let obj = this.indexData(this.state.data)
     this.setState({obj:obj});
     console.log(obj,"请求回来的额数据")
    }).catch((err)=>{
      console.log(err)
    })
  }


    render(){
       
       
        return(
            <Fragment>
                  <div className={styles.menu}>
                        <Dropdown overlay={menu}>
                       
                            <span>数据概况<Icon type="down" /></span>
                        </Dropdown>
                  </div>
                <div className={styles}>
                    <Row type="flex" justify="space-around">
                    <Col span={4} className={styles.info}>
                        <div>
                        <Row gutter={16} >
                        <Col span={30} onClick={()=>{this.setState({sale:2300})
                        }} >
                          <Statistic title="本周销售额" value={"$"+this.state.sale} prefix={<Icon type="red-envelope" theme="twoTone" />} />
                        </Col>
                      </Row>,
                        </div>
                    </Col>
                    <Col span={4} className={styles.info}> <div>
                    <Row gutter={16}>
                    <Col span={20} onClick={()=>{this.setState({profit:80000})
                  }}>
                      <Statistic title="本周毛利润" value={"$"+this.state.profit} prefix={<Icon type="insurance" theme="twoTone" />} />
                    </Col>
                  </Row>
                    </div></Col>
                    <Col span={4} className={styles.info}>
                    <Row gutter={16}>
                    <Col span={20} onClick={()=>{this.setState({customNum:4500})
                  }}>
                      <Statistic title="本周收客数" value={this.state.customNum+"人"} prefix={<Icon type="home" theme="twoTone" />} />
                    </Col>
                  </Row>
                    </Col>
                    <Col span={4} className={styles.info}> 
                    <Row gutter={16}>
                    <Col span={20}>
                      <Statistic title="库存情况" value={"积压/告罄/良好"} prefix={<Icon type="profile" theme="twoTone" />} />
                    </Col>
                  </Row>
                    </Col>
                  </Row>
                </div>
                {/*整体趋势 */}
                <div className={styles.data}>
                <div className={styles.menu}>
                        <Dropdown overlay={menu}>
                            <span>整体趋势<Icon type="down" /></span>
                        </Dropdown>
                  </div>
                  {/*时间选择*/}
                  <RangePicker 
                  onChange={this.onPickerChange} 
                    value={this.state.startTime===undefined||this.state.endTime===undefined||this.state.startTime===""||this.state.endTime===""?null:[moment(this.state.startTime, dateFormat), moment(this.state.endTime, dateFormat)]}
                    format={dateFormat}
                    placeholder={['开始时间','结束时间']}
                    />
                        
                  </div>
                 
                  {/* 点击四个,传入不同的数据,根据不同的数据渲染折线图 */}
                {/*折线图 */}
                <Line to={this.state.linedata}></Line>
               
                
             
            </Fragment>
        )
    }
}

export default Index



