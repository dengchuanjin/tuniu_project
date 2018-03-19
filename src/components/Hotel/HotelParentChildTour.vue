<template>
  <div>
    <div class="parentChildHeader">
      <h2>
        <img src="../../assets/img/center.png" height="60" width="60">
        <strong>亲子游</strong>
      </h2>
      <router-link to="/Comment/HotelHomePage">返回首页</router-link>
    </div>
    <section class="parentChildContent">
      <div>
        <img src="../../assets/img/children.png">
      </div>
      <div class="playTheBeach">
        <h4>玩海滩</h4>
        <ul>
          <li>
            <strong>返现5元</strong>
            <img src="../../assets/img/homePageImage.jpg" width="231" height="175">
            <a href="javascript:;">三亚海洋映像家庭驿站</a>
          </li>
        </ul>
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
    methods: {},
  }
</script>
<style scoped>
</style>
