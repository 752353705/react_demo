import React,{Component} from "react"
import {Card} from "antd"
import ReactEcharts from "echarts-for-react"
class Line extends Component {
    constructor(){
        super()
        this.state={
           
            option:{
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
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