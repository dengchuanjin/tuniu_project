<template>
  <div class="commentWrap">
    <div class="commentBox">
      <div class="HeadPortrait">
        <img src="../../assets/img/center.png" width="60" height="60">
        <strong>惠乐游</strong>
      </div>
      <div class="commentContent">
        <textarea id="commentContent"></textarea>
      </div>
      <div class="uploadPicture">点击上传图片</div>
    </div>
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
  .commentWrap {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .commentBox {
    width: 800px;
    background-color: #f6f6f6;
    margin: 0 auto;
  }

  #commentContent {
    width: 800px;
    height: 300px;
    resize: none;
    padding: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border-bottom:none;

  }
</style>
