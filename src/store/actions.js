import axios from 'axios';
export default {
  //-------------------首页-----------------
  //国内游
  initDomesticData({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetShowGood',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          console.log(data)
          if( Number(data.resultcode) == 200 ){
            commit('initDomesticData',data.data)
          }
        })
    })
  },
  //产品详情
  initProductDetails({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/TradeGood/getTradeGoodInfo',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
            if( Number(data.resultcode) == 200 ){
              commit('initProductDetails',data.data)
            }
        })
    })
  },
  //产品线路
  initLineSchedule({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/LinePrepare/TradeLineInfo',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;

          if(Number(data.resultcode)==200){
            let resulte = data.data;
            let resulte2 = resulte.prepareList
            for(let i=0;i<resulte2.length;i++){
              if(resulte2[i].ts_pt_ShowImage){
                resulte2[i].ts_pt_ShowImageList = resulte2[i].ts_pt_ShowImage.split(',')
              }else{
                resulte2[i].ts_pt_ShowImageList = [];
              }
            }
            commit('initLineSchedule',resulte);
            let arr = data.data.feeInfoList.filter(item=>{
              if(Number(item.ts_fi_Include) ==0){
                return true
              }
              return false
            })
            commit('initIncludeList',arr);

            let arr2 = data.data.feeInfoList.filter(item=>{
              if(Number(item.ts_fi_Include) == 1 ){
                return true
              }
              return false
            })
            commit('noWrapMoney',arr2);
          }

        })
    })
  },
  //线路菜单
  initLineMenu({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/LineMenu/GetLineMenuInfo',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          if( Number(data.resultcode) == 200 ){
            for(var i=0;i<data.data.length;i++){
              if(data.data[i].menuName=='行程线路'){
                data.data[i].isOff = true
              }else{
                data.data[i].isOff = false
              }
            }
            commit('initLineMenu',data.data)
          }
        })
    })
  },
  //
  initTimesPrice({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/ProductPrice/GetProductPrice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            let resulte = data.data;
            commit('initTimesPrice',resulte)
            relove(data.data)
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //导航套子导航
  initNavList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/System/GetSystemMenuInfo',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initNavList',data.data)
          }
        })
    })
  },
  //获取城市
  initGetLineCity({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/ProductPrice/GetLineCity',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode) == 200){
            commit('initGetLineCity',data.data);
            relove()
          }
        })
    })
  },
  //轮播图
  initPictureList({commit},data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetTopShow',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode) == 200){
            commit('initPictureList',data.data);
          }
        })
    })
  },

  //---------------------   门票 ----------------

  //预定需知景区开放时间
  initBookKnowObj({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.mp.1000da.com.cn/BookKnow/GetBookKnowList',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initBookKnowObj',data.data)
            relove()
          }
        })
    })
  },
  //景区介绍
  initGetTourSite({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.mp.1000da.com.cn/TourSite/GetTourSite',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initGetTourSite',data.data)
            relove()
          }
        })
    })
  }
}
