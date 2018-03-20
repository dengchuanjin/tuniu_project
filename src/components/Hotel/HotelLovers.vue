<template>
  <div>
    <!--头部-->
    <div class="parentChildHeaderWrap">
      <div class="parentChildHeader clearfix">
        <h2 @click="goHomePage">
          <img src="../../assets/img/center.png" height="60" width="60">
          <strong>情侣酒店</strong>
        </h2>
        <router-link to="/Comment/HotelHomePage">返回首页</router-link>
      </div>
    </div>
    <!--content-->
    <section>
      <div class="imageBox"></div>
      <ul class="hotelType clearfix">
        <!--主题酒店-->
        <li v-for="item,index in 4">
          <ul class="clearfix">
            <li v-for="item,index in 6">
              <img src="../../assets/img/homePageImage.jpg" width="231" height="165">
              <div class="title">
                <a href="javascript:;">上海塞纳风情主题酒店</a>
              </div>
              <div class="priceAndsubmit">
                <span>￥<strong>59</strong><em>起</em></span>
                <a href="javascript:;">立即购买</a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <!--更多活动-->
      <div class="moreActiveWrap">
        <div class="moreActive clearfix">
          <a href="javascript:;" v-for="item,index in 4">
            <img src="../../assets/img/homePageImage.jpg" width="230" height="175">
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {}
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

  /*内容部分*/

  section > .imageBox {
    width: 100%;
    height: 600px;
    background: url("../../assets/img/bg_02.jpg") no-repeat center;
  }

  .hotelType > li {
    float: left;
  }

  .hotelType > li li {
    width: 231px;
    height: 262px;
    background-color: #f7f7f7;
    margin: 6px;
    float: left;
  }

  .hotelType > li > ul {
    width: 729px;
    margin: 102px auto 0;
    transform: translateX(18%);
  }

  .hotelType > li:nth-of-type(2n) > ul {
    transform: translateX(-18%);
  }

  /*主题酒店*/

  .hotelType > li:nth-of-type(1) {
    height: 743px;
    width: 100%;
    background: url("../../assets/img/bg_03.jpg") no-repeat center;
  }

  /*圆床体验*/
  .hotelType > li:nth-of-type(2) {
    height: 729px;
    width: 100%;
    background: url("../../assets/img/bg_04.jpg") no-repeat center;
  }

  /*冒险体验*/
  .hotelType > li:nth-of-type(3) {
    height: 722px;
    width: 100%;
    background: url("../../assets/img/bg_05.jpg") no-repeat center;
  }

  /*高档享受*/
  .hotelType > li:nth-of-type(4) {
    height: 753px;
    width: 100%;
    background: url("../../assets/img/bg_06.jpg") no-repeat center;
  }

  .hotelType .title {
    height: 42px;
    font: 14px/21px "微软雅黑";
    margin-top: 11px;
    text-indent: 4px;
  }

  .hotelType .title > a {
    color: #404040;
    display: inline;
  }

  .hotelType .title > a:hover {
    color: #f60;
  }

  .hotelType .priceAndsubmit {
    margin-top: 5px;
  }

  .hotelType .priceAndsubmit > span {
    float: left;
    font: 14px/38px "微软雅黑";
    text-indent: 5px;
    color: #f02e45;
  }

  .hotelType .priceAndsubmit strong {
    font-size: 20px;
  }

  .hotelType .priceAndsubmit em {
    color: #404040;
  }

  .hotelType .priceAndsubmit > a {
    float: right;
    font: bold 18px/31px "微软雅黑";
    color: #fff;
    background-color: #f02e45;
    padding: 0 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-right: 5px;
  }

  /*更多活动*/

  .moreActiveWrap {
    display: inline-block;
    width: 100%;
    height: 357px;
    background: url("../../assets/img/bg_07.jpg") no-repeat center;
  }

  .moreActive {
    width:1007px;
    margin: 100px auto 0;
  }

  .moreActive > a {
    float: left;
    margin: 0 5px;
    border: 5px solid #fff;
  }

</style>
