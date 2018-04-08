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
          //图标
          let icons = data.data.HotelIco;
          let arr = []
          for(var i=0;i<icons.length;i++){
            switch (Number(icons[i].ht_hi_ImageID)){
              case 1:
                arr.push({
                  title:'餐厅',
                  className:'Restaurant'
                })
                break;
              case 2:
                arr.push({
                  title:'停车场',
                  className:'ParkingLot'
                })
                break;
              case 3:
                arr.push({
                  title:'接机服务',
                  className:'meetPlaneService '
                })
                break;
              case 4:
                arr.push({
                  title:'游泳池',
                  className:'swimmingPool'
                })
                break;
              case 5:
                arr.push({
                  title:'健身房',
                  className:'Gym'
                })
                break;
              case 6:
                arr.push({
                  title:'会议室',
                  className:'ConferenceRoom'
                })
                break;
              case 7:
                arr.push({
                  title:'24小时热水',
                  className:'hotWater'
                })
                break;
              case 8:
                arr.push({
                  title:'公共区域免费wafi',
                  className:'WiFi'
                })
                break;
              case 9:
                arr.push({
                  title:'公交',
                  className:'transit'
                })
                break;
            }
          }

          commit('initHotelIcon',arr)
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

          //酒店设施服务基本信息等
          commit('initHardServiceObj',data.data.HardService)
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
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/SearchHotelRoomFilter',JSON.stringify(data),{
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
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/SearchHotelRoom',JSON.stringify(data),{
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
  },
  //获取预订剩余房间数
  initRoomNumber(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomProductPrice/GetRoomNumber',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          relove(Number(data.data));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店提交订单
  initHotelMakeOrder({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelOrder/MakeOrder',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          relove(data.data);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  hotelWechatPayWay({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelOrder/PayOrder',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if( Number(data.resultcode) == 200 ){
          relove(data.data);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店订单详情
  initHotelOrderDetail({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelOrder/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelOrderDetail',data.data[0])
          relove(data.data[0])
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店取消订单
  hotelCancelOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelOrder/CancelOrder', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //青旅酒店南京
  initCityData({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/Search', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initQLCityData',data.data.dataArray)
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //青旅酒店苏州
  initSzCityData({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelWebPage/Search', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initSzCityData',data.data.dataArray)
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  }
}
