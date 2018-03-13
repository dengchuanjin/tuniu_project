import axios from 'axios';

export default {
  //酒店首页数据
  initHotelHomePageData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://192.168.3.88:8080/HotelWebPage/Index',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          console.log(data);
        })
    })
  }
}
