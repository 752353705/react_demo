import axios from '../utils/axios'


//根据选择的时间获取首页信息
export const getindexinfo= async (startTime,endTime,page)=>{
      let res = await axios.post('/hehe/v1/admin/index/indexinfo',{startTime,endTime,page})
      if(res.err!==0){
        throw res
      }
      return res
  }