/**
 * Created by leibo on 18/3/9.
 */
import axios from 'axios';
export default {
  initAdmissionTicketHomePage({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TourSite/GetTourSitePage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if(Number(data.resultcode)==200){

          // 身边景点
          let arr = data.data.nearList;
          for(var i=0;i<arr.length;i++){
            let arr2 = arr[i].hcTourSiteList
            for(var j=0;j<arr2.length;j++){
              if(arr2[j].tm_ts_ShowImage){
                arr2[j].tm_ts_ShowImage = arr2[j].tm_ts_ShowImage.split(',')
              }else{
                arr2[j].tm_ts_ShowImage = []
              }
            }
          }
          commit('initAdminNearTickeFilterObj',data.data.nearList[0])
          // 热门目的地
          let hotList = data.data.hotList;
          for(var i=0;i<hotList.length;i++){
            if(hotList[i].tm_ts_ShowImage){
              hotList[i].tm_ts_ShowImage = hotList[i].tm_ts_ShowImage.split(',')
            }else{
              hotList[i].tm_ts_ShowImage = []
            }
          }
          commit('initHotList',hotList)

          //境外景点
          let outList =  data.data.outList;

          for(var i=0;i<outList.length;i++){
            if(outList[i].tm_ts_ShowImage){
              outList[i].tm_ts_ShowImage = outList[i].tm_ts_ShowImage.split(',')
            }else{
              outList[i].tm_ts_ShowImage = []
            }
          }

          commit('initOutList',outList)

          commit('initAdmissionTicketHomePage',data.data);


          commit('initNearList',data.data.nearList);
          commit('initThemeTypeNameList',data.data.nearList[0].themeTypeNameList);
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  }
}
