import getters from './getters'

const state = {
  productDetailsObj: {},
  lineScheduleObj: {},
  IncludeList: [],
  noWrapMoneyList: [],
  lineMenuList: [],
  timesPriceList: [],//产品价格
  priceObj: {},
  newPriceDetail: {},//当前日期详情
  navList:[],//导航套子导航
  getLineCityList:[],//获取城市列表
  pictureList:[],//获取图片
};
const mutations = {
  initProductDetails(state, data) {
    state.productDetailsObj = data.filter(item => {
      if (Number(item.ta_tg_ID) == 13473699) {
        return true;
      }
      return false;
    })[0]
  },
  initLineSchedule(state, obj) {
    state.lineScheduleObj = obj;
  },
  initIncludeList(state, data) {
    state.IncludeList = data
  },
  noWrapMoney(state, data) {
    state.noWrapMoneyList = data;
  },
  initLineMenu(state, data) {
    state.lineMenuList = data;
  },
  initTimesPrice(state, data) {
    state.timesPriceList = data;
  },
  initObj(state, obj) {
    state.priceObj = obj
  },
  initNewPriceDetail(state, date) {
    state.newPriceDetail = state.timesPriceList.filter(item => {
      if (item.ts_pp_Date == date) {
        return true
      }
      return false
    })[0]
  },
  // 导航套子导航
  initNavList(state,data){
    state.navList = data;
  },
//获取省
  initGetProvince(state,data){
    state.getProvinceList = data;
  },
  //获取市
  initGetCity(state,data){
    state.getCityList = data;
  },
  //获取县
  initGetCounty(state,data){
    state.getCountyList = data;
  },
  initGetLineCity(state,data){
    state.getLineCityList = data;
  },
  //轮播图
  initPictureList(state,data){
    var pictureListObj = data.filter(item=>{
      if( Number(item.ta_tg_ID) == 13473699 ){
        return true;
      }
      return false;
    })[0];
    state.pictureList = pictureListObj.ta_tg_ShowImage.split(',')
    console.log(state.pictureList)
  }

}
export default {
  getters,
  state,
  mutations
}