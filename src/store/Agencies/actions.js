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
  //首页内容
  initAllHomeData({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetTravelPage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          let resulte = data.data;
          for(let item in resulte){
            let arr = resulte[item]
            if(arr.length){
              for(var i=0;i<arr.length;i++){
                arr[i].oneImg = arr[i].ta_tg_ShowImage.split(',')[0]
              }
            }
          }
          commit('initDomesticData', resulte.contryList)
          commit('initAroundList', resulte.nearList)
          commit('initShortLineList', resulte.outShortList)
          commit('initLongLineList', resulte.outLongList)
          relove()
        }
      })
    })
  },




  // //国内游
  // initDomesticData({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetShowGood', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //       .then(data => {
  //         var data = data.data;
  //         if (Number(data.resultcode) == 200) {
  //           let resulte = data.data;
  //           for (var i = 0; i < resulte.length; i++) {
  //             resulte[i].oneImg = resulte[i].ta_tg_ShowImage.split(',')[0]
  //           }
  //           commit('initDomesticData', data.data)
  //           relove()
  //         }
  //       })
  //   })
  // },
  // //周边游
  // initAroundList({commit},data){
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetShowGood', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //     .then(data => {
  //       var data = data.data;
  //       if (Number(data.resultcode) == 200) {
  //         let resulte = data.data;
  //         for (var i = 0; i < resulte.length; i++) {
  //           resulte[i].oneImg = resulte[i].ta_tg_ShowImage.split(',')[0]
  //         }
  //         commit('initAroundList', data.data)
  //         relove()
  //       }
  //     })
  //   })
  // },
  // //境外短线
  // initShortLineList({commit},data){
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetShowGood', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //     .then(data => {
  //       var data = data.data;
  //       if (Number(data.resultcode) == 200) {
  //         let resulte = data.data;
  //         for (var i = 0; i < resulte.length; i++) {
  //           resulte[i].oneImg = resulte[i].ta_tg_ShowImage.split(',')[0]
  //         }
  //
  //         commit('initShortLineList', data.data)
  //         relove()
  //       }
  //     })
  //   })
  // },
  // //境外长线
  // initLongLineList({commit},data){
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetShowGood', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //     .then(data => {
  //       var data = data.data;
  //       if (Number(data.resultcode) == 200) {
  //         let resulte = data.data;
  //         for (var i = 0; i < resulte.length; i++) {
  //           resulte[i].oneImg = resulte[i].ta_tg_ShowImage.split(',')[0]
  //         }
  //         commit('initLongLineList', data.data)
  //         relove()
  //       }
  //     })
  //   })
  // },
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
            resulte.money = data.datastring;

            commit('initProductDetails', resulte)
            relove(resulte.ts_pt_ID)
          }
        })
    })
  },
  //产品线路
  initLineSchedule({commit}, data) {
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
  // //轮播图
  // initPictureList({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://hly.lxs.1000da.com.cn/TradeGood/GetTopShow', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //       .then(data => {
  //         var data = data.data;
  //         console.log(data)
  //         if (Number(data.resultcode) == 200) {
  //           commit('initPictureList', data.data);
  //           relove()
  //         }
  //       })
  //   })
  // },

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
  },
  //查询结算币种
  initChangeMineyType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.admin.1000da.com.cn/BalanceCurrency/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeMineyType', data.data)
            relove(data.data)
          }
        })
    })
  },
  //公司规模
  initChangeCompanyType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.admin.1000da.com.cn/CompanySize/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeCompanyType', data.data)
            relove()
          }
        })
    })
  },
  //类型
  initChangeCooperationType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.admin.1000da.com.cn/CooperationType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeCooperationType', data.data)
            relove()
          }
        })
    })
  },
  //经营范围
  initChangeScopeOfOperation({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.admin.1000da.com.cn/TradeScope/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeScopeOfOperation', data.data)
            relove()
          }
        })
    })
  },
  //添加供应商提交
  initSubmitInformtionObj({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.admin.1000da.com.cn/AgentInfo/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode) == 200){
            relove()
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //提交订单
  submitOrder(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/TravelOrder/MakeOrder', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          relove(data.data)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //微信支付生成二维码字符串
  payWechat({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://wechat.1000da.com.cn/Order/MakeWechatQRCode', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //获取微信支付状态
  getOrderStatus(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://wechat.1000da.com.cn/Order/QueryOrderStatus', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化用户订单
  initMyTourOrder({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/UserOrder/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initMyTourOrder',data.data)
          relove(Number(data.totalrows))
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改用户信息
  saveUserInfo(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/UserInfo/Update', JSON.stringify(data), {
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
  //支付订单
  wechatPayWay(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/TravelOrder/PayOrder', JSON.stringify(data), {
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
  //获取余票
  GetFreeSeat(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/ProductPrice/GetFreeSeat', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除订单
  DeleteOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/UserOrder/DeleteStatus', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //订单详情
  initOrderDetail({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/TravelOrder/GetOrderInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initOrderDetail',data.data[0])
          relove(data.data[0])
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //取消订单
  CancelOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/UserOrder/Delete', JSON.stringify(data), {
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
  //回去进度状态
  getSearchStatus(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://hly.lxs.1000da.com.cn/AgentInfo/ProgressStatus', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  }
}
