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
                <ul class="weekList">
                  <li>日</li>
                  <li>一</li>
                  <li>二</li>
                  <li>三</li>
                  <li>四</li>
                  <li>五</li>
                  <li>六</li>
                </ul>
                <ul class="choiceOutTimeCalendarList">
                  <li>
                    <span></span>
                    <strong></strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--内容右边-->
          <div class="TicketsReserveContentRight"></div>
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
      initData() {
      },
      search() {
        this.initData()
      }
    },
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
  }

  .TicketsReserveContentWrap {
    width: 1250px;
    margin: 0 auto;
  }

  /*内容左边*/
  .TicketsReserveContentLeft {
    width: 953px;
    padding: 20px;
    border: 3px solid #ffc073;
    box-sizing: content-box;
    float: left;
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

  .lastTimeNext {
    width: 615px;
    height: 51px;
    border: 1px solid #ddd;
    position: relative;
    margin-left: 89.5px;
    margin-top: -1px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border-top-left-radius: 0;
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
    width:100%;
    text-align: center;
    font:12px/4 "微软雅黑";
  }




</style>
