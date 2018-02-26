<template>
  <div>
    <div class="searchHotelWrap">
      <div class="searchHotelWrapContent">
        <!--搜索栏-->
        <ul class="searchHotel clearfix">
          <li style="position: relative;">
            <span>目的地</span>
            <el-input style="width: 175px;" placeholder="请输入目的地" @focus="changeCity"></el-input>
            <div class="destinationBox">
              <strong>热门城市（可直接输入城市或城市拼音）</strong>
              <!--目的地类型选择-->
              <ul class="destinationTypeList clearfix">
                <li v-for="item,index in destinationTypeList">
                  <a href="javascript:;" @click="changeClass(index)" :class="{active:index==n}">{{item}}</a>
                </li>
              </ul>
              <!--目的地-->
              <div class="hotCityList clearfix">
                <a href="javascript:;" v-for="item,index in hotCityList">{{item}}</a>
              </div>
              <div class="HongKongMacaoAndTaiwan">
                <a href="javascript:;">香港</a>
                <a href="javascript:;">澳门</a>
                <strong>台湾地区</strong>
                <ul class="taiwan">
                  <li class="clearfix">
                    <strong>北部 : </strong>
                    <a href="javascript:;">台北</a>
                    <a href="javascript:;">新北</a>
                    <a href="javascript:;">基隆</a>
                    <a href="javascript:;">桃园</a>
                    <a href="javascript:;">新竹</a>
                  </li>
                  <li class="clearfix">
                    <strong>中部 : </strong>
                    <a href="javascript:;">台中</a>
                    <a href="javascript:;">南投</a>
                    <a href="javascript:;">彰化</a>
                    <a href="javascript:;">云林</a>
                    <a href="javascript:;">苗栗</a>
                  </li>
                  <li class="clearfix">
                    <strong>东部 : </strong>
                    <a href="javascript:;">花莲</a>
                    <a href="javascript:;">台东</a>
                    <a href="javascript:;">宜兰</a>
                  </li>
                  <li class="clearfix">
                    <strong>南部 : </strong>
                    <a href="javascript:;">高雄</a>
                    <a href="javascript:;">嘉义</a>
                    <a href="javascript:;">台南</a>
                    <a href="javascript:;">屏东</a>
                  </li>
                  <li class="clearfix">
                    <strong>其他 :  </strong>
                    <a href="javascript:;">澎湖</a>
                    <a href="javascript:;">金门</a>
                  </li>
                </ul>
              </div>
              <ul class="allCityList clearfix">
                <li>A</li>
                <li v-for="item,index in AllCityList"><a href="JavaScript:;">{{item}}</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="block">
              <span>入住</span>
              <el-date-picker
                v-model="value1"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择入住日期">
              </el-date-picker>
            </div>
          </li>
          <li>
            <div class="block">
              <span>离店</span>
              <el-date-picker
                v-model="value2"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择离店日期">
              </el-date-picker>
            </div>
          </li>
          <li>
            <span>关键词</span>
            <el-input placeholder="酒店名/位置/品牌" style="width: 230px;"></el-input>
          </li>
          <li>
            <el-button style="width: 100px; background-color: #f68b33; color: #fff; border: none;">搜索</el-button>
          </li>
        </ul>
        <!--搜索选项-->
        <div class="searchOptionWrap">
          <ul class="searchOption">
            <!--热门推荐-->
            <li>
              <strong>热门推荐 :</strong>
              <el-checkbox>不限</el-checkbox>
              <a href="javascript:;" :class="AdministrativeArea" @click="isDisplay">行政区<i></i></a>
              <el-checkbox>五星级/豪华型</el-checkbox>
              <el-checkbox>150-300元</el-checkbox>
              <el-checkbox>客栈民宿</el-checkbox>
              <el-checkbox>三人/家庭房</el-checkbox>
              <div v-show="isAdministrativeArea" class="moreCheckbox">
                <el-checkbox>油尖旺区</el-checkbox>
                <el-checkbox>湾仔区</el-checkbox>
                <el-checkbox>东区</el-checkbox>
                <el-checkbox>荃湾区</el-checkbox>
                <el-checkbox>离岛区</el-checkbox>
                <el-checkbox>中西区</el-checkbox>
                <el-checkbox>九龙城区</el-checkbox>
                <el-checkbox>葵青区</el-checkbox>
                <el-checkbox>南区</el-checkbox>
                <el-checkbox>元朗区</el-checkbox>
                <el-checkbox>观塘区</el-checkbox>
                <el-checkbox>屯门区</el-checkbox>
                <el-checkbox>沙田区</el-checkbox>


              </div>
            </li>
            <!--热门推荐-->
            <li>
              <strong>热门推荐 :</strong>
              <el-checkbox>不限</el-checkbox>
              <a href="javascript:;" :class="AdministrativeArea" @click="isDisplay">行政区<i></i></a>
              <el-checkbox>五星级/豪华型</el-checkbox>
              <el-checkbox>150-300元</el-checkbox>
              <el-checkbox>客栈民宿</el-checkbox>
              <el-checkbox>三人/家庭房</el-checkbox>
              <div v-show="isAdministrativeArea" class="moreCheckbox">
                <el-checkbox>油尖旺区</el-checkbox>
                <el-checkbox>湾仔区</el-checkbox>
                <el-checkbox>东区</el-checkbox>
                <el-checkbox>荃湾区</el-checkbox>
                <el-checkbox>离岛区</el-checkbox>
                <el-checkbox>中西区</el-checkbox>
                <el-checkbox>九龙城区</el-checkbox>
                <el-checkbox>葵青区</el-checkbox>
                <el-checkbox>南区</el-checkbox>
                <el-checkbox>元朗区</el-checkbox>
                <el-checkbox>观塘区</el-checkbox>
                <el-checkbox>屯门区</el-checkbox>
                <el-checkbox>沙田区</el-checkbox>


              </div>
            </li>
            <!--热门推荐-->
            <li>
              <strong>热门推荐 :</strong>
              <el-checkbox>不限</el-checkbox>
              <a href="javascript:;" :class="AdministrativeArea" @click="isDisplay">行政区<i></i></a>
              <el-checkbox>五星级/豪华型</el-checkbox>
              <el-checkbox>150-300元</el-checkbox>
              <el-checkbox>客栈民宿</el-checkbox>
              <el-checkbox>三人/家庭房</el-checkbox>
              <div v-show="isAdministrativeArea" class="moreCheckbox">
                <el-checkbox>油尖旺区</el-checkbox>
                <el-checkbox>湾仔区</el-checkbox>
                <el-checkbox>东区</el-checkbox>
                <el-checkbox>荃湾区</el-checkbox>
                <el-checkbox>离岛区</el-checkbox>
                <el-checkbox>中西区</el-checkbox>
                <el-checkbox>九龙城区</el-checkbox>
                <el-checkbox>葵青区</el-checkbox>
                <el-checkbox>南区</el-checkbox>
                <el-checkbox>元朗区</el-checkbox>
                <el-checkbox>观塘区</el-checkbox>
                <el-checkbox>屯门区</el-checkbox>
                <el-checkbox>沙田区</el-checkbox>


              </div>
            </li>
            <!--热门推荐-->
            <li>
              <strong>热门推荐 :</strong>
              <el-checkbox>不限</el-checkbox>
              <a href="javascript:;" :class="AdministrativeArea" @click="isDisplay">行政区<i></i></a>
              <el-checkbox>五星级/豪华型</el-checkbox>
              <el-checkbox>150-300元</el-checkbox>
              <el-checkbox>客栈民宿</el-checkbox>
              <el-checkbox>三人/家庭房</el-checkbox>
              <div v-show="isAdministrativeArea" class="moreCheckbox">
                <el-checkbox>油尖旺区</el-checkbox>
                <el-checkbox>湾仔区</el-checkbox>
                <el-checkbox>东区</el-checkbox>
                <el-checkbox>荃湾区</el-checkbox>
                <el-checkbox>离岛区</el-checkbox>
                <el-checkbox>中西区</el-checkbox>
                <el-checkbox>九龙城区</el-checkbox>
                <el-checkbox>葵青区</el-checkbox>
                <el-checkbox>南区</el-checkbox>
                <el-checkbox>元朗区</el-checkbox>
                <el-checkbox>观塘区</el-checkbox>
                <el-checkbox>屯门区</el-checkbox>
                <el-checkbox>沙田区</el-checkbox>


              </div>
            </li>
          </ul>

          <div class="searchNumber">
            <strong>为你找到<em>0</em>家酒店</strong>
          </div>
        </div>
        <!--酒店推荐-->
        <div class="HotelRecommend clearfix">
          <!--酒店推荐详情-->
          <div class="HotelRecommendDetalis">
            <ul class="HotelRecommendDetalisNav clearfix">
              <li v-for="item,index in HotelRecommendDetalisNav" @click="changeType(index)" :class="{active:index==m}">
                {{item}}
              </li>
              <li>
                <el-checkbox>立即确认</el-checkbox>
              </li>
              <li>
                <el-checkbox>促销</el-checkbox>
              </li>
            </ul>
            <ul class="HotelRecommendDetalisList clearfix">
              <li>
                <a href="javascript:;" class="HotelRecommendDetalisListImgBox">
                  <img src="../../assets/img/homePageImage.jpg" width="262" height="175">
                  <em class="HotelRecommendDetalisListImgBoxsMask">查看更多图片</em>
                </a>
                <div class="HotelRecommendDetalisListIntroduceBox">
                  <div class="HotelRecommendDetalisListIntroduceBoxTitle">
                    <span class="HotelRecommendDetalisListIntroduceBoxTitleNum">1</span>
                    <h4> 香港迪士尼乐园酒店(Disneyland Hotel)</h4>
                    <span class="HotelRecommendDetalisListIntroduceBoxTitleType"> 豪华型</span>
                    <span class="HotelRecommendDetalisListIntroduceBoxTitleRenovation">2005年装修</span>
                  </div>
                  <p class="HotelRecommendDetalisListIntroduceBoxDescribe">离岛大屿山香港迪士尼乐园度假区，近港铁迪士尼站转乘酒店班车直达。【香港迪士尼乐园度假区】</p>
                  <a href="javascript:;">查看地图</a>
                  <div class="HotelRecommendDetalisListIntroduceBoxIconList">
                    <i class="Restaurant"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--酒店所在地图-->
          <div class="HotelRecommendMap"></div>
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
      return {
        value1: '',
        value2: '',
        n: 0,
        destinationTypeList: [
          '热门',
          '港澳台',
          'ABC',
          'DEFG',
          'HJK',
          'LMN',
          'PQRS',
          'TWX',
          'YZ'
        ],
        hotCityList: [
          '北京',
          '上海',
          '广州',
          '深圳',
          '杭州',
          '南京',
          '厦门',
          '三亚',
          '香港',
          '苏州',
          '武汉',
          '西安',
          '成都',
          '青岛',
          '大连',
          '重庆',
          '无锡',
          '沈阳'
        ],
        AllCityList: [
          '阿坝',
          '阿克苏',
          '阿拉尔',
          '阿拉善',
          '阿勒泰',
          '阿里',
          '安康',
          '安庆',
          '鞍山',
          '安顺',
          '安阳'
        ],
        AdministrativeArea: '',
        isAdministrativeArea: false,
        HotelRecommendDetalisNav: [
          '推荐',
          '口碑',
          '价格',
          '最近装修'
        ],
        m: 0,
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      },
      changeCity() {

      },
      changeClass(index) {
        this.n = index;
      },
      isDisplay() {
        if (this.AdministrativeArea == '') {
          this.isAdministrativeArea = true;
          this.AdministrativeArea = 'active';
        } else {
          this.isAdministrativeArea = false;
          this.AdministrativeArea = '';
        }

      },
      changeType(index) {
        this.m = index;
      }
    },
  }
</script>
<style scoped>
  .searchHotelWrap {
    width: 100%;
    background-color: #f9f9f9;
  }

  .searchHotelWrapContent {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
  }

  .searchHotel {
    padding: 14px 0;
    background-color: #38414c;
    margin-top: 20px;
  }

  .searchHotel > li {
    float: left;
    margin-left: 15px;
  }

  .searchHotel > li span {
    color: #fff;
  }

  .destinationBox {
    width: 719px;
    position: absolute;
    top: 40px;
    left: 45px;
    background-color: #fff;
    padding: 13px;
    border: 1px solid #b9bcbe;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    display: none;
  }

  .destinationBox > strong {
    font: 15px/25px "微软雅黑";
    color: #000;
  }

  /*目的地类型*/

  .destinationTypeList {
    margin-bottom: 14px;
    margin-top: 9px;
  }

  .destinationTypeList li {
    font: 15px/2 "微软雅黑";
    float: left;
  }

  .destinationTypeList li a {
    text-align: center;
    width: 75px;
    color: #5e5d5d;
    background-color: #e3e3e3;
    margin-right: 1px;
  }

  .destinationTypeList li .active {
    background-color: #2dbb55;
    color: #fff;
  }

  .hotCityList {
    display: none;
    font: 15px/2 "微软雅黑";
  }

  /*热门城市*/

  .hotCityList a {
    width: 75px;
    text-align: center;
    float: left;
    color: #404040;
  }

  .hotCityList a:hover {
    color: #f60;
  }

  .HongKongMacaoAndTaiwan {
    font: 15px/2 "微软雅黑";
    margin-left: 10px;
    display: none;
  }

  .HongKongMacaoAndTaiwan > strong {
    font-weight: bold;
    color: #666;
  }

  .HongKongMacaoAndTaiwan > a {
    color: #404040;
    width: 75px;
  }

  .HongKongMacaoAndTaiwan > a:hover {
    color: #f60;
  }

  .taiwan li > * {
    float: left;
  }

  .taiwan li > a {
    width: 75px;
    color: #404040;
  }

  .taiwan li > a:hover {
    color: #f60;
  }

  .taiwan li > strong {
    margin-right: 14px;
    color: #808080;
  }

  .allCityList {
    position: relative;
    font: 15px/2 "微软雅黑";
  }

  .allCityList li:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    color: #f60;
  }

  .allCityList li {
    float: left;
  }

  .allCityList li a {
    width: 75px;
    text-align: center;
    color: #404040;
  }

  .allCityList li a:hover {
    color: #f60;
  }

  /*条件查询*/

  .searchOptionWrap {
    padding: 20px;
    border: 1px solid #ccc;
    padding-bottom: 0;
    border-bottom: 1px solid #e6e6e6;
  }

  .searchOption {
    border-bottom: 1px solid #f3f3f3;
  }

  .searchOption > li {
    padding: 10px 0;
  }

  .searchOption > li > strong {
    font-size: 14px;
    color: #aaa;
    display: inline-block;
    width: 75px;
    text-align: left;
  }

  .searchOption > li > a {
    width: 117px;
    display: inline-block;
    position: relative;
    padding-right: 17px;
    color: #666;
    margin-right: 55px;
    padding-bottom: 3px;
    font: 14px/2 "微软雅黑";
    text-indent: 10px;
    margin-left: 20px;
  }

  .searchOption > li > .active {
    background-color: #f0f4fb;
    color: #34c05c;
  }

  .searchOption > li > .active > i {
    background: url("../../assets/img/hotelDatelisIcon.png") no-repeat -131px -61px;
  }

  .searchOption a i {
    position: absolute;
    left: 70px;
    top: 13px;
    width: 7px;
    height: 4px;
    background: url("../../assets/img/hotelDatelisIcon.png") no-repeat -141px -61px;
  }

  .moreCheckbox {
    background-color: #f0f4fb;
    padding: 10px;
    margin-left: 60px;
  }

  .moreCheckbox > * {
    width: 150px;
    margin-left: 0;
  }

  .searchNumber {
    font: 12px/40px "微软雅黑";
    color: #666;
  }

  .searchNumber em {
    color: green;
    font-weight: bold;
    padding: 0 5px;
  }

  /*酒店推荐*/

  .HotelRecommend {
    margin-top: 20px;
  }

  .HotelRecommendDetalis {
    float: left;
    width: 910px;
  }

  .HotelRecommendDetalisNav {
    border: 1px solid #e6e6e6;
    font: 12px/40px "微软雅黑";
  }

  .HotelRecommendDetalisNav li:hover {
    cursor: pointer;
  }

  .HotelRecommendDetalisNav li {
    width: 80px;
    float: left;
    border-right: 1px solid #f5f5f5;
    text-align: center;
  }

  .HotelRecommendDetalisNav .active {
    color: #2dbb55;
    font-weight: bold;
  }

  .HotelRecommendDetalisNav li:nth-of-type(5),
  .HotelRecommendDetalisNav li:nth-of-type(6) {
    float: right;
    border: none;
    margin-right: 20px;
  }

  .HotelRecommendDetalisList li {
    margin-top: 15px;
    float: left;
    width: 100%;
    border: 1px solid #e6e6e6;
  }

  .HotelRecommendDetalisListImgBox {
    float: left;
    position: relative;
    margin-right: 40px;
  }

  .HotelRecommendDetalisListImgBoxsMask {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:24px;
    font: 12px/2 "微软雅黑";
    text-align: center;
    color: #fff;
    background-color: rgba(0,0,0,.5);
  }



  /*酒店地图*/

  .HotelRecommendMap {
    float: right;
  }


</style>
