<template>
  <div>
    <!--国内游-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle">
        <h4>国内旅游</h4>
      </div>
      <div class="clearfix">
        <div class="homePageDomesticTourLeft">
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in domesticDataList" @click="toDetail(item.ta_tg_ID)">

              <a href="javascript:;">
                <img v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>2839</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--周边游-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle AroundTitle">
        <h4>周边旅游</h4>
      </div>
      <div class="clearfix">
        <div class="Around">
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in aroundList" @click="toAroundDetail(item.ta_tg_ID)">

              <a href="javascript:;">
                <img v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>2839</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--境外短线-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle shortLongTitle">
        <h4>境外短线旅游</h4>
      </div>
      <div class="clearfix">
        <div class="shortLong">
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in shortLineList" @click="toShortLineDetail(item.ta_tg_ID)">

              <a href="javascript:;">
                <img v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>2839</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--境外长线-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle longtLongTitle">
        <h4>境外长线旅游</h4>
      </div>
      <div class="clearfix">
        <div class="longtLong">
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in longLineList" @click="toLongLineDetail(item.ta_tg_ID)">

              <a href="javascript:;">
                <img v-show="item.oneImg" v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>2839</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import {postPromise} from '../../assets/public'
//  agencies
  export default {
    name: '',
    computed: mapGetters({
      domesticDataList:'domesticDataList',
      getTourSiteListImage:'getTourSiteListImage',
      aroundList:'aroundList',
      shortLineList:'shortLineList',
      longLineList:'longLineList'
    }),
    data() {
      return {
        cityName: ''
      }
    },
    created() {

      this.$store.commit('showLoading');
      this.initCity()
      .then(name => {
        this.initData(name).then(()=>{
          this.$store.commit('hideLoading');
        })
      })
    },
    methods: {
      initCity() {
        return new Promise((relove, reject) => {
          var city = ['北京', '上海', '重庆', '宁夏', '新疆', '台湾', '香港', '澳门'];
          $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
            let newCity = '';
            for (var i = 0; i < city.length; i++) {
              if (city[i] == remote_ip_info.province) {
                newCity = remote_ip_info.province + '市'
              } else {
                newCity = remote_ip_info.province + '省';
              }
            }
            relove(newCity)
          });
        })
      },
      async initData(name) {
        //国内游
        let getShowGood = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "travelWay": "0",
          "provice": name,
        };
        await this.$store.dispatch('initDomesticData', getShowGood)
        //周边游
        let AroundOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "travelWay": "1",
          "provice": name,
        };
        await this.$store.dispatch('initAroundList',AroundOptions)
        //境外短线
        let ShortLineOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "travelWay": "2",
        };
        await this.$store.dispatch('initShortLineList',ShortLineOptions)
        //境外长线
        let LongLineOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "travelWay": "3",
        };
        await this.$store.dispatch('initLongLineList',LongLineOptions)
      },
      //点击跳转到产品线路详情
      toDetail(id) {
        let arr = this.domesticDataList.filter(item => {
          if (item.ta_tg_ID == id) {
            return true;
          }
          return false;
        });
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: id}})
      },
      //周边游跳转到产品线路详情
      toAroundDetail(id){
        let arr = this.aroundList.filter(item => {
          if (item.ta_tg_ID == id) {
            return true;
          }
          return false;
        });
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: id}})
      },
      //境外短线跳转到产品线路详情
      toShortLineDetail(id){
        let arr = this.shortLineList.filter(item => {
          if (item.ta_tg_ID == id) {
            return true;
          }
          return false;
        });
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: id}})
      },
      //境外长线跳转到产品线路详情
      toLongLineDetail(id){
        let arr = this.longLineList.filter(item => {
          if (item.ta_tg_ID == id) {
            return true;
          }
          return false;
        });
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: id}})
      }
    },
    mounted() {

    },
  }
</script>
<style scoped>
  .Around {
    width:220px;
    height:483px;
    background: url("../../assets/img/zhoubian.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
  }
  .shortLong{
    width:220px;
    height:483px;
    background: url("../../assets/img/duanxian.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
  }
  .longtLong{
    width:220px;
    height:483px;
    background: url("../../assets/img/changxian.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
  }
  .homePageDomesticTour {
    width: 1188px;
    margin: 20px auto;
    background-color: #fff;
  }
  .homePageDomesticTourTitle {
    font: bold 18px/28px "微软雅黑";
    color: #333;
    border-bottom: 3px solid #e694a6;
    border-bottom: 3px solid #e694a6;
  }
  .homePageDomesticTourTitle> h4 {
    margin-left:10px;
  }
  .homePageDomesticTourLeft {
    width:220px;
    height:483px;
    background: url("../../assets/img/guonei.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
  }
  .homePageDomesticTourContent {
    width:968px;
    float: left;
  }
  .homePageDomesticTourContentList{
    display: inline-block;
    vertical-align: middle;
  }
  .homePageDomesticTourContentList > li {
    vertical-align: top;
    width: 220px;
    position: relative;
    margin: 20px 11px 0;
    float: left;
  }

  .homePageDomesticTourContentList > li:hover {
    box-shadow: 1px 1px 3px #f60;
  }
  .homePageImageContentBox {
    background-color: #fff;
    padding: 0 5px 5px;
    height:100%;
  }
  .homePageImageContent {
    height:40px;
    width: 100%;
    overflow: hidden;
    font: bold 12px/20px "微软雅黑";
  }
  .homePageImageContent:hover a {
    color: #f60;
  }
  .homePageImageContent > a {
    color: #333;
  }

  .homePageImageMoneyAndSatisfied {
    font: 12px/42px "微软雅黑";
  }

  .homePageImageMoneyAndSatisfied > .homePageImageMoney {
    float: left;
    color: #f60;
  }

  .homePageImageMoneyAndSatisfied > .homePageImageMoney > strong {
    font-size: 18px;
    font-weight: bold;
  }

  .homePageImageMoneyAndSatisfied > .homePageImageSatisfied {
    float: right;
    color: #999;
    margin-right: 5px;
  }
  .AroundTitle{
    border-bottom: 3px solid #66d1d2;
  }
  .shortLongTitle{
    border-bottom: 3px solid #7fd3a8;
  }
  .longtLongTitle{
    border-bottom: 3px solid #7fc7ef;
  }

</style>
