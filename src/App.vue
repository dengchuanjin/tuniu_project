<template>
  <div id="app">
    <!--loading加载-->
    <div class="loadingMask" v-show="isLoading">
      <div class="loadingMaskBox"></div>
      <div class="loadingContentBox">
        <i></i>
        <p>拼命加载中</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters([
    'isLoading'
  ])
}
</script>

<style>
  /*加载遮罩*/
  .loadingMask .loadingContentBox {
    width: 100%;
    text-align: center;
    color: #409eff;
    position: absolute;
    z-index: 22;
    top: 50%;
  }

  .loadingMask .loadingContentBox i {
    width: 31px;
    height: 32px;
    background: url("./assets/img/loadingICon.png") no-repeat;
    display: block;
    margin: 0 auto 10px;
    animation: rotating 2s linear infinite;
  }
  .loadingMask .loadingMaskBox {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: .9;
  }

</style>
