import React,{Component} from "react"
import {Card} from "antd"
import ReactEcharts from "echarts-for-react"
let xdata = ['2月20日', '2月21日', '2月22日', '2月23日', '2月24日', '2月25日', '2月26日'];
let  lineDate = [310, 932, 91, 93, 1290, 130, 130];

class Line extends Component {
    constructor(){
        super()
        
        this.state={
            
            option:{
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xdata
                },
                yAxis: {
                    type: 'value'
                },
             
                tooltip: {
                    trigger: 'axis'
                },
                series: [{
                    data: lineDate,
                    type: 'line',
                    boundaryGap: true,
                    symbolSize:14,
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    areaStyle: {
                        width:"70%",
                        color:"skyblue"
                    }
                }]
            }
        }
    }

   


    render(){
        let {option} = this.state;
        console.log(option)
        return(
            <Card>
                <ReactEcharts option={option}></ReactEcharts>
            </Card>
        )
    }
}
export default Line