<template>
  <div>
    <!--头部-->
    <div class="hearderWrap">
      <div class="hearderContent clearfix">
        <img src="../../assets/img/huileyouLogo.jpg" width="230" height="70" @click="goHomePage">
        <!--右边步骤条-->
        <div class="stepBox"></div>
      </div>
    </div>
    <!--contentSection-->
    <section>
      <div class="contentSectionWrap">
        <div class="contentTitle clearfix">
          <strong>奥华·时尚精品酒店 - 南岸(Ovolo Southside – 64 Wong Chuk Hang Road)111111111</strong>
          <span><i></i><em>惠乐游保障:</em> 承诺到店无房赔付首晚房费，请放心预订</span>
        </div>
        <div class="orderInfromation clearfix">
          <div class="myInfromation">
            <p class="promptBar">您已经选择到了奥华·时尚精品酒店 - 南岸(Ovolo Southside – 64 Wong Chuk Hang Road)里最优惠的客房</p>
            <!--预定信息-->
            <div class="reservationInformation">
              <strong class="smallTitle "><i></i>预定信息</strong>
              <div class="reservationContent">
                <!--入离时间-->
                <div class="fromTheTime clearfix">
                  <span>入离时间：</span>
                  <div class="block">
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      size="mini"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <span>至</span>
                  <div class="block">
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      size="mini"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <span>共1晚</span>
                </div>
                <!--预定间数-->
                <div class="reservationNum clearfix">
                  <span>预定间数:</span>
                  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="Infinity" size="mini"
                                   label="描述文字"></el-input-number>
                  <span class="surplus">剩余<em>4</em>间</span>
                  <strong>￥812</strong>
                </div>
              </div>
            </div>
            <!--个人信息-->
            <div class="personalInformation">
              <strong class="smallTitle"><i></i>个人信息</strong>
              <div>
                <ul class="theGuestInformation">
                  <li>
                    <span><i class="improtent">*</i>住客姓名1：</span>
                    <el-input placeholder="输入住客姓名" size="mini" style="width: 200px"></el-input>
                  </li>
                </ul>
                <div class="userTelephoneNumber"><span><i class="improtent">*</i>手机号码： </span>
                  <el-input placeholder="输入手机号码" size="mini" style="width: 200px"></el-input>
                </div>
                <div class="userEMeil"><span>电子邮箱： </span>
                  <el-input placeholder="输入电子邮箱" size="mini" style="width: 200px"></el-input>
                </div>
              </div>
            </div>
            <!--预订规则-->
            <div class="reservationsRules">
              <strong class="smallTitle"><i></i>预订规则</strong>
              <p><strong>不可取消</strong>订单提交需支付全部房费，如订单不确认将全额退款至您的付款账户。订单确认后不可取消修改，如未入住或取消修改及提前离店，我们将收取您¥812支付酒店</p>
            </div>
            <!--到店须知-->
            <div class="noticeToTheStore">
              <strong class="smallTitle"><i></i>到店须知</strong>
              <p>2017/10/30-2019/12/31 订单一经确认，不可更改或添加入住人姓名。 城市重要通知:未满18周岁的小孩需有成人陪同才可入住。</p>
            </div>
            <!--提交订单-->
            <div class="submitOrder">
              <el-button type="success">提交订单</el-button>
            </div>
          </div>
          <!--订单信息-->
          <div class="hotelInfromation">
            <!--标题和地址-->
            <div class="title">
              <strong>奥华·时尚精品酒店 - 南岸(Ovolo Southside – 64 Wong Chuk Hang Road)</strong>
              <span>地址：南区香港仔黄竹坑道64号</span>
            </div>
            <!--房间配置-->
            <dl class="roomToConfigure">
              <dt>精致客房(外宾)[无早]</dt>
              <dd><strong>床型： </strong>大床或双床</dd>
              <dd><strong>楼层： </strong>5-22楼</dd>
              <dd><strong>面积： </strong>20平米</dd>
              <dd><strong>最多入住人数： </strong>2</dd>
              <dd><strong>宽带： </strong>免费无线宽带</dd>
              <dd><strong>窗户： </strong>有窗</dd>
              <dd><strong>支付： </strong>途牛将预收全部费用</dd>
              <dd><strong>加床： </strong>请提前咨询酒店前台</dd>
            </dl>
            <!--订单金额确认-->
            <div class="orderPrice">
              <strong>网上支付</strong>
              <div class="priceDetils clearfix">
                <strong>房费</strong>
                <span>￥10000</span>
              </div>
              <div class="allMoney clearfix">
                <strong>总计</strong>
                <span>￥10000</span>
              </div>
            </div>
          </div>
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
      return {
        value1: '',
        num1: 1,
        checked: true
      }
    },
    methods: {
      handleChange(value) {
      },
      goHomePage() {
        this.$router.push({name: 'HotelHomePage'})
      }
    },
  }
</script>
<style scoped>
  /*header*/
  .hearderWrap {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .hearderContent {
    width: 990px;
    margin: 0 auto;
  }

  .hearderContent > img {
    float: left;
  }

  .hearderContent > img:hover {
    cursor: pointer;
  }

  .hearderContent > .stepBox {
    float: right;
  }

  /*contentSection*/

  section {
    width: 100%;
    background-color: #f0f4fb;
  }

  .contentSectionWrap {
    width: 990px;
    margin: 0 auto;
  }

  /*contentTitle*/

  .contentTitle > strong {
    float: left;
    color: #2DBB55;
    font: bold 18px/70px "微软雅黑";
    max-width: 630px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contentTitle > span {
    float: right;
    font: 14px/70px "微软雅黑";
    color: #999;
  }

  .contentTitle > span > em {
    font-weight: bold;
  }

  .contentTitle > span > i {
    display: inline-block;
    width: 14px;
    height: 16px;
    background: url("../../assets/img/tips.png") no-repeat -49px -16px;
    vertical-align: middle;
    margin-right: 5px;
  }

  /*Information*/

  .myInfromation {
    float: left;
    width: 710px;
    padding-bottom: 40px;
  }

  .promptBar {
    font: 15px/40px "微软雅黑";
    text-align: center;
    color: #2a820a;
    background-color: #d3efd0;
    border-bottom: 4px solid #b2dbb5;
    padding: 0 10px;
  }

  .reservationInformation {
    margin-top: 10px;
    background-color: #fff;
  }

  .smallTitle {
    display: block;
    font: bold 16px/38px "微软雅黑";
    padding-left: 15px;
    border-bottom: 1px solid #ccc;
  }

  .smallTitle > i {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-image: url("../../assets/img/tips.png");
    vertical-align: middle;
    background-repeat: no-repeat;
  }

  .reservationContent {
    padding: 0 40px;
  }

  .fromTheTime,
  .reservationNum {
    padding: 10px 0;
  }

  .fromTheTime > * {
    float: left;
    font: 14px/1.5 "微软雅黑";
  }

  .fromTheTime > span {
    margin: 0 10px;
    color: #666;
  }

  .reservationNum > * {
    float: left;
    margin: 0 10px;
  }

  .reservationNum > span {
    font: 14px/1.5 "微软雅黑";
  }

  .reservationNum > span > em {
    color: #f60;
  }

  .reservationNum > strong {
    font: bold 14px/1.5 "微软雅黑";
    color: #f60;
  }

  /*个人信息*/

  .personalInformation {
    margin-top: 10px;
    background-color: #fff;
  }

  .personalInformation > strong > i {
    background-position: 0px -24px;
  }

  .personalInformation > div {
    padding: 10px 40px;
  }

  .theGuestInformation > li {
    margin: 10px 0;
  }

  .improtent {
    color: #f60;
  }

  .personalInformation span {
    color: #666;
  }

  .personalInformation > div > div {
    padding: 10px 0;
  }

  /*预定规则*/

  .reservationsRules {
    margin-top: 10px;
    background-color: #fff;
  }

  .reservationsRules > strong > i {
    background-position: -24px 0px;
  }

  .reservationsRules > p {
    font: 14px/1.5 "微软雅黑";
    color: #666;
    padding: 20px 64px 20px 44px;
  }

  .reservationsRules > p > strong {
    background-color: #fb6649;
    color: #fff;
    padding: 0 5px;
    margin-right: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  /*到店须知*/

  .noticeToTheStore {
    margin-top: 10px;
    background-color: #fff;
  }

  .noticeToTheStore > strong > i {
    background: url(../../assets/img/notice.png) no-repeat 0 0;
  }

  .noticeToTheStore > p {
    padding:20px 64px 20px 44px;
    font: 14px/1.5 "微软雅黑";
    color: #666;
  }

  /*提交订单*/

  .submitOrder {
    padding: 20px;
    background-color: #fff;
    margin-top:10px;
    text-align: right;
  }


  /*订单信息*/
  .hotelInfromation {
    float: right;
    width: 270px;
    background-color: #fff;
  }

  .hotelInfromation > .title {
    font: 14px/1.5 "微软雅黑";
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .hotelInfromation > .title > strong {
    font-weight: bold;
    display: block;
    color: #2dbb55;
  }

  .hotelInfromation > .title > span {
    color: #9e9f9f;
  }

  .roomToConfigure {
    padding: 5px 10px;
  }

  .roomToConfigure > dt {
    font: bold 15px/30px "微软雅黑";
    margin-bottom: 10px;
    color: #333333;
  }

  .roomToConfigure > dd {
    font: 14px/1.5 "微软雅黑";
    padding: 5px 0;
    color: #645858;
  }

  .roomToConfigure > dd >strong {
    font-weight: bold;
  }

  .orderPrice {
    border-top: 1px solid #f60;
    background-color: #fefee6;
    padding: 10px;
  }

  .orderPrice > strong {
    font: bold 18px/27px "微软雅黑";
    color: #000;
  }

  .orderPrice .priceDetils {
    border-bottom: 1px solid #eddbb3;
    font: 14px/2 "微软雅黑";
    padding: 0 10px;
  }

  .orderPrice .priceDetils > strong {
    float: left;
    color: #999999;
  }

  .orderPrice .priceDetils > span {
    float: right;
    color: #ff6600;
  }

  .orderPrice .allMoney {
    padding: 20px 10px 0;
    font: bold 18px/27px "微软雅黑";
  }

  .orderPrice .allMoney > strong {
    float: left;
    color: #000;
  }

  .orderPrice .allMoney > span {
    float: right;
    color: #f70;
  }



</style>
