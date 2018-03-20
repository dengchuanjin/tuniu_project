<template>
  <div>
    <!--头部-->
    <div class="parentChildHeaderWrap">
      <div class="parentChildHeader clearfix">
        <h2 @click="goHomePage">
          <img src="../../assets/img/center.png" height="60" width="60">
          <strong>依山酒店</strong>
        </h2>
        <router-link to="/Comment/HotelHomePage">返回首页</router-link>
      </div>
    </div>
    <!--content-->
    <section>
      <div class="imageBox"></div>
      <!--出发城市-->
      <div class="goCity">
        <strong>出发地城市</strong>
        <div class="goCityList">
          <a href="javascript:;" v-for="item,index in cityList" :key="index">{{item}}</a>
        </div>
      </div>
      <!---->
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        cityList: [
          '华东',
          '华北',
          '华南',
          '西部',
          '华中'
        ],
        scenicSpotList: [
          '安徽黄山',
          '泰安泰山',
          '青岛崂山',
          '南京紫金山',
          '迪庆香格里拉',
          '三亚凤凰岭',
          '厦门五老峰',
          '舟山普陀山'
        ],
      }
    },
    methods: {
      goHomePage() {
        this.$router.push({name: 'HotelHomePage'})
      }
    },
  }
</script>
<style scoped>
  /*头部*/
  .parentChildHeaderWrap {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .parentChildHeader {
    width: 1000px;
    margin: 0 auto;
  }

  .parentChildHeader > h2 {
    float: left;
  }

  .parentChildHeader > h2:hover {
    cursor: pointer;
  }

  .parentChildHeader strong {
    font: bold 30px/1 "宋体";
    vertical-align: bottom;
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .parentChildHeader > a {
    float: right;
    font: 16px/2 "微软雅黑";
    padding: 0 15px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    border: 1px solid #999;
    color: #999;
    margin-top: 10px;
  }

  .parentChildHeader > a:hover {
    border-color: #f60;
    color: #f60;
  }

  /*头部结束*/
</style>
