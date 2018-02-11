<template>
  <div>
    <div class="AdmissionTickeHomePageWrap">
      <!--头部-->
      <div class="AdmissionTickeHomePageWrapNavAndPicture clearfix">
        <!--头部左面导航-->
        <div class="AdmissionTickeHomePageWrapNav">
          <ul class="AdmissionTickeHomePageWrapNavList">
            <li class="seasonSelection">
              <h5><img src="../../assets/img/icon-star.png" width="14" height="14">当季精选</h5>
              <div class="clearfix">
                <a href="javascript:;">新津花舞人间景区</a>
                <a href="javascript:;">上海迪士尼乐园</a>
                <a href="javascript:;">成都欢乐谷</a>
                <a href="javascript:;">文成公主</a>
                <a href="javascript:;">都江堰</a>
                <a href="javascript:;">成都海昌极地海洋世界</a>
                <a href="javascript:;">会仙楼暑期特惠</a>
              </div>
            </li>
            <li class="surroundingCities">
              <h5><img src="../../assets/img/icon-location.png" width="12" height="15">周边城市</h5>
              <div class="clearfix">
                <a href="javascript:;">阿坝</a>
                <a href="javascript:;">绵阳</a>
                <a href="javascript:;">乐山</a>
                <a href="javascript:;">甘孜</a>
                <a href="javascript:;">宜宾</a>
                <a href="javascript:;">自贡</a>
                <a href="javascript:;">广元</a>
                <a href="javascript:;">凉山</a>
                <a href="javascript:;">雅安</a>
                <a href="javascript:;">广安</a>
              </div>
            </li>
            <li class="hotCities">
              <h5><img src="../../assets/img/icon-fire.png" width="12" height="15">热门城市</h5>
              <div class="clearfix">
                <a href="javascript:;">南京</a>
                <a href="javascript:;">广州</a>
                <a href="javascript:;">香港</a>
                <a href="javascript:;">成都</a>
                <a href="javascript:;">深圳</a>
                <a href="javascript:;">北京</a>
                <a href="javascript:;">沈阳</a>
                <a href="javascript:;">苏州</a>
                <a href="javascript:;">杭州</a>
                <a href="javascript:;">更多城市>></a>
              </div>
            </li>
            <li class="themeOfPlay">
              <h5><img src="../../assets/img/icon-baloon.png" width="11" height="13">游玩主题</h5>
              <div class="clearfix">
                <a href="javascript:;">名胜风光</a>
                <a href="javascript:;">赏花田园</a>
                <a href="javascript:;">古镇园林</a>
                <a href="javascript:;">主题乐园</a>
                <a href="javascript:;">家庭亲子</a>
                <a href="javascript:;">演出表演</a>
              </div>
            </li>
          </ul>
        </div>
        <!--头部右面轮播-->
        <div class="AdmissionTickeHomePageWrapPicture">
          <div class="block">
            <el-carousel height="370px">
              <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <!--内容-->
      <section class="AdmissionTickeHomePageWrapContent">
        <!--身边景点-->
        <div class="AdmissionTickeAsightsAround">
          <!--标题和导航-->
          <div class="AdmissionTickeAsightsAroundTitel clearfix">
            <h2>身边景点</h2>
            <ul class="AdmissionTickeAsightsAroundTitelList">
              <li>
                <a href="javascript:;" class="active">精选</a>
              </li>
              <li>
                <a href="javascript:;">成都</a>
              </li>
              <li>
                <a href="javascript:;">重庆</a>
              </li>
              <li>
                <a href="javascript:;">阿坝</a>
              </li>
              <li>
                <a href="javascript:;">乐山</a>
              </li>
              <li>
                <a href="javascript:;">南充</a>
              </li>
              <li>
                <a href="javascript:;">甘孜</a>
              </li>
            </ul>
            <div class="AdmissionTickeAsightsAroundTitelMore">
              <a href="javascript:;">更多景点></a>
            </div>
          </div>
          <!--类型与展示-->
          <div class="AdmissionTickeAsightsAroundContent clearfix">
            <!--门票类型-->
            <div class="AdmissionTickeAsightsAroundContentType">
              <ul>
                <li class="hotSpring">
                  <a href="javascript:;">温泉</a>
                </li>
                <li class="ancientTownGarden">
                  <a href="javascript:;">古镇园林</a>
                </li>
                <li class="aScenicSpot">
                  <a href="javascript:;">名胜风光</a>
                </li>
              </ul>
              <ul>
                <li class="themePark">
                  <a href="javascript:;">主题乐园</a>
                </li>
                <li class="performance">
                  <a href="javascript:;">演出表演</a>
                </li>
                <li class="lookAtMore">
                  <a href="javascript:;"><img src="../../assets/img/icon-readmore.png" width="50" height="60">查看更多</a>
                </li>
              </ul>
            </div>
            <!--门票展示-->
            <div class="AdmissionTickeAsightsAroundContentShow">
              <ul class="AdmissionTickeAsightsAroundContentShowList clearfix">
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
                <li>
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>西岭雪山</strong>
                    <span>￥20起</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--热门目的地-->
        <div class="AdmissionTickeHotDestination">
          <div class="AdmissionTickeHotDestinationTitle">
            <h2>热门目的地</h2>
          </div>
          <div class="AdmissionTickeHotDestinationContent">
            <ul class="AdmissionTickeHotDestinationList clearfix">
              <li>
                <img src="../../assets/img/homePageImage.jpg" width="390" height="160">
                <div></div>
                <span>上海迪士尼</span>
              </li>
              <li>
                <img src="../../assets/img/homePageImage.jpg" width="390" height="160">
                <div></div>
                <span>上海迪士尼</span>
              </li>
              <li>
                <img src="../../assets/img/homePageImage.jpg" width="390" height="160">
                <div></div>
                <span>上海迪士尼</span>
              </li>
              <li>
                <img src="../../assets/img/homePageImage.jpg" width="390" height="160">
                <div></div>
                <span>上海迪士尼</span>
              </li>
              <li>
                <img src="../../assets/img/homePageImage.jpg" width="390" height="160">
                <div></div>
                <span>上海迪士尼</span>
              </li>
              <li>
                <img src="../../assets/img/homePageImage.jpg" width="390" height="160">
                <div></div>
                <span>上海迪士尼</span>
              </li>
            </ul>
          </div>
        </div>
        <!--境外景点-->
        <div class="overseasScenicSpots">
          <div class="overseasScenicSpotsTitle clearfix">
            <h2>境外景点</h2>
            <ul class="overseasScenicSpotsTitleNavList">
              <li><a href="javascript:;" class="active">港澳台</a></li>
              <li><a href="javascript:;">日本</a></li>
              <li><a href="javascript:;">东南亚</a></li>
              <li><a href="javascript:;">美洲</a></li>
              <li><a href="javascript:;">澳新</a></li>
              <li><a href="javascript:;">欧洲</a></li>
              <li><a href="javascript:;">中东非</a></li>
            </ul>
            <div class="overseasScenicSpotsTitleMore">
              <a href="javascript:;">更多景点></a>
            </div>
          </div>
          <!--境外景点展示-->
          <div class="overseasScenicSpotsContent">
            <ul class="overseasScenicSpotsContentList clearfix">
              <li>
                <div class="overseasScenicSpotsContentImgBox">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                  <strong></strong>
                  <span>满意度:99%</span>
                </div>
                <div class="overseasScenicSpotsContentcontentBox">
                  <strong>香港迪士尼乐园</strong>
                  <span>￥66起</span>
                </div>
              </li>
              <li>
                <div class="overseasScenicSpotsContentImgBox">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                  <strong></strong>
                  <span>满意度:99%</span>
                </div>
                <div class="overseasScenicSpotsContentcontentBox">
                  <strong>香港迪士尼乐园</strong>
                  <span>￥66起</span>
                </div>
              </li>
              <li>
                <div class="overseasScenicSpotsContentImgBox">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                  <strong></strong>
                  <span>满意度:99%</span>
                </div>
                <div class="overseasScenicSpotsContentcontentBox">
                  <strong>香港迪士尼乐园</strong>
                  <span>￥66起</span>
                </div>
              </li>
              <li>
                <div class="overseasScenicSpotsContentImgBox">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                  <strong></strong>
                  <span>满意度:99%</span>
                </div>
                <div class="overseasScenicSpotsContentcontentBox">
                  <strong>香港迪士尼乐园</strong>
                  <span>￥66起</span>
                </div>
              </li>
              <li>
                <div class="overseasScenicSpotsContentImgBox">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                  <strong></strong>
                  <span>满意度:99%</span>
                </div>
                <div class="overseasScenicSpotsContentcontentBox">
                  <strong>香港迪士尼乐园</strong>
                  <span>￥66起</span>
                </div>
              </li>
              <li>
                <div class="overseasScenicSpotsContentImgBox">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="110">
                  <strong></strong>
                  <span>满意度:99%</span>
                </div>
                <div class="overseasScenicSpotsContentcontentBox">
                  <strong>香港迪士尼乐园</strong>
                  <span>￥66起</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--合作景区-->
        <div class="cooperativeScenicSpot">
          <div class="cooperativeScenicSpotTitle">
            <h2>合作景区</h2>
          </div>
          <div class="cooperativeScenicSpotContent">
            <ul class="cooperativeScenicSpotContentList clearfix">
              <li>
                <a href="javascript:;">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="98">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="98">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="98">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="98">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="98">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/img/homePageImage.jpg" width="188" height="98">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
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
  .AdmissionTickeHomePageWrap {
    width: 1190px;
    margin: 20px auto;
    padding-bottom:100px;
  }

  /*头部左边导航开始*/
  .AdmissionTickeHomePageWrapNav {
    float: left;
    width: 268px;
    height: 370px;
    padding: 4px 20px 10px;
    border: 2px solid #ff6600;
    background-color: #fff3ed;
  }

  .AdmissionTickeHomePageWrapNav a {
    color: #666;
    margin-right: 10px;
    float: left;
    font: 12px/26px "宋体";
  }

  .AdmissionTickeHomePageWrapNav a:hover {
    color: #f60;
  }

  .AdmissionTickeHomePageWrapNav h5 {
    font: bold 14px/20px "微软雅黑";
    color: #ab4400;
  }

  .AdmissionTickeHomePageWrapNavList li {
    margin-top: 10px;
  }

  .AdmissionTickeHomePageWrapNavList img {
    margin: -4px 5px 0 0;
  }

  /*头部左边导航结束*/
  /*头部右边轮播开始*/
  .AdmissionTickeHomePageWrapPicture {
    float: right;
    height: 370px;
    width: 888px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*头部右边轮播结束*/

  /*头部结束*/

  /*内容部分*/
  .AdmissionTickeHomePageWrapContent {
    margin-top: 35px;
  }

  /*身边景点*/
  /*身边景点Title开始*/
  .AdmissionTickeAsightsAroundTitel {
    border-bottom: 2px solid #07afab;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .AdmissionTickeAsightsAroundTitel h2 {
    font: bold 20px/24px "微软雅黑";
    color: #07afab;
    float: left;
  }

  .AdmissionTickeAsightsAroundTitelList {
    float: left;
    margin-left: 90px;
    font: 14px/24px "宋体";
  }

  .AdmissionTickeAsightsAroundTitelList li {
    float: left;
    margin-right: 5px;
  }

  .AdmissionTickeAsightsAroundTitelList .active {
    font-weight: bold;
    color: #fff;
    background-color: #07afab;
  }

  .AdmissionTickeAsightsAroundTitelList a {
    padding: 0 20px;
    color: #666;
  }

  .AdmissionTickeAsightsAroundTitelMore {
    float: right;
    font: 12px/20px "微软雅黑";
  }

  .AdmissionTickeAsightsAroundTitelMore a {
    color: #999;
  }

  /*身边景点Title结束*/

  /*身边景点内容开始*/
  .AdmissionTickeAsightsAroundContentType {
    float: left;
    height: 365px;
  }

  .AdmissionTickeAsightsAroundContentType ul {
    float: left;
    width: 95px;
  }

  .AdmissionTickeAsightsAroundContentType a {
    color: #fff;
    width: 100%;
    font-size: 16px;
    text-align: center;
  }

  .AdmissionTickeAsightsAroundContentType a:hover {
    opacity: .5;
  }

  .AdmissionTickeAsightsAroundContentType .hotSpring {
    border-bottom: 1px dashed #166877;
    border-right: 1px dashed #166877;
    background-color: #24adc6;
    line-height: 94px;
  }

  .AdmissionTickeAsightsAroundContentType .ancientTownGarden {
    line-height: 134px;
    background-color: #0fa8a9;
    border-bottom: 1px dashed #166877;
    border-right: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .aScenicSpot {
    line-height: 134px;
    background-color: #50c389;
    border-bottom: 1px dashed #166877;
    border-right: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .themePark {
    line-height: 134px;
    background-color: #0abda6;
    border-bottom: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .performance {
    line-height: 134px;
    background-color: #24adc6;
    border-bottom: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .lookAtMore {
    height: 95px;
    border-bottom: 1px dashed #166877;
    line-height: 1;
    background: url("../../assets/img/readmore-bg.png") no-repeat -40px -80px;
  }

  .AdmissionTickeAsightsAroundContentType .lookAtMore a {
    height: 100%;
    font-size: 12px;
  }

  .AdmissionTickeAsightsAroundContentType .lookAtMore img {
    display: block;
    padding-top: 10px;
    margin: 0 auto;
  }

  /*景点门票类型结束*/

  /*门票展示开始*/

  .AdmissionTickeAsightsAroundContentShow {
    width: 990px;
    float: left;
    margin-left: 7px;
  }

  .AdmissionTickeAsightsAroundContentShowList li {
    width: 188px;
    height: 175px;
    margin: 0 0 15px 10px;
    box-shadow: 3px 3px #ccc;
    float: left;
  }

  .AdmissionTickeAsightsAroundContentShowList li:hover {
    cursor: pointer;
  }

  .AdmissionTickeAsightsAroundContentShowList li:hover .AdmissionTickeAsightsAroundContentShowContentBox strong {
    color: #f60;
  }

  .AdmissionTickeAsightsAroundContentShowImgBox {
    position: relative;
  }

  .AdmissionTickeAsightsAroundContentShowImgBox div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    opacity: .2;
    height: 24px;
  }

  .AdmissionTickeAsightsAroundContentShowImgBox span {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #cccccc;
    font: 12px/2 "微软雅黑";
    margin-left: 10px;

  }

  .AdmissionTickeAsightsAroundContentShowContentBox {
    padding: 7px 0 0 10px;
    font: 15px/2 "微软雅黑";
    background-color: #fff;
  }

  .AdmissionTickeAsightsAroundContentShowContentBox strong {
    display: block;
    color: #404040;
  }

  .AdmissionTickeAsightsAroundContentShowContentBox span {
    display: block;
    color: #ff6600;
  }

  /*门票展示开始结束*/

  /*身边景点结束*/

  /*热门目的地开始*/

  .AdmissionTickeHotDestinationTitle {
    font: bold 20px/35px "微软雅黑";
    color: #e15b38;
    border-bottom: 2px solid #e15b38;
  }

  .AdmissionTickeHotDestinationContent {
    width: 1190px;
    overflow: hidden;
  }

  .AdmissionTickeHotDestinationList {
    width: 1200px;
  }

  .AdmissionTickeHotDestinationList li {
    margin: 10px 10px 0 0;
    float: left;
    position: relative;
  }

  .AdmissionTickeHotDestinationList div {
    width: 100%;
    height: 32px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    opacity: .3;
  }

  .AdmissionTickeHotDestinationList span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    font: 12px/32px "微软雅黑";
    text-align: center;
  }

  .AdmissionTickeHotDestinationList li:hover {
    cursor: pointer;
  }

  .AdmissionTickeHotDestinationList li:hover span {
    color: #f60;
  }

  /*热门目的地结束*/

  /*境外景点开始*/

  .overseasScenicSpots {
    margin-top: 24px;
  }

  .overseasScenicSpotsTitle {
    border-bottom: 2px solid #935db1;
    padding-bottom: 10px;
  }

  .overseasScenicSpotsTitle h2 {
    float: left;
    font: bold 20px/24px "微软雅黑";
    color: #935db1;
  }

  .overseasScenicSpotsTitleNavList {
    float: left;
    margin-left: 90px;
    font: 14px/24px "宋体";
  }

  .overseasScenicSpotsTitleNavList li {
    float: left;
    margin-right: 5px;
  }

  .overseasScenicSpotsTitleNavList li .active {
    background-color: #935db1;
    color: #fff;
    font-weight: bold;
  }

  .overseasScenicSpotsTitleNavList li a {
    padding: 0 20px;
    color: #666;
  }

  .overseasScenicSpotsTitleMore {
    float: right;
    font: 12px/20px "微软雅黑";
  }

  .overseasScenicSpotsTitleMore a {
    color: #999;
  }

  /*境外景点标题结束*/

  /*境外景点图片开始*/

  .overseasScenicSpotsContent {
    margin-top: 10px;
    width: 1190px;
    }

  .overseasScenicSpotsContentList {
    width: 1200px;
  }

  .overseasScenicSpotsContentList li {
    border: 1px solid #ccc;
    width: 188px;
    box-sizing: content-box;
    margin-right: 10px;
    box-shadow: 2px 3px #ccc;
    float: left;
  }

  .overseasScenicSpotsContentList li:hover {
    border-color: #f60;
    cursor: pointer;
  }

  .overseasScenicSpotsContentList li:hover .overseasScenicSpotsContentcontentBox strong {
    color: #f60;
  }

  .overseasScenicSpotsContentImgBox {
    position: relative;
  }

  .overseasScenicSpotsContentImgBox strong {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: .3;
    height: 24px;
  }

  .overseasScenicSpotsContentImgBox span {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #ccc;
    font: 12px/2 "宋体";
    margin-left: 10px;
  }

  .overseasScenicSpotsContentcontentBox {
    padding-left: 10px;
  }

  .overseasScenicSpotsContentcontentBox strong {
    display: block;
    font: 15px/2 "微软雅黑";
    color: #404040;
  }

  .overseasScenicSpotsContentcontentBox span {
    font: 14px/2 "微软雅黑";
    color: #fe6600;
  }

  /*境外景点结束*/

  /*合作景区开始*/

  .cooperativeScenicSpot {
    margin-top: 20px;
  }

  .cooperativeScenicSpotTitle {
    border-bottom: 2px solid #333;
    margin-bottom: 15px;
  }

  .cooperativeScenicSpotTitle h2 {
    font: bold 20px/2 "微软雅黑";
    color: #333;
  }

  .cooperativeScenicSpotContent {
    width: 1190px;
  }

  .cooperativeScenicSpotContentList {
    width: 1200px;
  }

  .cooperativeScenicSpotContentList li {
    float: left;
    margin-right:10px;
    box-shadow: 2px 2px #ccc;
  }

  .cooperativeScenicSpotContentList li a {
    border: 1px solid #ccc;
  }

  .cooperativeScenicSpotContentList li a:hover {
    border-color: #f60;
  }

  /*合作景区结束*/
</style>
