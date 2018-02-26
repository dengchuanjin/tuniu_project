<template>
  <div>
    <header class="TicketsReserveLogoAndProgressBar">
      <div class="TicketsReserveLogoAndProgressBarWrap clearfix">
        <div class="TicketsReserveLogo">
          <img src="../../assets/img/huileyouLogo.jpg" width="200" height="60">
          <router-link to="AgenciesHome"></router-link>
        </div>
        <!--进度条-->
        <div class="TicketsReserveProgressBar"></div>
      </div>
    </header>
    <!--预定内容-->
    <section class="TicketsReserveContent">
      <div class="TicketsReserveContentWrap">
        <div class="TicketsReserveContent clearfix">
          <!--内容左边-->
          <div class="TicketsReserveContentLeft">
            <div class="TicketsReserveContentLeftContent">
              <!--标题-->
              <div class="TicketsReserveContentLeftTitle">
                <h2><【途牛】毕棚沟景区门票>（含观光车票）</h2>
                <a href="javascript:;" class="active">预定须知<i></i></a>
                <div class="reserveDetails">
                  <div class="reserveDetailsReserve clearfix">
                    <strong>预定须知</strong>
                    <ul class="reserveDetailsReserveList">
                      <li>
                        <span>门票类型:</span>
                        <span>电子票</span>
                      </li>
                      <li>
                        <span>提前预定时间:</span>
                        <span>1天23点前</span>
                      </li>
                      <li>
                        <span>取票方式:</span>
                        <span>华棚沟景区游人服务中心票务中心</span>
                      </li>
                      <li>
                        <span>门票有效期:</span>
                        <span></span>
                      </li>
                      <li>
                        <span>入园方式:</span>
                        <span>短信换票入园</span>
                      </li>
                    </ul>
                  </div>
                  <div class="reserveDetailsOther clearfix">
                    <strong>其他说明</strong>
                    <ul class="reserveDetailsOtherList"></ul>
                  </div>
                </div>
              </div>
              <!--选择出游日期-->
              <div class="choiceOutTime">
                <div class="choiceOutTimeInput">
                  <span><em>*</em>出游日期:</span>
                  <input type="text">
                  <i></i>
                </div>
                <div class="choiceOutTimeCalendar">
                  <div class="lastTimeNext clearfix">
                    <a href="javascript:;" class="last"></a>
                    <span class="time">23343413</span>
                    <a href="javascript:;" class="next"></a>
                  </div>
                  <div class="weekListWrap">
                    <ul class="weekList clearfix">
                      <li>日</li>
                      <li>一</li>
                      <li>二</li>
                      <li>三</li>
                      <li>四</li>
                      <li>五</li>
                      <li>六</li>
                    </ul>
                  </div>
                  <!--日历-->
                  <div class="choiceOutTimeCalendarListWrap">
                    <ul class="choiceOutTimeCalendarList clearfix" v-html="str"></ul>
                  </div>
                </div>
                <!--选择人数-->
                <div class="selectBox">
                  <div class="peopleNumberBox clearfix">
                    <strong><i>*</i>出游人数:</strong>
                    <el-input-number
                      v-model="peopleNumber"
                      :min="1"
                      :max="999"
                      label="描述文字"
                      size="mini"
                      class="accumulation"
                    ></el-input-number>
                    <span>最多可预定999张</span>
                  </div>
                  <div class="distributionInformation clearfix">
                    <strong>配送信息:</strong>
                    <el-radio-group v-model="pickUp" class="distributionInformationBtn">
                      <el-radio :label="1">（门票自取）</el-radio>
                    </el-radio-group>
                    <span>地址:华棚沟景区游人服务中心票务中心</span>
                  </div>
                </div>
              </div>
            </div>
            <!--取票人信息-->
            <div class="theTouristInfromation">
              <h5>取票人/出游人信息</h5>
              <div class="fillInTheTouristInfromation">
                <div class="fillInTheTouristInfromationTitle">
                  <strong>常用出游人</strong>
                </div>
                <div class="fillInPeopleInfromation">
                  <strong class="fillInPeopleInfromationTitle">暂无常用出游人</strong>
                  <span class="ticketCollector">取票人</span>
                  <ul class="fillInInputList">
                    <li>
                      <strong><i>*</i>姓名:</strong>
                      <input type="text" placeholder="请填写姓名">
                    </li>
                    <li>
                      <strong><i>*</i>身份证:</strong>
                      <input type="text" placeholder="请填写证件号">
                    </li>
                    <li>
                      <strong><i>*</i>手机号码:</strong>
                      <input type="text" placeholder="用于接收出票短信">
                    </li>
                    <li>
                      <strong>邮箱:</strong>
                      <input type="text" placeholder="请填写邮箱">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--支付-->
            <div class="agreement">
              <el-checkbox v-model="checked">同意</el-checkbox>
              <a href="javascript:;">西岭雪山预订协议</a>
            </div>
            <div class="paymentOrder clearfix">
              <span>订单金额:<em>￥</em><strong>280</strong></span>
              <el-button class="paymentOrderSubmit">立即支付</el-button>
            </div>
          </div>
          <!--内容右边-->
          <div class="TicketsReserveContentRight">
            <div class="TicketsReserveContentRightTopBorder"></div>
            <div class="TicketsReserveContentRightContent">
              <div class="detailsOfCharges">
                <strong>费用明细 <em>(在线支付)</em></strong>
                <span>门票价格:<em>￥132332</em></span>
              </div>
              <div class="orderMoney">
                <strong>订单总金额:<em>￥<i>23232</i></em></strong>
                <a href="javascript:;">立即支付</a>
                <div class="border"></div>
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
  import $ from 'jquery'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        str: '',
        peopleNumber: '1',
        pickUp: 1,
        checked: false,
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      }
    },
    mounted() {
      let li = document.createElement(li)
      for (var i = 0; i < 42; i++) {
        this.str += `<li style="float: left;width:88px;height:62px;box-shadow: 0 0 1px #ccc inset;">
                  <span style="color: #000; padding-left: 10px; font: 14px/2 '微软雅黑';">${i}</span>
                  <strong style="color: #f60; font: 14px/2 '微软雅黑'; display: block; text-align: center;">${i}</strong>
                </li>`
    }
    }
  }
</script>
<style scoped>
  .TicketsReserveLogoAndProgressBar {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .TicketsReserveLogoAndProgressBarWrap {
    width: 1250px;
    margin: 0 auto;
  }

  .TicketsReserveLogo {
    width: 200px;
    position: relative;
    float: left;
  }

  .TicketsReserveLogo a {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .TicketsReserveProgressBar {
    float: right;
  }

  /*头部结束*/

  /*内容开始*/

  .TicketsReserveContent {
    width: 100%;
    padding-top: 40px;
    background-color: #f4f5f6;
    padding-bottom: 50px;
  }

  .TicketsReserveContentWrap {
    width: 1250px;
    margin: 0 auto;
  }

  /*内容左边*/
  .TicketsReserveContentLeft {
    width: 953px;
    float: left;
  }

  .TicketsReserveContentLeftContent {
    padding: 20px;
    border: 3px solid #ffc073;
    box-sizing: content-box;
  }

  /*内容右边*/
  .TicketsReserveContentRight {
    float: right;
  }

  .TicketsReserveContentLeftTitle > h2 {
    font: bold 22px/52px "微软雅黑";
    display: inline-block;
    color: #333;
  }

  .TicketsReserveContentLeftTitle > a {
    display: inline-block;
    font: 16px/52px "宋体";
    color: #ff8800;
    position: relative;
    padding-right: 10px;
  }

  .TicketsReserveContentLeftTitle > a.active i {
    transform: rotateZ(180deg);
  }

  .TicketsReserveContentLeftTitle i {
    transition: .5s;
    position: absolute;
    right: 0;
    top: 20px;
    border: 4px solid transparent;
    border-bottom-color: #ff8800;
    transform-origin: 4px 6px;
    transform: rotateZ(0);
  }

  .reserveDetails {
    width: 100%;
    border: 1px solid #ff8800;
    background-color: #fffce9;
    padding: 25px;
    display: none;
  }

  .reserveDetailsReserve strong,
  .reserveDetailsOther strong {
    font: 16px/26px "微软雅黑";
    float: left;
  }

  .reserveDetailsReserveList,
  .reserveDetailsOtherList {
    float: left;
    font: 14px/2 "微软雅黑";
    margin-left: 30px;
    color: #666;
  }

  .reserveDetailsReserveList span:nth-of-type(1),
  .reserveDetailsOtherList span:nth-of-type(1) {
    display: inline-block;
    width: 110px;
    text-align: left;
  }

  /*预定须知结束*/

  /*出游日期开始*/

  .choiceOutTime {
    padding: 40px;
    background-color: #fff;
  }

  .choiceOutTimeInput {
    position: relative;
  }

  .choiceOutTimeInput span {
    font: 14px/26px "微软雅黑";
  }

  .choiceOutTimeInput input {
    width: 285px;
    height: 36px;
    border: 1px solid #ddd;
    margin-left: 20px;
    padding: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .choiceOutTimeInput em {
    color: #f60;
  }

  .choiceOutTimeInput i {
    position: absolute;
    top: 7px;
    left: 350px;
    width: 19px;
    height: 20px;
    background: url("../../assets/img/calendar.png") no-repeat;
  }

  .choiceOutTimeCalendar {
    margin-left: 89.5px;
  }

  .lastTimeNext {
    width: 615px;
    height: 51px;
    border: 1px solid #ddd;
    position: relative;
    margin-top: -1px;
    border-top-right-radius: 5px;
  }

  .lastTimeNext > .last {
    width: 11px;
    height: 11px;
    position: absolute;
    top: 20px;
    left: 20px;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotateZ(-140deg);
  }

  .lastTimeNext > .next {
    width: 11px;
    height: 11px;
    position: absolute;
    top: 20px;
    right: 20px;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotateZ(45deg);
  }

  .lastTimeNext > .time {
    display: block;
    width: 100%;
    text-align: center;
    font: 12px/4 "微软雅黑";
  }

  .weekListWrap {
    width: 615px;
    overflow: hidden;
  }

  .weekList {
    width: 616px;
    font: 14px/30px "宋体";
  }

  .weekList > li {
    float: left;
    width: 88px;
    text-align: center;
    background-color: #535d63;
    color: #fff;
  }

  .choiceOutTimeCalendarList {
    width: 616px;
  }

  .choiceOutTimeCalendarListWrap {
    width: 615px;
  }

  .choiceOutTime .selectBox {
    font: 14px/40px "微软雅黑";
    margin-top: 20px;
    color: #666;
  }

  .peopleNumberBox i {
    color: #f60;
  }

  .peopleNumberBox > * {
    float: left;
  }

  .peopleNumberBox > .accumulation {
    margin: 5px 10px 0;
  }

  .distributionInformation > * {
    float: left;
  }

  .distributionInformationBtn {
    margin: 12px 10px 0;
  }

  /*取票人信息*/
  .theTouristInfromation {
    margin-top: 20px;
    border: 1px solid #ddd;
    border-top: 2px solid #b9b9b9;
    background-color: #fff;
  }

  .theTouristInfromation > h5 {
    font: bold 16px/3 "微软雅黑";
    background-color: #f8f8f8;
    padding-left: 20px;
  }

  .fillInTheTouristInfromation {
    padding: 10px 20px;
  }

  .fillInTheTouristInfromationTitle {
    font: 16px/2 "微软雅黑";
    border-bottom: 4px solid #eee;
    color: #333333;
  }

  .fillInPeopleInfromationTitle {
    display: block;
    width: 100%;
    text-align: center;
    font: 16px/3 "微软雅黑";
    color: #999999;
  }

  .ticketCollector {
    font: bold 14px/2 "微软雅黑";
    color: #ff8800;
  }

  .fillInInputList li {
    margin-bottom: 10px;
  }

  .fillInInputList strong {
    display: inline-block;
    width: 140px;
    font: 12px/40px "微软雅黑";
    text-align: right;
    margin-right: 10px;
  }

  .fillInInputList i {
    color: #f80;
  }

  .fillInInputList input {
    width: 300px;
    font: 12px/3 "微软雅黑";
    padding: 0 5px;
    border: 1px solid #ddd;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  /*支付订单*/

  .TicketsReserveContentLeft .agreement {
    font-size: 12px;
  }

  .TicketsReserveContentLeft .agreement a {
    display: inline-block;
    margin-left: 20px;
    color: #f80;
    line-height: 70px;
    font-family: "微软雅黑";
  }

  .TicketsReserveContentLeft .paymentOrder {
    border: 1px solid #ffdaac;
    background-color: #fffce9;
    font: 14px/80px "微软雅黑";
    color: #333;
    text-indent: 18px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .TicketsReserveContentLeft .paymentOrder em {
    color: #f80;
    padding-left: 10px;
  }

  .TicketsReserveContentLeft .paymentOrder strong {
    font-size: 20px;
    color: #f80;
  }

  .TicketsReserveContentLeft .paymentOrder > span {
    float: left;
  }

  .paymentOrderSubmit {
    float: right;
    background-color: #ff8800;
    color: #fff;
    margin: 20px 20px 0;
  }

  /*费用明细*/

  .TicketsReserveContentRightTopBorder {
    width: 240px;
    height: 8px;
    background: url("../../assets/img/border-top.png") no-repeat;
    -webkit-background-size: 240px 8px;
    background-size: 240px 8px;
    margin-bottom: -4px;
  }

  .TicketsReserveContentRightContent {
    width: 230px;
    margin: 0 auto;
    border: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    z-index: 2;
  }

  .detailsOfCharges {
    padding:10px;
  }

  .detailsOfCharges strong {
    font: bold 16px/3 "微软雅黑";
    display: block;
    text-align: center;
  }

  .detailsOfCharges strong em {
    font-weight: normal;
  }

  .detailsOfCharges span {
    font: 14px/3 "微软雅黑";
    text-align: center;
    display: block;
  }

  .detailsOfCharges span em {
    color: #f80;
    padding-left: 10px;
  }

  .TicketsReserveContentRightContent .orderMoney {
    border-top: 1px solid #ffebce;
    padding:10px;
    background-color: #fffce9;
    position: relative;
  }

  .TicketsReserveContentRightContent .orderMoney strong {
    display: block;
    text-align: center;
    font: bold 16px/2 "微软雅黑";
    color: #333;
  }

  .TicketsReserveContentRightContent .orderMoney strong em {
    padding-left:10px;
    color: #f80;
  }

  .TicketsReserveContentRightContent .orderMoney a {
    font: 16px/2 "微软雅黑";
    display: block;
    width:60%;
    text-align: center;
    color: #fff;
    background-color: #f80;
    margin: 10px auto;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .TicketsReserveContentRightContent .orderMoney .border {
    width: 228px;
    height:8px;
    background: url("../../assets/img/border.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    transform: rotateX(180deg);
    position: absolute;
    left:0;
    bottom:-1px;
  }


</style>
