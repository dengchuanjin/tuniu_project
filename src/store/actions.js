import axios from 'axios';

export default {
  //图片上传
  uploadAdminImgs(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://image.1000da.com.cn/PostImage/PostToService', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          relove(data.data)
        })
    })
  },

  //-------------------首页-----------------
  //国内游
  initDomesticData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetShowGood', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            let resulte = data.data;
            for (var i = 0; i < resulte.length; i++) {
              resulte[i].oneImg = resulte[i].ta_tg_ShowImage.split(',')[0]
            }
            commit('initDomesticData', data.data)
          }
        })
    })
  },
  //产品详情
  initProductDetails({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/LinePrepare/GetTradeLineByGood', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            let resulte = data.data;
            for (var i = 0; i < resulte.length; i++) {
              if (!resulte[i].ts_tg_IntroduceReason) {
                resulte[i].ts_tg_IntroduceReason = '<span></span>'
              }
            }
            commit('initProductDetails', resulte)
            relove()
          }
        })
    })
  },
  //产品线路
  initLineSchedule({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/LinePrepare/TradeLineInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;

          if (Number(data.resultcode) == 200) {
            let resulte = data.data;
            let resulte2 = resulte.prepareList
            for (let i = 0; i < resulte2.length; i++) {
              if (resulte2[i].ts_pt_ShowImage) {
                resulte2[i].ts_pt_ShowImageList = resulte2[i].ts_pt_ShowImage.split(',')
              } else {
                resulte2[i].ts_pt_ShowImageList = [];
              }
            }
            commit('initLineSchedule', resulte);
            let arr = data.data.feeInfoList.filter(item => {
              if (Number(item.ts_fi_Include) == 0) {
                return true
              }
              return false
            })
            commit('initIncludeList', arr);

            let arr2 = data.data.feeInfoList.filter(item => {
              if (Number(item.ts_fi_Include) == 1) {
                return true
              }
              return false
            })
            commit('noWrapMoney', arr2);
            relove()
          }

        })
    })
  },
  //线路菜单
  initLineMenu({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/LineMenu/GetLineMenuInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            for (var i = 0; i < data.data.length; i++) {
              if (data.data[i].menuName == '行程线路') {
                data.data[i].isOff = true
              } else {
                data.data[i].isOff = false
              }
            }
            commit('initLineMenu', data.data)
            relove()
          }
        })
    })
  },
  //
  initTimesPrice({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/ProductPrice/GetProductPrice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            let resulte = data.data;
            commit('initTimesPrice', resulte)
            relove(data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //导航套子导航
  initNavList({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/System/GetSystemMenuInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initNavList', data.data)
            relove()
          }
        })
    })
  },
  //获取城市
  initGetLineCity({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/ProductPrice/GetLineCity', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initGetLineCity', data.data);
            relove()
          }
        })
    })
  },
  //轮播图
  initPictureList({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetTopShow', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initPictureList', data.data);
            relove()
          }
        })
    })
  },

  //---------------------   门票 ----------------

  //预定需知景区开放时间
  initBookKnowObj({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.mp.1000da.com.cn/BookKnow/GetBookKnowList', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initBookKnowObj', data.data)
            relove()
          }
        })
    })
  },
  //景区介绍
  initGetTourSite({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.mp.1000da.com.cn/TourSite/GetTourSite', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initGetTourSite', data.data)
            relove()
          }
        })
    })
  },
//---------------------商户注册---------------
  //获取省
  initProvinceData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initProvinceData', data.data)
            relove()
          }
        })
    })
  },
  //获取市
  initCityData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initCityData', data.data)
            relove()
          }
        })
    })
  },
  //获取县
  initCountyData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initCountyData', data.data)
            relove()
          }
        })
    })
  }
}
