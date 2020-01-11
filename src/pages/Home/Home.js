// import React,{Component, Fragment} from 'react'

// class Home extends Component{
//   render(){
//     return(
//       <Fragment>
//         这里是首页
//       </Fragment>
//     )
//   }
// }
// export default Home
import React ,{Component,Fragment} from "react"
// import Line from "../../components/Line/line"
import Line from "../../components/Line/line"

import styles from "./index.module.less"
import { Row, Col,Icon,Statistic, Menu,Dropdown} from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
const menu = (
    <Menu>
      <Menu.Item key="1">数据概况</Menu.Item>
    </Menu>
  );
  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';
class Home extends Component {
   
    
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
                        <Row gutter={16}>
                        <Col span={30}>
                          <Statistic title="本周销售额" value={"$"+15000} prefix={<Icon type="red-envelope" theme="twoTone" />} />
                        </Col>
                      </Row>,
                        </div>
                    </Col>
                    <Col span={4} className={styles.info}> <div>
                    <Row gutter={16}>
                    <Col span={20}>
                      <Statistic title="本周毛利润" value={"$"+5000} prefix={<Icon type="insurance" theme="twoTone" />} />
                    </Col>
                  </Row>
                    </div></Col>
                    <Col span={4} className={styles.info}>
                    <Row gutter={16}>
                    <Col span={20}>
                      <Statistic title="本周收客数" value={12000+"人"} prefix={<Icon type="home" theme="twoTone" />} />
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
                        <div>
                            <RangePicker allowClear={false} suffixIcon={<Icon type="" />}
                            defaultValue={[moment('2019/09/06', dateFormat), moment('2020/01/06', dateFormat)]}
                            />
                        </div>
                  </div>
                {/*折线图 */}
                <Line></Line>
               
                
              

            </Fragment>
        )
    }
}

export default Home



