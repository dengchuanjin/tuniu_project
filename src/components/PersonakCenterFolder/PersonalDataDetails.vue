<template>
    <div>
      <div class="personalDataDetailsWrap">
        <ul class="personalDataDetailsWrapNavList clearfix">
          <li><a href="javascript:;" class="active">基本信息</a></li>
        </ul>
        <ul class="personalDataDetailsWrapContentList clearfix">
          <li>
            <strong><i>*</i> 昵称:</strong>
            <input type="text">
          </li>
          <li>
            <strong><i>*</i> 姓名:</strong>
            <input type="text">
          </li>
          <li>
            <strong><i>*</i> 手机号:</strong>
            <input type="text">
          </li>
          <li>
            <strong>生日:</strong>
            <input type="text">
          </li>
          <li>
            <strong><i>*</i> 性别:</strong>
            <input type="text">
          </li>
          <li>
            <strong>邮箱:</strong>
            <input type="text">
          </li>
          <li>
            <strong><i>*</i> 常住地:</strong>
            <input type="text">
          </li>
          <li>
            <strong>详细地址:</strong>
            <input type="text">
          </li>
          <li>
            <strong>婚姻:</strong>
            <input type="text">
          </li>
          <li>
            <strong><i>*</i>职业:</strong>
            <input type="text">
          </li>
          <li>
            <strong>学历:</strong>
            <input type="text">
          </li>
        </ul>
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
<style scope>
  i {
    color: #f60;
  }

  .personalDataDetailsWrap {

  }

  .personalDataDetailsWrapNavList {
    font: bold 20px/55px "微软雅黑";
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

  .personalDataDetailsWrapNavList > li  {
    float: left;
    margin-bottom:-1px;
  }

  .personalDataDetailsWrapNavList > li > a {
    padding: 0 30px;
    display: block;
    border-right: 1px solid #dddddd;
  }
  .personalDataDetailsWrapNavList > li > .active {
    border-top: 4px solid #22c233;
    margin-top:-4px;
    background-color: #fff;
    color: #22c233;
  }
  .personalDataDetailsWrapContentList {
    font: 16px/3 "微软雅黑";
  }
  .personalDataDetailsWrapContentList>li>strong {
    display: inline-block;
    width:120px;
    text-align: right;
    color: #666;
  }
  .personalDataDetailsWrapContentList>li>input {
    width:200px;
    height:30px;
    padding:5px;
    border: 1px solid #ccc;
    margin-left:20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
