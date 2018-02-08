<template>
  <div>
    <div class="huiLeYouCashierWrap">
      <!--头部-->
      <header class="huiLeYouCashierWrapHeader">
        <div class="huiLeYouCashierWrapHeaderContent clearfix">
          <div class="huiLeYouCashierWrapHeaderContentFloat">
            <strong>{{user.ui_Name}}</strong>
            <span></span>
            <a href="javaecript:;">注销</a>
          </div>
        </div>
      </header>
      <!--内容-->
      <section class="huiLeYouCashierWrapContent">
        <!--logo-->
        <div class="huiLeYouCashierWrapContentTitle clearfix">
          <img src="../assets/img/center.png" width="70" height="50">
          <strong>收银台</strong>
        </div>
        <!--产品内容-->
        <div class="productContentDetails clearfix">
          <div class="productContentDetailsContent">
            <strong>产品名称: {{orderInfo.title}}</strong>
            <ul class="aboutPayment clearfix">
              <li>订单号: {{orderInfo.orderID}} <span></span></li>
              <li>订单金额: {{orderInfo.adultNumber*orderInfo.adultPrice+orderInfo.childNumber*orderInfo.childPrice}}.00元 </li>
              <!--<li>已支付: 3434.00元</li>-->
            </ul>
          </div>
          <div class="paymentMoney">
            <strong>应付金额: <span>{{orderInfo.adultNumber*orderInfo.adultPrice+orderInfo.childNumber*orderInfo.childPrice}}.00</span>元</strong>
          </div>
        </div>
        <!--支付平台-->
        <div class="paymentPlatform">
          <h4>支付平台</h4>
          <ul class="paymentPlatformList clearfix">
            <li><a href="javascript:;" @click="wechatPay">微信支付</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        user:{},
        orderInfo:{}

      }
    },
    created(){
      this.user = JSON.parse(sessionStorage.getItem('user'))
      this.orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      },
      //微信支付
      wechatPay(){
        this.$router.push({name:'PayPage'})
      }
    },
  }
</script>
<style scoped>
  .huiLeYouCashierWrap * {
    /*box-sizing: none;*/
  }

  .huiLeYouCashierWrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f0f0f0;
  }

  .huiLeYouCashierWrapHeader {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
  }

  .huiLeYouCashierWrapHeaderContent {
    width: 1200px;
    margin: 0 auto;
  }

  .huiLeYouCashierWrapHeaderContentFloat {
    float: right;
    font: 14px/30px "微软雅黑";
    color: #666052;
  }

  .huiLeYouCashierWrapHeaderContentFloat strong {
    float: left;
    padding: 0 20px;
  }

  .huiLeYouCashierWrapHeaderContentFloat span {
    float: left;
    width: 2px;
    height: 15px;
    background-color: #d2d2d2;
    margin-top: 7px;
  }

  .huiLeYouCashierWrapHeaderContentFloat a {
    color: #666052;
    float: left;
    padding: 0 20px;
  }

  .huiLeYouCashierWrapContent {
    width: 1200px;
    margin: 0 auto;
  }

  .huiLeYouCashierWrapContentTitle {
    padding: 20px 0;
  }

  .huiLeYouCashierWrapContentTitle img {
    float: left;
    padding-right: 20px;
    border-right: 1px solid #fff;
  }

  .huiLeYouCashierWrapContentTitle strong {
    float: left;
    font: 24px/2 "微软雅黑";
    color: #676566;
    padding-left: 20px;
  }

  .productContentDetails {
    padding: 20px;
    background-color: #fff;
    font: 14px/2 "微软雅黑";
    color: #432e1b;
  }

  .productContentDetailsContent {
    width: 700px;
    float: left;
  }

  .paymentMoney {
    float: right;
  }

  .paymentMoney span {
    font-size: 24px;
    color: #f95053;
  }

  .aboutPayment li {
    float: left;
  }

  .aboutPayment {
    overflow: hidden;
  }

  .aboutPayment li span {
    display: inline-block;
    width: 2px;
    height: 15px;
    background-color: #7490a8;
    margin: 0 5px;
  }

  .paymentPlatform {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px;
  }

  .paymentPlatform h4 {
    font: 18px/2 "微软雅黑";
    color: #878787;
  }

  .paymentPlatformList {
    margin-top: 10px;
    font: 14px/24px "微软雅黑";
  }

  .paymentPlatformList li {
    float: left;
  }

  .paymentPlatformList > li > a {
    color:#8d8d8d;
  }
  .paymentPlatformList > li > a:hover{
    color: #f60;
  }

</style>
