import React from 'react'
export const columns = [
  {
    title: '商品编号',
    dataIndex: 'shopNum',
    render: text => <a>{text}</a>,
  },
  {
    title: '商品名称',
    dataIndex: 'shopName',
  },
  {
    title: '商品价格',
    dataIndex: 'shopPrice',
  },
  {
    title: '打折力度',
    dataIndex: 'Count',
  },
  {
    title: '折后价格',
    dataIndex: 'CountPrice',
  },
]

export const data = [
  {
    key: '1',
    shopNum: 'A-001',
    shopName: '清风餐巾纸',
    shopPrice: '￥15',
    Count: '15%',
    CountPrice: '￥8',
  },
  {
    key: '2',
    shopNum: 'A-001',
    shopName: '清风餐巾纸',
    shopPrice: '￥15',
    Count: '15%',
    CountPrice: '￥8',
  },
  {
    key: '3',
    shopNum: 'A-001',
    shopName: '清风餐巾纸',
    shopPrice: '￥15',
    Count: '15%',
    CountPrice: '￥8',
  },
]