import rootList from './rootlist'
import {getItem} from '../../utils/webStorage'
export const getRootList=()=>{
  let rootIds = getItem('rootIds') || ''
  let result = []
  rootList.map((item,index)=>{
    if(rootIds.indexOf(item.id) !== -1){
      result.push(item)
    }else{
      if(item.children){
        let temp = {...item}//临时变量保留数据,浅复制,不然后面操作会修改到原值
        temp.children=[]
        item.children.map((citem)=>{
          if(rootIds.indexOf(citem.id) !== -1){
            temp.children.push(citem)
          }
          return item
        })
        if(temp.children.length>0){
          result.push(temp)
        }
      }
    }
    return item
  })
  return result 
}