import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card } from 'antd'
class IBchart extends Component{
  constructor(){
    super()
    this.state = {
      option : {
        title: {
            text: '盘点管理折线图'
        },
        tooltip: {
            trigger: 'axis',
            // trigger:'item'
        },
        legend: {
            data: ['商品编码1', '商品编码2', '商品编码3', '商品编码4', '商品编码5']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '商品编码1',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '商品编码2',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '商品编码3',
                type: 'line',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '商品编码4',
                type: 'line',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '商品编码5',
                type: 'line',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
      }
    }
  }
  render(){
    let {option} = this.state
    return(
      <Card>
        <ReactEcharts option={option}></ReactEcharts>
      </Card>
    )
  }
}

export default IBchart