<template>
  <div>
    <div class="HotelHomePageWrap">
      <div class="HotelHomePageWrapHeader">
        <!--轮播图-->
        <div class="HotelHomePageWrapHeaderCarouselFigure">
          <ul class="HotelHomePageWrapHeaderCarouselFigureList">
            <li>
              <a href="javascript:;"></a>
            </li>
          </ul>
        </div>
        <!--轮播图切换-->
        <div class="transformCarouselFigure">
          <div class="transformCarouselFigureProp"></div>
          <div class="transformCarouselFigureNext"></div>
        </div>
        <!--轮播图介绍-->
        <div class="PictureInfromtionWrap">
          <div class="PictureInfromtion">
            <span class="PictureInfromtionNum"><strong>4</strong>/9</span>
            <strong class="PictureInfromtionName">大连金石滩</strong>
            <span class="PictureInfromtionDetails">一座神力雕塑公园</span>
          </div>
        </div>
        <!--服务保障-->
        <div class="serviceAndGuarantee">
          <div class="serviceAndGuaranteeMask"></div>
          <ul class="serviceAndGuaranteeList clearfix">
            <li>
              <a href="javascript:;" class="serviceHaveGuarantee"><i></i>服务有保障</a>
            </li>
            <li>
              <a href="javascript:;" class="priceHaveGuarantee"><i></i>价格有保障</a>
            </li>
            <li>
              <a href="javascript:;" class="checkHaveGuarantee"><i></i>入住有保障</a>
            </li>
            <li>
              <a href="javascript:;" class="typeHaveGuarantee"><i></i>种类有保障</a>
            </li>
          </ul>
        </div>
        <!--酒店收索框-->
        <div class="HotelQuery">
          <input type="text" placeholder="目的地/景点/酒店">
          <a href="javascript:;"></a>
        </div>
      </div>
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
  .HotelHomePageWrap {
    width: 100%;
    overflow: hidden;
  }

  .HotelHomePageWrapHeader {
    height: 550px;
    position: relative;
  }

  /*轮播图*/

  .HotelHomePageWrapHeaderCarouselFigure {
    width: 100%;
  }

  .HotelHomePageWrapHeader:hover .transformCarouselFigureProp {
    cursor: pointer;
    left: 0;
  }

  .HotelHomePageWrapHeader:hover .transformCarouselFigureNext {
    cursor: pointer;
    right: 0;
  }

  .HotelHomePageWrapHeaderCarouselFigureList li {
    width: 100%;
    float: left;
  }

  .HotelHomePageWrapHeaderCarouselFigureList li a {
    display: block;
    width: 100%;
    height: 550px;
    background: url("../assets/img/hotelBg.jpg") no-repeat center top;
    -webkit-background-size: cover;
    background-size: cover;
  }

  /*轮播切换*/

  .transformCarouselFigureProp {
    transition: .3s;
    width: 70px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: -70px;
    transform: translateY(-100px);
    background: url("../assets/img/HotelImage-icon.png") no-repeat;
  }

  .transformCarouselFigureNext {
    transition: .3s;
    width: 70px;
    height: 100px;
    position: absolute;
    top: 50%;
    right: -70px;
    transform: translateY(-100px);
    background: url("../assets/img/HotelImage-icon.png") no-repeat -79px 0;
  }

  /*轮播图片介绍*/

  .PictureInfromtionWrap {
    width: 100%;
    position: absolute;
    bottom: 70px;
    left: 0;
  }

  .PictureInfromtion {
    text-align: right;
    float: right;
    margin-right: 20px;
  }

  .PictureInfromtionNum {
    color: #fff;
    font: 16px/1.5 "微软雅黑";
    display: block;
  }

  .PictureInfromtionNum strong {
    font-size: 25px;
    font-weight: bold;
  }

  .PictureInfromtionName {
    font: bold 16px/26px "微软雅黑";
    color: #fff;
    display: block;
  }

  .PictureInfromtionDetails {
    font: 16px/26px "微软雅黑";
    color: #fff;
    display: block;
  }

  /*服务保障*/

  .serviceAndGuarantee {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .serviceAndGuaranteeMask {
    height: 50px;
    width: 100%;
    background-color: #000;
    opacity: .3;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .serviceAndGuaranteeList {
    text-align: center;
    width: 1190px;
    margin: 0 auto;
    font: 18px/50px "宋体";
  }

  .serviceAndGuaranteeList li {
    display: inline-block;
    margin-left: 85px;
  }

  .serviceAndGuaranteeList a {
    position: relative;
    color: #fff;
    padding-left: 45px;
  }

  .serviceAndGuaranteeList a i {
    position: absolute;
    top: 5px;
    left: 0;
    width: 38px;
    height: 38px;
    background-image: url("../assets/img/hotelServiceAndGuarantee-icon.png");
    background-repeat: no-repeat;
  }

  .serviceAndGuaranteeList a:hover {
    color: #4ece5a;
  }

  .serviceAndGuaranteeList a:hover i {
    background-position-y: -56px;
  }

  .HotelQuery {
    position: absolute;
    top: 0;
    left: 0;
  }

  .serviceHaveGuarantee i {
    background-position: -4px -2px;
  }

  .priceHaveGuarantee i {
    background-position: -53px -2px;
  }

  .checkHaveGuarantee i {
    background-position: -102px -2px;
  }

  .typeHaveGuarantee i {

    background-position: -151px -2px;
  }

  /*服务保障结束*/

  /*酒店输入框*/


</style>
