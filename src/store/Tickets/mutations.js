/**
 * Created by leibo on 18/3/9.
 */
export default {
  initAdmissionTicketHomePage(state,obj){
    state.admissionTicketHomePageObj = obj
  },
  initNearList(state,data){
    state.nearList = data;
  },
  initThemeTypeNameList(state,data){
    state.themeTypeNameList = data;
  },
  setAdminNearTickeFilterObj(state,obj){
    state.adminNearTickeFilterObj = obj
  },
  initAdminNearTickeFilterObj(state,obj){
    state.adminNearTickeFilterObj = obj
  },
  initHotList(state,data){
    state.hotList = data;
  },
  initOutList(state,data){
    state.outList =data;
  }
}
