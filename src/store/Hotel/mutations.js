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
  }
}
