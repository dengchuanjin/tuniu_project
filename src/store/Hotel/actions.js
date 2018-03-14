import axios from 'axios';

export default {
  //酒店首页数据
  initHotelHomePageData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://192.168.3.88:8080/HotelWebPage/Index',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            relove();
            commit('HotPlayData',data.data.gameplay.SubArray);
            commit('initHotPlayList',data.data.gameplay.SubArray[0].CityList);
            commit('characteristicRecommendList',data.data.special.SubArray);
          }else{
            reject(data.resultcontent)
          }
        })
    })
  }
}
