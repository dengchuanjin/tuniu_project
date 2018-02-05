import getters from './getters'

const state = {
  //-------------首页------------
  isLoading:false,//loading
  domesticDataList:[],//国内跟团游数据
  getTourSiteListImage:'',//展示图片


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
  bookKnowObj:{},//景点开放时间
  getTourSiteList:{},//景点介绍
};
const mutations = {
  //loading设置
  showLoading(state){
    state.isLoading = true;
  },
  hideLoading(state){
    state.isLoading = false;
  },
  //---------首页--------
  //国内跟团游数据
  initDomesticData(state,data){
    state.domesticDataList = data;
  },



  initProductDetails(state, data) {
    state.productDetailsObj = data
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
  },
  //景点开放时间
  initBookKnowObj(state,obj){
    state.bookKnowObj = obj;
  },
  //景区介绍
  initGetTourSite(state,data){
    state.getTourSiteList = data;
    state.getTourSiteListImage = data.filter(item=>{
      var arr = item.ta_tg_ShowImage.slice(',')
      console.log(arr)
    })
  }


}
export default {
  getters,
  state,
  mutations
}
