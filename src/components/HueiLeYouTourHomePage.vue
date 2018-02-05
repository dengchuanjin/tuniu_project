<template>
  <div>
    <div id="homePageDomesticTour">
      <div class="homePageDomesticTourTitle">
        <h4>国内旅游</h4>
      </div>
      <div class="homePageDomesticTourContent">
        <ul class="homePageDomesticTourContentList clearfix">
          <li v-for="item,index in domesticDataList">

            <a href="javascript:;">
              <img v-lazy="item.oneImg" width="280" height="125">
            </a>
            <div class="homePageImageContentBox">
              <div class="homePageImageMoneyAndSatisfied clearfix">
                <span class="homePageImageMoney">￥<strong>2839</strong> 起</span>
                <span class="homePageImageSatisfied">满意度 96%</span>
              </div>
              <div class="homePageImageContent">
                <a href="javascript:;" @click="toDetail(item.ta_tg_ID)">{{item.ta_tg_Title}}</a>
              </div>
            </div>
          </li>
        </ul>
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
      'getTourSiteListImage'
    ]),
    data() {
      return {
        cityName: ''
      }
    },
    created() {
    },
    methods: {
      initCity() {
        return new Promise((relove, reject) => {
          var city = ['北京', '上海', '重庆', '宁夏', '新疆', '台湾', '香港', '澳门'];
          $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
            let newCity = ''
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
      initData() {

      },
      search() {
        this.initData()
      },
      //点击跳转到产品线路详情
      toDetail(id) {
        this.$router.push({name: 'HeelTour', params: {id: id}})
      }
    },
    mounted() {
      this.initCity()
        .then(name => {
          this.cityName = name;
        })
      //国内游数据
      let _this = this;
      setTimeout(() => {
        let getShowGood = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "travelWay": "0",
          "provice": _this.cityName,
        };
        this.$store.dispatch('initDomesticData', getShowGood)
      }, 200)

    },
  }
</script>
<style>
</style>
