import React from 'react'
export const columns = [
  {
    title: '商品编码',
    dataIndex: 'shopCode',
    render: text => <a>{text}</a>,
  },
  {
    title: '条形码',
    className: 'column-money',
    dataIndex: 'barCode',
  },
  {
    title: '类别编号',
    dataIndex: 'categroyCode',
  },
  {
    title: '商品名称',
    dataIndex: 'shopName',
  },
  {
    title: '库存数量',
    dataIndex: 'Number',
  },
  {
    title: '折扣id',
    dataIndex: 'discountID',
  },
]

export const data = [
  {
    key: '1',
    shopCode: '商品编码1',
    barCode: '条形码',
    categroyCode: '类别编号',
    shopName: '商品名称',
    Number: '库存数量',
    discountID: '折扣ID',
  },
  {
    key: '2',
    shopCode: '商品编码2',
    barCode: '条形码',
    categroyCode: '类别编号',
    shopName: '商品名称',
    Number: '库存数量',
    discountID: '折扣ID',
  },
  {
    key: '3',
    shopCode: '商品编码3',
    barCode: '条形码',
    categroyCode: '类别编号',
    shopName: '商品名称',
    Number: '库存数量',
    discountID: '折扣ID',
  },
  {
    key: '4',
    shopCode: '商品编码4',
    barCode: '条形码',
    categroyCode: '类别编号',
    shopName: '商品名称',
    Number: '库存数量',
    discountID: '折扣ID',
  },
  
]
