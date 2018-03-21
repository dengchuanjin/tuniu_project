<template>
  <div>
    <!--头部-->
    <div class="parentChildHeaderWrap">
      <div class="parentChildHeader clearfix">
        <h2 @click="goHomePage">
          <img src="../../assets/img/center.png" height="60" width="60">
          <strong>依山酒店</strong>
        </h2>
        <router-link to="/Comment/HotelHomePage">返回首页</router-link>
      </div>
    </div>
    <!--content-->
    <section>
      <div class="imageBox"></div>
      <div class="contentSection">
        <!--出发城市-->
        <div class="goCity clearfix">
          <strong>出发地城市</strong>
          <div class="goCityList">
            <a href="javascript:;" v-for="item,index in cityList" :key="index">{{item}}</a>
          </div>
        </div>
        <!--地方展示-->
        <ul class="scenicSpotList">
          <li v-for="item,index in scenicSpotList">
            <h1>{{item}}</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in 3">
                <img src="../../assets/img/homePageImage.jpg" width="312" height="235"/>
                <div class="title">
                  <a href="javascript:;">黄山北海宾馆</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>130</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        cityList: [
          '华东',
          '华北',
          '华南',
          '西部',
          '华中'
        ],
        scenicSpotList: [
          '安徽黄山',
          '泰安泰山',
          '青岛崂山',
          '南京紫金山',
          '迪庆香格里拉',
          '三亚凤凰岭',
          '厦门五老峰',
          '舟山普陀山'
        ],
      }
    },
    methods: {
      goHomePage() {
        this.$router.push({name: 'HotelHomePage'})
      }
    },
  }
</script>
<style scoped>
  /*头部*/
  .parentChildHeaderWrap {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .parentChildHeader {
    width: 1000px;
    margin: 0 auto;
  }

  .parentChildHeader > h2 {
    float: left;
  }

  .parentChildHeader > h2:hover {
    cursor: pointer;
  }

  .parentChildHeader strong {
    font: bold 30px/1 "宋体";
    vertical-align: bottom;
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .parentChildHeader > a {
    float: right;
    font: 16px/2 "微软雅黑";
    padding: 0 15px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    border: 1px solid #999;
    color: #999;
    margin-top: 10px;
  }

  .parentChildHeader > a:hover {
    border-color: #f60;
    color: #f60;
  }

  /*头部结束*/

  /*contentSectionStart*/

  section {
    width: 100%;
    background-color: #4fb1f2;
    padding-bottom: 20px;
  }

  .imageBox {
    width: 100%;
    height: 626px;
    background: url("../../assets/img/dengshan.jpg") no-repeat center;
  }

  .contentSection {
    width: 1000px;
    margin: 0 auto;
  }

  .goCity {
    padding: 10px 0 0 18px;
    font: 20px/30px "微软雅黑";
  }

  .goCity > strong {
    float: left;
    color: #fff;
    background-color: #DA305D;
    padding: 0 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }

  .goCity > .goCityList {
    float: left;
  }

  .goCity > .goCityList > a {
    float: left;
    margin: 0 10px;
    color: #000;
    padding: 0 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }

  .goCity > .goCityList > .active {
    color: #fff;
    background-color: #0E1A4C;
  }

  .scenicSpotList h1 {
    width: 100%;
    font: 26px/50px "微软雅黑";
    background-color: #0d58ab;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .scenicSpotHotelList > li {
    background-color: #fff;
    float: left;
    margin: 0 10px;
  }

  .scenicSpotHotelList .title {
    font: 18px/1 "微软雅黑";
    padding:5px 0 0 10px;
    height: 60px;
  }

  .scenicSpotHotelList .title a {
    color: #404040;
    display: inline;
  }

  .scenicSpotHotelList .title a:hover {
    color: #f60;
  }

  .priceAndSubmit > strong  {
    float: left;
    color: #1d4970;
    font: 16px/65px "微软雅黑";
    text-indent: 5px;
  }

  .priceAndSubmit > strong > span {
    color: #f60;
  }

  .priceAndSubmit > a {
    margin-right: 5px;
    float: right;
    background: #1d4970;
    margin-top: 12px;
    color: #fff;
    font: bold 20px/36px "微软雅黑";
    text-align: center;
    padding: 0 20px;
  }
</style>
