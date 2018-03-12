/**
 * Created by leibo on 18/3/9.
 */
import axios from 'axios';
export default {
  initAdmissionTicketHomePage({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://192.168.3.188/TourSite/GetTourSitePage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdmissionTicketHomePage',data.data);
          commit('initNearList',data.data.nearList);

          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  }
}
