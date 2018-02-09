<template>
    <div>
      <div class="huiLeYouCashierWrap">
        <header class="huiLeYouCashierWrapHeader">
          <div class="huiLeYouCashierWrapHeaderContent clearfix">
            <div class="huiLeYouCashierWrapHeaderContentFloat">
              <strong>{{}}</strong>
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


          <div class="huiLeYouOrderRemind clearfix">
            <div class="huiLeYouOrderRemindLeft">
              <strong>请您及时付款，以便订单及时处理！订单号: 103343343</strong>
              <span>请您在提交订单后<em>{{}}</em>内完成支付，否则订单会自动取消。</span>
            </div>
            <div class="huiLeYouOrderRemindRight">
              <strong>应付金额:<span>9160.00</span>元</strong>
            </div>
          </div>


          <div class="sweepQRCodeBoxWrap">
            <div class="sweepQRCodeBox">
              <div class="QRCode" ref="ewm"></div>
            </div>
            <a href="javascript:;">>选择其他支付方式</a>
          </div>
        </section>
      </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        i: false,
        isLoad: 0,
        timer: null,
        hide: false,
      }
    },
    computed: mapGetters([
      'payStr'
    ]),
    methods: {
      initPay(){
        let payOptions = {
          "userID": "qianke",
          "password": "qianke123",
          "stationID": "qianlidagzh",
          "money": '1'
        };
        return this.$store.dispatch('payWechat', payOptions)
      },
    },
    mounted(){
      var qrcode = new QRCode(this.$refs.ewm, {
        width: 200,
        height: 200
      });
      let orderID = JSON.parse(sessionStorage.getItem('orderInfo')).orderID

      if (this.i == false) {
        setTimeout(()=>{
          this.initPay().then(data => {
            qrcode.makeCode(data.list);
            if (this.isLoad > 0) {
              return;
            }
            clearInterval(this.timer);
            this.timer = setInterval(() => {
              let options = {
                "userID": "qianke",
                "password": "qianke123",
                "stationID": "qianlidagzh",
                "orderNo": data.backstring
              }
              this.$store.dispatch('getOrderStatus', options)
              .then(resulte => {
                if (this.isLoad > 0) {
                  return;
                }

                if (resulte.list == "SUCCESS") {
                  clearInterval(this.timer);
                  this.isLoad++;
                  let wOptions = {
                    "loginUserID": "huileyou",
                    "loginUserPass": "123",
                    "operateUserID": "",
                    "operateUserName": "",
                    "pcName": "",
                    "orderID":  orderID,
                    "payWay": "微信支付",
                  }
                  this.$store.dispatch('wechatPayWay',wOptions)
                  .then(()=>{
                    this.$router.push({name:'MyTourOrder'});
                  },err=>{
                    this.$notify({
                      message: err,
                      type: 'error'
                    });
                  })


                }
              })
            }, 300)
          })
        },30)
      }
      this.i = true;
    }
  }
</script>
<style scoped>
  .huiLeYouCashierWrap {
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
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

  .huiLeYouOrderRemind {
    padding:20px;
    background-color: #fff;
  }

  .huiLeYouOrderRemindLeft {
    float: left;
  }

  .huiLeYouOrderRemindLeft strong {
    font:16px/28px "微软雅黑";
    color: #2d2f3b;
    display: block;
  }

  .huiLeYouOrderRemindLeft span {
    display: block;
    font: 15px/25px "微软雅黑";
    color: #6d6467;
  }

  .huiLeYouOrderRemindLeft span em {
    color: #cd656c;
  }

  .huiLeYouOrderRemindRight {
    float: right;
    font:14px/2.5 "微软雅黑";
    color: #66625f;
  }

  .huiLeYouOrderRemindRight span {
    font-size: 20px;
    font-weigth: bold;
    color: #ee5b6e;
  }

  .sweepQRCodeBoxWrap {
    margin-top:20px;
    padding:100px 20px 20px 20px;
    background-color: #fff;
  }

  .sweepQRCodeBox {
    width: 427px;
    height: 324px;
    margin: 0 auto;
    background: url("../assets/img/scanning.png") no-repeat;
  }

  .sweepQRCodeBox .QRCode {
    width:200px;
    height:200px;
    border:1px solid #ccc;
  }

  .sweepQRCodeBoxWrap>a {
    color: #818380;
    font-size:14px;
  }
</style>
