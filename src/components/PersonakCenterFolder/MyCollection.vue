<template>
  <div>
    <h4 class="MyCollectionTitle"><span></span>我的收藏</h4>
    <div class="MyCollectionTypeList clearfix">
      <a
        href="javascript:;"
        v-for="item,index in MyCollectionTypeList"
        :class="{active:index == ChangeMyCollectionTypeNum}"
        @click="ChangeMyCollectionType(index)"
      >{{item}}</a>
    </div>
    <!--产品信息-->
    <div class="ProductInformation">
      <div class="ProductInformationType clearfix">
        <span>产品信息</span>
        <span>价格</span>
        <span>操作</span>
      </div>
      <ul class="ProductInformationContent clearfix">
        <li>
          <div class="ProductInformationContentBox clearfix">
            <div class="ProductInformationContentBoxImg">
              <img src="../../assets/img/homePageImage.jpg" width="190" height="116">
              <strong>成都出发</strong>
            </div>
            <div class="ProductInformationContentBoxContent">
              <h5 class="ProductInformationContentBoxContentTitle">&lt;峨眉山祈福自由行酒景套餐&gt;入住TOWO上品酒店（峨眉山店）1晚，登峨眉，览巴蜀</h5>
              <a href="javascript:;">牛人专线</a>
              <div class="commentAndSatisfaction">
                <span>1111人点评</span>
                <span>89%满意</span>
              </div>
            </div>
          </div>
          <div class="ProductInformationPrice">￥<strong>198</strong> 起</div>
          <div class="ProductInformationOperation">
            <button>预定</button>
            <button>删除</button>
          </div>
        </li>
        <li>
          <div class="ProductInformationContentBox clearfix">
            <div class="ProductInformationContentBoxImg">
              <img src="../../assets/img/homePageImage.jpg" width="190" height="116">
              <strong>成都出发</strong>
            </div>
            <div class="ProductInformationContentBoxContent">
              <h5 class="ProductInformationContentBoxContentTitle">&lt;峨眉山祈福自由行酒景套餐&gt;入住TOWO上品酒店（峨眉山店）1晚，登峨眉，览巴蜀</h5>
              <a href="javascript:;">牛人专线</a>
              <div class="commentAndSatisfaction">
                <span>1111人点评</span>
                <span>89%满意</span>
              </div>
            </div>
          </div>
          <div class="ProductInformationPrice">￥<strong>198</strong> 起</div>
          <div class="ProductInformationOperation">
            <button>预定</button>
            <button>删除</button>
          </div>
        </li>
        <li>
          <div class="ProductInformationContentBox clearfix">
            <div class="ProductInformationContentBoxImg">
              <img src="../../assets/img/homePageImage.jpg" width="190" height="116">
              <strong>成都出发</strong>
            </div>
            <div class="ProductInformationContentBoxContent">
              <h5 class="ProductInformationContentBoxContentTitle">&lt;峨眉山祈福自由行酒景套餐&gt;入住TOWO上品酒店（峨眉山店）1晚，登峨眉，览巴蜀</h5>
              <a href="javascript:;">牛人专线</a>
              <div class="commentAndSatisfaction">
                <span>1111人点评</span>
                <span>89%满意</span>
              </div>
            </div>
          </div>
          <div class="ProductInformationPrice">￥<strong>198</strong> 起</div>
          <div class="ProductInformationOperation">
            <button>预定</button>
            <button>删除</button>
          </div>
        </li>
      </ul>
    </div>
    <!--当没有收藏的时候-->
    <div class="NoCollection" v-show="NoCollectionShow">
      您还没有收藏任何产品哦~<br>
      既然来了，就
      <router-link to="AgenciesHome">逛一逛</router-link>
      吧~
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        MyCollectionTypeList: [
          '全部',
          '跟团',
          '自由行',
          '邮轮',
          '自驾',
          '旅拍',
          '门票',
          '酒店',
          '当地玩乐',
          '签证',
          '团队游',
          '定制游'
        ],
        ChangeMyCollectionTypeNum: 0,
        NoCollectionShow: false
      }
    },
    methods: {
      initData() {
      },
      ChangeMyCollectionType(index) {
        this.ChangeMyCollectionTypeNum = index;
      }
    },
  }
</script>
<style scoped>
  .MyCollectionTitle {
    font: bold 16px/3 "微软雅黑";
    color: #2a372d;
  }

  .MyCollectionTitle span {
    display: inline-block;
    width: 4px;
    height: 15px;
    background-color: #00c45a;
    vertical-align: middle;
    margin-right: 10px;
  }

  .MyCollectionTypeList {
    font: bold 16px/20px "宋体";
    border-bottom: 2px solid #ccc;
  }

  .MyCollectionTypeList a {
    float: left;
    width: 78px;
    text-align: center;
    color: #5f5d68;
    position: relative;
    padding-bottom: 8px;
  }

  .MyCollectionTypeList a::before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 1px;
    height: 20px;
    background-color: #ccc;
  }

  .MyCollectionTypeList a.active {
    color: #30974e;
    border-bottom: 2px solid #30974e;
    margin-bottom: -2px;
  }

  .ProductInformation {
    margin-top: 10px;
  }

  .ProductInformationType {
    font: 12px/42px "微软雅黑";
  }

  .ProductInformationType > span {
    float: left;
    text-align: center;
    color: #7e7f81;
    background-color: #f6f6f6;
  }

  .ProductInformationType > span:nth-of-type(1),
  .ProductInformationContentBox {
    width: 600px;
  }

  .ProductInformationType > span:nth-of-type(2),
  .ProductInformationPrice {
    width: 133px;
  }

  .ProductInformationType > span:nth-of-type(3),
  .ProductInformationOperation {
    width: 161px;
  }

  .ProductInformationContent > li {
    margin-top: 20px;
    float: left;
    width: 100%;
  }

  .ProductInformationContent > li > div {
    float: left;
  }

  .ProductInformationContentBoxImg {
    position: relative;
    width: 190px;
    margin-right: 20px;
    float: left;
  }

  .ProductInformationContentBoxImg strong {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font: 14px/30px "微软雅黑";
    background-color: rgba(0, 0, 0, .5);
    text-align: center;
    color: #fff;
  }

  .ProductInformationContentBoxContent {
    width: 390px;
    float: left;
  }

  .ProductInformationContentBoxContentTitle {
    font: 14px/22px "微软雅黑";
    color: #2f414b;
    margin-bottom: 13px;
  }

  .ProductInformationContentBoxContentTitle:hover {
    color: #FFA833;
    cursor: pointer;
  }

  .ProductInformationContentBoxContent > a {
    font: 12px/32px "微软雅黑";
    color: #8bf5c5;
  }

  .commentAndSatisfaction {
    font: 12px/32px "微软雅黑";
  }

  .commentAndSatisfaction > span {
    display: inline-block;
    margin-right: 45px;
    color: #9f9daa;
  }

  .ProductInformationPrice {
    text-align: center;
    font: bold 14px/2 "微软雅黑";
    color: #f45209;
    margin-top: 30px;
  }

  .ProductInformationPrice > strong {
    font-size: 18px;
  }

  .ProductInformationOperation {
    text-align: center;
  }

  .ProductInformationOperation button {
    margin-top: 10px;
  }

  .ProductInformationOperation button:nth-of-type(1) {
    width: 100px;
    font: bold 14px/42px "微软雅黑";
    background-color: #fb8200;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #fff;
  }

  .ProductInformationOperation button:nth-of-type(2) {
    width: 100px;
    font: 14px/33px "微软雅黑";
    color: #9c9899;
    background-color: #fff;
    border: 1px solid #ddd;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .NoCollection {
    width: 300px;
    margin: 150px auto 0;
    text-align: center;
    font: 16px/30px "微软雅黑";
    color: #404040;
  }

  .NoCollection a {
    display: inline-block;
    color: #37c349;
  }

</style>
