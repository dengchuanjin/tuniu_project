<template>
    <div>
      <div class="personakCenterWrap">
        <!--头-->
        <div class="personakCenterWrapHeader">
          <div class="personakCenterWrapHeaderContent clearfix">
            <div class="personakCenterWrapHeaderContentLogo">
              <img src="../assets/img/center.png" width="60" height="60">
              <strong>惠乐游个人中心</strong>
            </div>
            <ul class="personakCenterWrapHeaderContentNav">
              <li>
                <a href="javascript:;">会员首页</a>
              </li>
              <li>
                <a href="javascript:;">个人中心</a>
              </li>
            </ul>
            <div class="goHomePage">
              <router-link to="HueiLeYouTourHomePage">返回首页</router-link>
            </div>
          </div>
        </div>
        <!--内容-->
        <div class="personakCenterContentWrap clearfix">
          <!--左边导航-->
          <div class="personakCenterContentWrapLeftNav">
            <ul>
              <li class="personakCenterContentWrapLeftNavMyOrder">
                <a href="javascript:;"><strong>我的订单</strong><i></i></a>
                <ul class="MyOrderDetailsList">
                  <li><a href="javascript:;">旅游订单</a></li>
                  <li><a href="javascript;;">旅游订单券</a></li>
                </ul>
              </li>
              <li class="personakCenterType">
                <a href="javascript:;"><strong>个人中心</strong><i></i></a>
                <ul class="MyOrderDetailsList">
                  <li><a href="javascript:;">个人资料</a></li>
                  <li><a href="javascript;;">安全设置</a></li>
                  <li><a href="javascript:;">密码设置</a></li>
                  <li><a href="javascript;;">我的提问</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="personakCenterContentWrapRightContent">
            <router-view name="MyInformtion"></router-view>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import PersonalCenter from '../assets/css/PersonalCenter.css'

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
<style scope>
</style>
