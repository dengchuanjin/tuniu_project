import axios from 'axios';

export default {
  //酒店首页数据
  initHotelHomePageData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/Index',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('HotPlayData',data.data.gameplay.SubArray);
            commit('initHotPlayList',data.data.gameplay.SubArray[0].CityList);
            commit('characteristicRecommendList',data.data.special.SubArray);
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //酒店搜索详情
  initHotelSearchFilterInfo({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/SearchFilter',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          //主题
          commit('initThemeTypeList',data.data.ThemeType)
          commit('initRoomHardList',data.data.RoomHard)
          relove();
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //搜索酒店详情数据
  initSearchData({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/Search',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          //主题
          commit('initSearchData',data.data.dataArray)
          relove();
        }else{
          reject(data.resultcontent)
        }
      })
    })
  }
}
