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
            commit('hotDestination',data.data.thehot.HotelList);//当季热门
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
          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店详情
  initHotelDetalis({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/Detail',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          //主题
          commit('initHotelDetalis',data.data);
          //酒店详情基础信息
          commit('initHotelModel',data.data.HotelModel)
          //酒店政策
          commit('initHotelPolicy',data.data.HotelPolicy)
          //酒店图片
          commit('initHotelImage',data.data.HotelImage)
          //酒店图片外观
          if(data.data.HotelImage[0]){
            commit('initExterior',data.data.HotelImage[0].SubArray)
          }else{
            commit('initExterior',[])
          }
          if(data.data.HotelImage[1]){
            //酒店图片大堂
            commit('initTheLobby',data.data.HotelImage[1].SubArray)
          }else{
            commit('initTheLobby',[])
          }
          if(data.data.HotelImage[2]){
            //酒店图片餐厅
            commit('initRestaurant',data.data.HotelImage[2].SubArray);
          }else{
            commit('initRestaurant',[]);
          }
          if(data.data.HotelImage[3]){
            //酒店图片餐厅
            if(data.data.HotelImage[3]){
              commit('initPublicAreas',data.data.HotelImage[3].SubArray);
            }
          }else{
            commit('initPublicAreas',[]);
          }

          //酒店图片餐厅

          //酒店图片餐厅

          //酒店房间列表
          // commit('initHotelRoom',data.data.HotelRoom)

          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //房间搜索条件
  SearchHotelRoomFilter({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://192.168.3.88:8080/HotelWebPage/SearchHotelRoomFilter',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          commit('SearchHotelRoomFilter',data.data)
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //房间列表搜索
  initSearchRoomInfo({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://192.168.3.88:8080/HotelWebPage/SearchHotelRoom',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          commit('setSearchHotelRoomFilter',data.data)
          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  }
}
