<template>
  <div>
    <div class="MyOrderWrapContent">
      <ul class="MyOrderWrapContentNav clearfix">
        <li><a href="javascript:;">全部订单</a><span></span></li>
        <!--<li><a href="javascript:;">待付款(0)</a><span></span></li>-->
        <!--<li><a href="javascript:;">待出行/收货(0)</a><span></span></li>-->
        <!--<li><a href="javascript:;">待点评(0)</a><span></span></li>-->
      </ul>
      <div class="AllOrderContent">
        <!--订单导航条-->
        <div class="informationBar">
          <dl class="informationBarList clearfix">
            <dt>产品信息</dt>
            <dd>
              <select>
                <option value="AllOrder">全部订单</option>
              </select>
            </dd>
            <dd>数量</dd>
            <dd>时间</dd>
            <dd>订单金额</dd>
            <dd>状态</dd>
            <dd>操作</dd>
          </dl>
        </div>
        <!--所有订单内容-->
        <ul class="AllOrderInformtionContent">
          <li v-for="item in myTourOrderList">
            <div class="AllOrderInformtionContentAboutTime clearfix">
              <strong>下单时间: {{item.oi_CreateTime}}</strong>
              <span>订单号:  {{item.oi_OrderID}}</span>
            </div>
            <dl class="AllOrderInformtionContentAboutDetails clearfix">
              <dt>{{item.oi_OrderName}}</dt>
              <dd class="ticketType">机票</dd>
              <dd class="ticketSize">{{item.oi_Number}}张</dd>
              <dd class="ticketTime">{{item.oi_UseTime}}</dd>
              <dd class="money">￥1474</dd>
              <dd class="ticketState">
                <span>已完成</span>
                <a href="javascript:;">订单详情</a>
              </dd>
              <dd class="ticketDelete"><a href="javascript:;">删除</a></dd>
            </dl>
          </li>
        </ul>
        <!--分页-->
        <div class="block" style="float: right;">
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="4"
            layout="total, prev, pager, next"
            :total="total"
            v-show="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {

    data() {
      return {
        total:100
      }
    },
    computed: mapGetters([
      'myTourOrderList'
    ]),
    created(){
      this.initData(1)
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData(num)
      },
      initData(page) {
        let userID = JSON.parse(sessionStorage.getItem('user')).ui_UserCode
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "huiuserid": userID,
          "page": page?page:1,
          "rows": "5"
        };
        this.$store.dispatch('initMyTourOrder',options)
      },
      search() {
        this.initData(1)
      }
    },
    mounted(){
    }
  }
</script>
<style scoped>
  .MyOrderWrapContent {
    width: 990px;
  }

  .MyOrderWrapContentNav {
    font: bold 16px/50px "微软雅黑";
    border: 1px solid #eaeaea;
    background-color: #fff;
  }

  .MyOrderWrapContentNav > li {
    float: left;
  }

  .MyOrderWrapContentNav > li > a {
    float: left;
    padding: 0 30px;
    color: #3b2d22;
  }

  .MyOrderWrapContentNav span {
    float: left;
    width: 1px;
    height: 24px;
    background-color: #ddd;
    margin-top: 14px;
  }

  .informationBarList > * {
    float: left;
  }

  .informationBarList {
    font: 14px/47px "微软雅黑";
    background-color: #eee;
    color: #696969;
  }

  .informationBarList dt {
    width: 325px;
    text-indent: 25px;
  }

  .informationBarList dd {
    margin: 0 34px;
  }

  .AllOrderInformtionContent {
    padding: 0 20px;
    background-color: #fff;
    font: 14px/54px "微软雅黑";
  }

  .AllOrderInformtionContent > li {
    padding: 20px 0;
    box-shadow: 0 -1px #ededed;
  }

  .AllOrderInformtionContentAboutTime {
    color: #6e6868;
  }

  .AllOrderInformtionContentAboutTime > * {
    float: left;
  }

  .AllOrderInformtionContentAboutTime > span {
    margin-left: 45px;
  }

  .AllOrderInformtionContentAboutDetails > * {
    float: left;
  }

  .AllOrderInformtionContentAboutDetails > dt {
    width: 325px;
    text-indent: 50px;
  }

  .AllOrderInformtionContentAboutDetails > .ticketType {
    width: 120px;
    text-align: center;
  }

  .AllOrderInformtionContentAboutDetails > .ticketSize {
    width: 100px;
    text-indent: 45px;
  }

  .AllOrderInformtionContentAboutDetails > .money {
    width: 85px;
    text-align: center;
  }

  .AllOrderInformtionContentAboutDetails > .ticketState {
    width: 60px;
    text-align: center;
    font: 14px/22px "微软雅黑";
    margin: 0 35px;
  }

  .AllOrderInformtionContentAboutDetails > .ticketState > a {
    color: #40a85d;
  }

  .AllOrderInformtionContentAboutDetails > .ticketDelete > a {
    display: block;
    font: 12px/2 "微软雅黑";
    color: #646466;
    padding: 0 20px;
    border: 1px solid #cdcdcd;
    margin-top: 15px;
  }


</style>
