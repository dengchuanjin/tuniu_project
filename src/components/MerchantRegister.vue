<template>
  <div>
    <div id="MerchantRegisterWrap">
      <!--注册头部-->
      <div  class="MerchantRegisterWrapHeader clearfix">
        <div class="MerchantRegisterWrapHeaderLogoBox">
          <img src="../assets/img/huileyouLogo.jpg" width="300" height="70">
        </div>
        <div class="MerchantRegisterWrapHeaderHomePage">
          <a href="javascript:;">返回首页</a>
        </div>
      </div>
      <!--注册导航-->
      <div class="MerchantRegisterNavWrap">
        <div class="MerchantRegisterNav">
          <div class="MerchantRegisterNavContent clearfix">
            <a href="javascript:;">注册信息</a>
          </div>
        </div>
      </div>
      <!--注册表单-->
      <div class="MerchantRegisterTabel">

      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import MerchantRegister from '../assets/css/MerchantRegister.css'

  export default {
    name: '',
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
<style>
</style>
