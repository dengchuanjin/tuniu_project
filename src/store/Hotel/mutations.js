export default {
  HotPlayData(state, data) {
    state.HotPlayData = data;
  },
  initHotPlayList(state, data) {
    state.HotPlayList = data
  },
  characteristicRecommendList(state, data) {
    state.characteristicRecommendList = data;
  },
  initThemeTypeList(state, data) {
    state.themeTypeList = data;
  },
  initRoomHardList(state, data) {
    state.roomHardList = data;
  },
  initSearchData(state, data) {
    state.searchData = data;
  },
  hotDestination(state, data) {
    state.hotDestinationList = data;
  },
  initHotelDetalis(state,obj){
    state.hotelDetalis = obj;
  },
  initHotelModel(state,obj){
    state.hotelModel = obj
  },
  initHotelPolicy(state,obj){
    state.hotelPolicy = obj
  },
  initHotelImage(state,data){
    state.hotelImage = data;
  },
  initExterior(state,data){
    state.exteriorList = data;
  },
  initTheLobby(state,data){
    state.theLobbyList = data;
  },
  initRestaurant(state,data){
    state.restaurantList = data;
  },
  initPublicAreas(state,data){
    state.publicAreasList = data;
  },
  SearchHotelRoomFilter(state,obj){
    state.searchHotelRoomFilterObj = obj
  },
  initHotelRoom(state,data){
    state.hotelRoom = data;
  },
  setSearchHotelRoomFilter(state,data){
    state.hotelRoom = data;
  }



}
