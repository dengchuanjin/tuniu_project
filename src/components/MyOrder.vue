<template>
  <div>
    <div id="MyOrderWrap">
      <!--头部-->
      <header class="MyOrderWrapHeader">
        <div class="clearfix">
          <div class="MyOrderWrapHeaderLogo">
            <img src="../assets/img/huileyouLogo.jpg" width="300" height="70">
            <router-link to="HueiLeYouTourHomePage"></router-link>
          </div>
          <!--进度条-->
          <div class="MyOrderWrapHeaderProgressBar">

          </div>
        </div>
      </header>
      <!--订单详情-->
      <section id="MyOrderWrapContentWrap">
        <div class="MyOrderWrapContent clearfix">
          <div class="MyOrderWrapContentDetails">
            <!--订单信息-->
            <div class="MyOrderWrapContentDetailsInformtion">
              <h4><i></i>订单信息</h4>
              <div class="MyOrderWrapContentDetailsInformtionContent">
                <h5>{{orderInfo.title}}</h5>
                <ul class="MyOrderWrapContentDetailsInformtionContentList">
                  <li>
                    <strong>出发城市</strong>
                    <span>{{orderInfo.provinceValue}}</span>
                  </li>
                  <li>
                    <strong>出发日期</strong>
                    <span>{{orderInfo.DayValue}}</span>
                  </li>
                  <li>
                    <strong>成人</strong>
                    <span class="money">{{orderInfo.adultNumber}} x ￥{{orderInfo.adultPrice}}</span>
                  </li>
                  <li v-show="orderInfo.childPrice">
                    <strong>儿童</strong>
                    <span class="money">{{orderInfo.childNumber}} x ￥{{orderInfo.childPrice}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--联系人信息-->
            <div class="MyOrderWrapContentDetailsPeopleInformtion">
              <h4><i></i>联系人信息</h4>
              <ul class="MyOrderWrapContentDetailsPeopleInformtionList">
                <li>
                  <span>联系人<i>*</i></span>
                  <input type="text">
                </li>
                <li>
                  <span>手机<i>*</i></span>
                  <input type="text">
                </li>
                <li>
                  <span>邮箱<i>*</i></span>
                  <input type="text">
                </li>
                <li>
                  <span>留言</span>
                  <input type="text" placeholder="特殊需求请留言">
                </li>
              </ul>
            </div>
            <!--出游人信息-->
            <div class="MyOrderWrapContentDetailsExcursionInformtion">
              <h4><i></i>出游人信息<span>也可以下单后补充</span></h4>
              <ul class="InformtionList" v-for="item in orderInfo.adultArr">
                <li class="clearfix">
                  <span>第{{item+1}}位</span>
                  <div class="InformtionListDetails">
                    <ul class="InformtionListDetailsList">
                      <li>
                        <strong><i>*</i>中文姓名:</strong>
                        <input type="text" placeholder="如:张三">
                      </li>
                      <li>
                        <strong> <i>*</i>证件类型:</strong>
                        <el-select size="mini" placeholder="请选择证件类型">
                          <!--<el-option-->
                          <!--v-for="item in options"-->
                          <!--:key="item.value"-->
                          <!--:label="item.label"-->
                          <!--:value="item.value">-->
                          <!--</el-option>-->
                        </el-select>
                        <input type="text" placeholder="证件号码">
                      </li>
                      <li>
                        <strong><i>*</i>性别:</strong>
                        <el-select size="mini">
                          <!--<el-option-->
                          <!--v-for="item in options"-->
                          <!--:key="item.value"-->
                          <!--:label="item.label"-->
                          <!--:value="item.value">-->
                          <!--</el-option>-->
                        </el-select>
                      </li>
                    </ul>
                  </div>
                  <a href="javascript:;" class="InformtionListClear">清空</a>
                </li>
              </ul>
              <div class="NoFillInWrap clearfix">
                <a href="javascript:;" class="NoFillIn">暂不填写</a>
              </div>
            </div>
            <!--提交订单-->
            <div class="MyOrderWrapContentDetailsSubmit clearfix">
              <div class="MyOrderWrapContentDetailsSubmitWrap">
                <span>订单金额:</span>
                <strong><em>￥</em>10000</strong>
                <a href="javascript:;">提交订单</a>
              </div>
            </div>
          </div>
          <!--结算信息-->
          <div class="MyOrderWrapContentMoney">
            <div class="MyOrderWrapContentMoneyBorder"></div>
            <div class="MyOrderWrapContentMoneyInformtion">
              <h4>结算信息</h4>
              <ul class="MyOrderWrapContentMoneyList">
                <li class="clearfix">
                  <strong>成人</strong>
                  <span class="money">￥ 10000x2</span>
                </li>
                <li class="clearfix">
                  <strong>儿童</strong>
                  <span class="money">￥ 10000x2</span>
                </li>
              </ul>
            </div>
            <div class="MyOrderWrapContentOrderMoney clearfix">
              <strong>订单金额:</strong>
              <span class="money"><em>￥</em>20000</span>
              <div class="MyOrderWrapContentOrderMoneyBottomBg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Myorder from '../assets/css/MyOrder.css'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        orderInfo:{}
      }
    },
    created(){
      this.orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
      this.orderInfo.adultArr = []
      for(var i=0;i<this.orderInfo.adultNumber;i++){
        this.orderInfo.adultArr.push(i)
      }
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
<style scope>
</style>
