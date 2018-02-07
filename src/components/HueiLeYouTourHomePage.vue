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
      <div class="homePageDomesticTourTitle">
        <h4>周边旅游</h4>
      </div>
      <div class="clearfix">
        <div class="homePageDomesticTourLeft">
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
      <div class="homePageDomesticTourTitle">
        <h4>周边旅游</h4>
      </div>
      <div class="clearfix">
        <div class="homePageDomesticTourLeft">
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
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import HueiLeYouTourHomePage from '../assets/css/HueiLeYouTourHomePage.css'

  export default {
    name: '',
    computed: mapGetters([
      'domesticDataList',
      'getTourSiteListImage',
      'aroundList'
    ]),
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
        //周边游
        let ShortLineOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "travelWay": "2",
        };
        await this.$store.dispatch('initShortLineList',ShortLineOptions)

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
        this.$router.push({name: 'HeelTour', params: {id: id}})
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
        this.$router.push({name: 'HeelTour', params: {id: id}})
      }
    },
    mounted() {

    },
  }
</script>
<style>
</style>
