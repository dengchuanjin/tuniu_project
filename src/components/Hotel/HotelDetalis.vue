<template>
  <div>
    <div class="wrapContent">
      <div class="titleTop clearfix">
        <div class="title">
          <h4>香港迪士尼乐园酒店(Disneyland Hotel)<span>豪华型</span></h4>
          <strong>离岛大屿山香港迪士尼乐园度假区，港铁迪士尼站转乘酒店班车直达 【 香港迪士尼乐园度假区 】</strong>
        </div>
        <div class="priceAndSubmit">
          <strong>￥<span>2156</span> 起</strong>
          <a href="javascript:;">开始预订</a>
        </div>
      </div>
      <div class="content clearfix">
        <div class="contentSection">
          <!--图片框-->
          <div class="imgBoxList clearfix">
            <div class="bigImg">
              <img src="../../assets/img/homePageImage.jpg" width="440" height="329">
            </div>
            <div class="smallImgList">
              <img v-for="item,index in 6" src="../../assets/img/homePageImage.jpg" width="150" height="164"/>
            </div>
          </div>
          <!--酒店介绍-->
          <div class="hotelInfromation">
            <!--导航-->
            <div class="hotelInfromationNav clearfix">
              <a v-for="item,index in hotelInfromationNav" href="javascript:;" @click="menuClick(index)"
                 :class="{active:index==n}">{{item}}</a>
            </div>
            <!--筛选-->
            <div class="screenTime clearfix" v-show="showList[0].isShow">
              <div class="block">
                <span class="demonstration">入住</span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                  size="mini"
                >
                </el-date-picker>
              </div>
              <div class="block">
                <span class="demonstration">离店</span>
                <el-date-picker
                  v-model="value2"
                  type="date"
                  placeholder="选择日期"
                  size="mini"
                >
                </el-date-picker>
              </div>
              <el-button type="warning" size="mini">确定</el-button>
              <div class="condition">
                <el-checkbox v-model="checked">可预付</el-checkbox>
                <el-checkbox v-model="checked">立即确认</el-checkbox>
              </div>
            </div>
            <!--酒店类型列表-->
            <div class="hotelTypeList" v-show="showList[0].isShow">
              <!--酒店筛选导航-->
              <dl class="hotelTypeListNav clearfix">
                <dt>房型</dt>
                <dd class="bedType">
                  <em>床型<i></i></em>
                  <ul>
                    <li v-for="item,index in bedTypeList">{{item}}</li>
                  </ul>
                </dd>
                <dd class="breakfast">
                  <em>早餐<i></i></em>
                  <ul>
                    <li v-for="item,index in bedTypeList">{{item}}</li>
                  </ul>
                </dd>
                <dd class="WIFI">
                  <em>宽带<i></i></em>
                  <ul>
                    <li v-for="item,index in bedTypeList">{{item}}</li>
                  </ul>
                </dd>
                <dd calss="cancelPolicy">
                  <em>取消政策<i></i></em>
                  <ul style="width: 100px;">
                    <li v-for="item,index in bedTypeList">{{item}}</li>
                  </ul>
                </dd>
                <dd class="price">日均价（含服务费）</dd>
              </dl>
              <!--客房列表-->
              <ul class="roomList">
                <li class="clearfix" v-for="item,index in 3">
                  <div class="guestRoomType">
                    <img src="../../assets/img/homePageImage.jpg" width="100" height="56">
                    <strong>标准客房</strong>
                    <a href="JavaScript:;">查看详情&gt;</a>
                  </div>
                  <!--查看详情-->
                  <div class="searchDetils">
                    <div class="searchDetilsContent">
                      <div class="searchDetilsContentTop clearfix">
                        <img src="../../assets/img/homePageImage.jpg" width="225" height="127">
                        <ul class="roomToConfigure">
                          <li><strong>床型:</strong><span> 大床1.5米x1张(或单人撒旦飞洒发生</span></li>
                          <li><strong>最多入住人数:</strong><span> 2</span></li>
                          <li><strong>楼层:</strong><span> 5-22层</span></li>
                          <li><strong>无烟房:</strong><span> 全部房间可无烟处理</span></li>
                          <li><strong>面积:</strong><span> 20平方米</span></li>
                          <li><strong>加床:</strong><span> 不可加床</span></li>
                        </ul>
                        <a href="javascript:;" class="closeDetils">×</a>
                        <a href="javascript:;" class="searchMore">查看所有房型设施<i></i></a>
                      </div>
                      <div class="searchDetilsContentBottom">
                        <ul>
                          <li v-for="item,index in 5">
                            <strong>便利设施:</strong>
                            <div class="searchDetilsContentBottomList clearfix">
                              <span><i></i>220V电压插座</span>
                              <span><i></i>遮光窗帘</span>
                              <span><i></i>房内保险箱</span>
                              <span><i></i>床具:鸭绒被</span>
                              <span><i></i>床具:毯子或被子</span>
                              <span><i></i>熨衣设备</span>
                              <span><i></i>房间内高速上网</span>
                              <span><i></i>空调</span>
                            </div>
                          </li>
                        </ul>
                        <strong>（部分设备在部分房型中提供）</strong>
                      </div>
                    </div>
                    <ul class="roomContentList">
                      <li v-for="item,index in 4">
                        <div class="clearfix">
                        <span class="hotelDescribe"><span>(特价大促销)(内宾) (成人最多入住2位)[无早]</span><a
                          href="javascript:;">超值价</a></span>
                          <span class="bedType">大/双</span>
                          <span class="breakfast">无早</span>
                          <span class="WIFI"><span>免费无线</span></span>
                          <span class="cancelPolicy"><span>不可取消</span><a href="javascript:;">立即确认</a></span>
                          <span class="price">￥<em>2156</em></span>
                          <span class="submit"><a href="javascript:;"
                                                  @click="goHotelOrder">预定</a><em>在线付(少量)</em></span>
                        </div>
                      </li>
                      <li class="more">
                        <a href="javascript:;"><em>查看更多产品报价<i></i></em></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!--温馨提示-->
            <div class="reminder" v-show="showList[1].isShow">
              <strong>温馨提示</strong>
              <p>未满18周岁的小孩需有成人陪同才可入住。</p>
            </div>
            <!--酒店简介-->
            <div class="hotelBriefIntroduction" v-show="showList[1].isShow">
              <strong class="strongFont">酒店简介</strong>
              <div class="label clearfix">
                <span>亲子时刻</span>
                <span>亲子时刻</span>
                <span>亲子时刻</span>
                <span>亲子时刻</span>
              </div>
              <p>
                香港迪士尼乐园酒店位于香港大屿山香港迪士尼乐园度假区，交通便利，由中环出发乘地铁只需半小时。
                香港迪士尼乐园酒店是一家以华丽的维多利亚风格为设计的酒店，
                拥有别致小亭，供婚礼使用的花园及宽敞的展览和会议场地。酒店除了华丽宽敞的房间，还有各种别具特色的餐厅、
                各种休闲设施及服务，如水疗泳池健身室、特别为小朋友设置的各种活动等。这里乐趣无穷，更少不了与迪士尼朋友见面的机会，
                让您的奇妙之旅得以延续。
              </p>
            </div>
            <!--酒店政策-->
            <div class="hotelPolicy" v-show="showList[1].isShow">
              <strong class="strongFont">酒店政策</strong>
              <ul>
                <li v-for="item,index in hotelPolicyList">
                  <div class="couponsActive clearfix">
                    <span></span>
                    <h5>{{item}}</h5>
                  </div>
                  <p>入住时间：15:00以后 离店时间：11:00以前</p>
                </li>
              </ul>
            </div>
            <!--设施服务-->
            <div class="facilitiesServices" v-show="showList[1].isShow">
              <strong class="strongFont">设施服务</strong>
              <ul>
                <li v-for="item,index in facilitiesServicesList">
                  <div class="couponsActive clearfix">
                    <span></span>
                    <h5>{{item}}</h5>
                  </div>
                  <p v-if="index<=2">
                    香港迪士尼乐园酒店位于香港大屿山香港迪士尼乐园度假区，交通便利，由中环出发乘地铁只需半小时。
                    香港迪士尼乐园酒店是一家以华丽的维多利亚风格为设计的酒店，拥有别致小亭，供婚礼使用的花园及宽敞的展览和会议场地。
                    酒店除了华丽宽敞的房间，还有各种别具特色的餐厅、各种休闲设施及服务，
                    如水疗泳池健身室、特别为小朋友设置的各种活动等。这里乐趣无穷，更少不了与迪士尼朋友见面的机会，让您的奇妙之旅得以延续。
                  </p>
                  <div v-if="index>2" class="functionType clearfix">
                    <span v-for="item,index in 10"><i></i>中餐厅</span>
                  </div>
                </li>
              </ul>
            </div>
            <!--位置及周边-->
            <div class="positionPeriphery">
              <strong class="strongFont">位置及周边</strong>
              <!--地图-->
              <div class="mapBoxWrap">
                <div class="mapJW">
                  <div id="allmap"></div>
                </div>
              </div>
            </div>
            <!--住客点评-->
            <div class="commentsOnGuests" v-show="showList[3].isShow">
              <strong class="strongFont">住客点评</strong>
              <!--评分-->
              <div class="hotelScoreBox clearfix">
                <div class="hotelScore">
                  <span>综合评分：</span>
                  <strong><em>4.7</em>/5分</strong>
                  <strong><span>707</span>条真实入住用户评价</strong>
                </div>
                <ul class="hotelStarts">
                  <li v-for="item,index in scoreType">
                    <span class="hotelStartsType">{{item}}</span>
                    <span class="hotelStartsValue">{{value5}}</span>
                    <el-rate
                      v-model="value5"
                      disabled
                      text-color="#ff9900"
                      score-template="{value}"
                      class="starts"
                    >
                    </el-rate>
                  </li>
                </ul>
              </div>
              <!--评价-->
              <div class="hotelEvaluate">
                <div class="hotelEvaluateNav clearfix">
                  <a class="active" href="javascript:;">全部点评（707）</a>
                  <a href="javascript:;">满意（539）</a>
                  <a href="javascript:;">一般（164）</a>
                  <a href="javascript:;">待改善（4）</a>
                  <a href="javascript:;">有图（72）</a>
                </div>
                <!--评论列表-->
                <ul class="hotelEvaluateList">
                  <li v-for="item,index in 10">
                    <div class="userInfromation clearfix">
                      <img src="../../assets/img/center.png" width="22" height="22">
                      <strong>8071020723</strong>
                      <span>2018年01月19日入住</span>
                    </div>
                    <div class="hotelEvaluateContent">
                      <p>
                        酒店干净，房间虽然细了点，但是床和厕所算大，挺舒服的！过去朗豪坊10分钟左右的行程，不错！前台都很有礼貌，不错的入住体验！
                      </p>
                      <a href="javascript:;" class="open">展开<i></i></a>
                      <a href="javascript:;" class="stop">收起<i></i></a>
                    </div>
                    <div class="evaluateImageBox">
                      <div class="clearfix">
                        <img v-for="item,index in 50" src="../../assets/img/homePageImage.jpg" width="74" height="74">
                      </div>
                      <a href="javascript:;" class="open">展开<i></i></a>
                      <a href="javascript:;" class="stop">收起<i></i></a>
                    </div>
                    <div class="timeAndApp clearfix">
                      <span>2018-01-01</span>
                      <span>来自惠乐游APP</span>
                    </div>
                  </li>
                </ul>
              </div>
              <!--分页-->
              <el-pagination
                style="text-align: right; padding: 20px 0;"
                background
                layout="prev, pager, next"
                :total="20">
              </el-pagination>
            </div>
            <!--周边热卖酒店-->
            <div class="hotelHotSell">
              <strong class="strongFont">周边热卖酒店</strong>
              <div class="hotelHotSellWrap clearfix">
                <ul class="partitionList">
                  <li v-for="item,index in partitionList">{{item}}</li>
                </ul>
                <ul class="recommendList clearfix">
                  <li v-for="item,index in 4">
                    <img src="../../assets/img/homePageImage.jpg" width="170" height="115">
                    <strong class="name">迪士尼探索家度假酒店迪士尼探索家度假酒店迪士尼探索家度假酒店</strong>
                    <span class="hotelType">豪华型</span>
                    <span class="price">¥1913</span>
                    <strong class="guestScore">
                      <span>特别棒4.7分</span>
                      来自708条评价
                    </strong>
                    <span class="address">离岛大屿山香港迪士尼乐园度假离岛大屿山香港迪士尼乐园度假</span>
                    <span class="modify">2005年装修</span>
                    <a href="javascript:;">马上预定</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pricePlace"></div>
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
        showList: [
          {
            id: 0,
            isShow: true
          },
          {
            id: 1,
            isShow: false
          },
          {
            id: 2,
            isShow: false
          },
          {
            id: 3,
            isShow: false
          },
          {
            id: 4,
            isShow: false
          }
        ],
        n: 0,
        hotelInfromationNav: [
          '房型价格',
          '酒店介绍',
          '位置及周边',
          '点评（707条）',
          '周边热卖酒店'
        ],
        value1: '',
        value2: '',
        checked: false,
        hotelPolicyList: [
          '入住和离店',
          '取消政策',
          '入住手续',
          '携带宠物'
        ],
        facilitiesServicesList: [
          '基本信息',
          '酒店特色',
          '停车服务',
          '餐饮设施',
          '会议设施',
          '服务项目',
          '房间设施',
          '娱乐与健身设施'
        ],
        value5: 4.7,
        scoreType: [
          '舒适度',
          '睡眠质量',
          '性价比'
        ],
        bedTypeList: [
          '不限',
          '双床'
        ],
        form: {
          x: '105.44397029',
          y: '24.8959298'
        },
        partitionList: [
          '每晚起价',
          '住客评分',
          '区域位置',
          '装修时间'
        ],
      }
    },
    methods: {
      //点击菜单
      menuClick(index) {
        this.n = index;
        for (var i = 0; i < this.showList.length; i++) {
          if (this.showList[i].id == index) {
            this.showList[i].isShow = true
          } else {
            this.showList[i].isShow = false
          }
        }
      },
      //查询地图
      searchMap() {
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
        map.enableScrollWheelZoom(true);
        map.clearOverlays();
        var new_point = new BMap.Point(this.form.x, this.form.y);
        var marker = new BMap.Marker(new_point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(new_point);
      },
      //跳转到酒店订单页面
      goHotelOrder() {
        this.$router.push({name: 'HotelOrder'})
      }
    },
    mounted() {
      this.searchMap();
    }
  }
</script>
<style scoped>

  .wrapContent {
    width: 1200px;
    margin: 20px auto 0;
  }

  .titleTop {
    width: 100%;

  }

  .titleTop > .title {
    float: left;
  }

  .titleTop > .title > h4 {
    font: bold 24px/1.5 "微软雅黑";
    color: #333;
  }

  .titleTop > .title span {
    font: 12px/2 "微软雅黑";
    vertical-align: bottom;
    padding-left: 10px;
  }

  .titleTop > .title > strong {
    font: 14px/2 "微软雅黑";
    color: #666;
  }

  .titleTop > .priceAndSubmit {
    float: right;
    color: #f60;
  }

  .priceAndSubmit > strong {
    font: 14px/42px "微软雅黑";
  }

  .priceAndSubmit > strong > span {
    font-size: 25px;
    font-weight: bold;
  }

  .priceAndSubmit > a {
    font: bold 16px/42px "微软雅黑";
    color: #fff;
    padding: 0 20px;
    background-color: #f80;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .priceAndSubmit > a:hover {
    background-color: #f60;
  }

  /*内容*/

  .content {
    margin-top: 10px;
  }

  .content > div {
    float: left;
  }

  .contentSection {
    width: 895px;
  }

  .contentSection > .imgBoxList > div {
    float: left;
  }

  .smallImgList {
    width: 453px;
  }

  .smallImgList > img {
    float: left;
    margin: 0 0 1px 1px;
  }

  /*酒店介绍*/

  .hotelInfromation {
    margin-top: 20px;
  }

  .hotelInfromationNav {
    font: 18px/50px "微软雅黑";
    border-bottom: 1px solid #ccc;
  }

  .hotelInfromationNav > a {
    color: #000;
    float: left;
    padding: 0 30px;
    border-bottom: 3px solid transparent;
    margin-bottom: -3px;
  }

  .hotelInfromationNav > a.active {
    color: #2DBB55;
    font-weight: bold;
    border-color: #2DBB55;
  }

  .screenTime {
    padding: 10px 0;
    font: 12px/20px "微软雅黑";
  }

  .screenTime > * {
    float: left;
    margin: 0 10px;
  }

  .screenTime .condition {
    float: right;
    padding: 3px 0;
  }

  /*酒店类型列表*/

  .hotelTypeList {
    margin-top: 20px;

  }

  .hotelTypeListNav {
    font: 14px/40px "微软雅黑";
    background-color: #2dbb55;
    color: #fff;
  }

  .hotelTypeListNav > * {
    float: left;
  }

  .hotelTypeListNav > dt {
    width: 292px;
    padding-left: 32px;
  }

  .hotelTypeListNav > dd {
    position: relative;
  }

  .hotelTypeListNav > dd:hover > ul {
    display: block;
  }

  .hotelTypeListNav ul {
    position: absolute;
    top: 40px;
    left: -25%;
    color: #333333;
    font: 14px/2 "微软雅黑";
    width: 100%;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 0 5px #ccc;
    display: none;
  }

  .hotelTypeListNav ul li:hover {
    color: #2dbb55;
  }

  .hotelTypeListNav > dd > em {
    position: relative;
  }

  .hotelTypeListNav i {
    position: absolute;
    top: 50%;
    right: -10px;
    border-top: 3px solid #fff;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
  }

  .bedType {
    width: 65px;
  }

  .breakfast {
    width: 60px;
  }

  .WIFI {
    width: 82px;
  }

  .cancelPolicy {
    width: 83px;
  }

  .price {
    width: 160px;
    margin-left: 50px;
  }

  /*查看详情*/

  .searchDetils {
    width: 775px;
    margin-left: 20px;
  }

  .searchDetilsContent {
    padding: 25px;
    background-color: #f0f2f2;
    margin-bottom: 20px;
  }

  .searchDetilsContentTop {
    position: relative;
    padding-bottom: 36px;
    border-bottom: 1px dashed #ccc;
  }

  .searchDetilsContentTop > img {
    float: left;
    margin-right: 25px;
  }

  .searchDetilsContentTop > ul {
    float: left;
    width: 475px;
  }

  .searchDetilsContentTop .closeDetils {
    position: absolute;
    top: -10px;
    right: 0;
    font-size: 30px;
  }

  .searchDetilsContentTop .searchMore {
    position: absolute;
    bottom: 10px;
    right: 15px;
    font: 14px/18px "微软雅黑";
    color: green;
  }

  .searchDetilsContentTop .searchMore > i {
    position: absolute;
    top: 50%;
    right: -10px;
    border-top: 4px solid green;
    border-bottom: 4px solid transparent;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  .roomToConfigure > li {
    float: left;
    width: 237px;
    font: 14px/32px "微软雅黑";
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 32px;
    color: #666;
  }

  .roomToConfigure > li > strong {
    font-weight: bold;
  }

  .searchDetilsContentBottom li {
    margin-top: 20px;
  }

  .searchDetilsContentBottom > strong {
    font: bold 14px/24px "微软雅黑";
    color: #9ea09f;
    margin-top: 20px;
    display: block;
  }

  .searchDetilsContentBottom strong {
    font: bold 14px/24px "微软雅黑";
    color: #666;
  }

  .searchDetilsContentBottomList {
    font:12px/2 "微软雅黑";
    color: #666;
  }

  .searchDetilsContentBottomList > span {
    float: left;
    margin-right: 23px;
  }

  .searchDetilsContentBottomList > span > i {
    display: inline-block;
    width: 18px;
    height: 9px;
    background: url("../../assets/img/tips.png") -65px -14px no-repeat;
    vertical-align: middle;
  }

  /*客房列表*/

  .roomList > li {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }

  .roomList > li > * {
    float: left;
  }

  .guestRoomType {
    width: 100px;
    text-align: center;
  }

  .guestRoomType > strong {
    margin-top: 3px;
    display: block;
    font: bold 14px/1.5 "微软雅黑";
    color: #333333;
  }

  .guestRoomType > a {
    font: bold 12px/1.5 "微软雅黑";
    color: #2dbb55;
  }

  .roomList > li .roomContentList {
    width: 775px;
    font: 13px/18px "微软雅黑";
  }

  .roomContentList > li {
    height: 100px;
  }

  .roomContentList div {
    box-sizing: content-box;
    padding: 20px 0 25px 0;
    border-bottom: 1px dashed #ccc;
  }

  .roomContentList li:hover div {
    padding: 10px 0;
    box-shadow: 5px 3px 5px #ccc;
    border: none;
  }

  .roomContentList div > span {
    float: left;
  }

  .roomContentList .bedType {
    margin-left: 5px;
  }

  .hotelDescribe {
    width: 170px;
  }

  .hotelDescribe > span {
    display: block;
  }

  .hotelDescribe > a {
    color: #2dbb55;
    display: inline;
    border-bottom: 1px dashed #ccc;
  }

  .roomContentList .WIFI > span {
    border-bottom: 1px dashed #ccc;
  }

  .roomContentList .cancelPolicy > span {
    border-bottom: 1px dashed #ccc;
  }

  .roomContentList .cancelPolicy > a {
    color: #73bb86;
  }

  .roomContentList .price {
    margin-left: 20px;
    color: #f60;
  }

  .roomContentList .price em {
    font-size: 16px;
    font-weight: bold;
  }

  .roomContentList .submit {
    float: right;
    width: 100px;
    margin-right: 5px;
  }

  .submit > a {
    font: 16px/2 "微软雅黑";
    background-color: #ff8800;
    color: #fff;
    text-align: center;
  }

  .submit > em {
    display: block;
    font: 12px/20px "微软雅黑";
    text-align: center;
    box-shadow: 0 0 3px #f60;
    color: #999;
  }

  .roomContentList > .more {
    width: 100%;
    height: 32px;
    background-color: #f6f6f6;
    border: 1px solid #ccc;
    font: 12px/30px "微软雅黑";
    margin-top: 10px;
  }

  .roomContentList > .more > a {
    text-align: center;
    color: #2dbb55;
  }

  .more > a > em {
    position: relative;
  }

  .more > a i {
    position: absolute;
    right: -10px;
    top: 50%;
    border-top: 4px solid #28bf33;
    border-left: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid transparent;
  }

  /*温馨提示*/

  .reminder {
    margin-top: 10px;
    border: 1px solid #f80;
    background-color: #f7eec8;
    padding: 10px;
    font: 12px/2.3 "微软雅黑";
    margin-bottom: 25px;
  }

  .reminder > strong {
    color: #f80;
  }

  .reminder > p {
    color: #000;
  }

  /*酒店简介*/

  .strongFont {
    font: bold 16px/64px "微软雅黑";
    color: #000;
  }

  .hotelBriefIntroduction > .label > span {
    float: left;
    color: #ff8800;
    font: 12px/2 "微软雅黑";
    border: 1px solid #f80;
    padding: 0 10px;
    margin-left: 10px;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
  }

  .hotelBriefIntroduction > p {
    text-indent: 2rem;
    font-size: 14px;
    line-height: 24px;
    color: #666;
  }

  /*酒店政策*/

  .hotelPolicy .couponsActive,
  .facilitiesServices .couponsActive {
    margin-top: 0;
  }

  .hotelPolicy li p,
  .facilitiesServices li p {
    padding: 15px 10px;
    font: 12px/2 "微软雅黑";
    color: #666666;
  }

  .facilitiesServices li p {
    text-indent: 2rem;
  }

  .functionType {
    padding: 10px 20px;
  }

  .functionType > span {
    float: left;
    position: relative;
    width: 170px;
    padding-left: 22px;
    margin: 5px 0;
  }

  .functionType > span > i {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 9px;
    background: url("../../assets/img/tips.png") -65px -14px no-repeat;
  }

  /*评分*/

  .hotelScoreBox {
    border: 1px solid #ebebeb;
  }

  .hotelScore {
    float: left;
    width: 275px;
    padding: 20px 0;
  }

  .hotelScore > * {
    display: block;
    text-align: center;
  }

  .hotelScore > span {
    font: 14px/34px "微软雅黑";
    color: #999999;
  }

  .hotelScore > strong {
    font: 17px/36px "微软雅黑";
    color: #666666;
  }

  .hotelScore > strong > em {
    font-size: 36px;
    font-weight: bold;
    color: #f60;
  }

  .hotelScore > strong > span {
    color: #f60;
  }

  .hotelStarts {
    width: 618px;
    float: left;
    font: 17px/39px "微软雅黑";
    border-left: 1px solid #ccc;
    margin-top: 44px;
    padding-left: 50px;
  }

  .hotelStarts > li {
    float: left;
    width: 260px;
  }

  .hotelStarts > li > * {
    float: left;
  }

  .hotelStarts > li > .starts {
    margin-top: 10px;
  }

  .hotelStartsType {
    margin-right: 25px;
    color: #666666;
  }

  .hotelStartsValue {
    margin-right: 10px;
    color: #f60;
  }

  /*点评*/

  .hotelEvaluateNav {
    margin-top: 40px;
    border-bottom: 3px solid #eaeaea;
    font: 14px/38px "微软雅黑";
  }

  .hotelEvaluateNav > a {
    float: left;
    color: #666666;
    padding: 0 30px;
  }

  .hotelEvaluateNav > a.active {
    background-color: #2dbb55;
    color: #fff;
  }

  .hotelEvaluateList > li {
    padding: 25px 0;
    border-bottom: 1px solid #ccc;
  }

  .userInfromation {
    font: 14px/1 "微软雅黑";
  }

  .userInfromation > * {
    float: left;
  }

  .userInfromation > strong {
    margin: 5px 0 0 10px;
    color: #333333;
  }

  .userInfromation > span {
    margin: 5px 0 0 20px;
    color: #999999;
  }

  .hotelEvaluateContent {
    padding: 15px 0;
    font: 14px/1.5 "微软雅黑";
  }

  .hotelEvaluateContent > p {
    color: #666666;
    max-height: 84px;
    overflow: hidden;
  }

  .open,
  .stop {
    font: 14px/1.5 "微软雅黑";
    display: block;
    text-align: right;
    color: #2dbb55;
    padding-right: 10px;
    position: relative;
  }

  .open > i {
    position: absolute;
    right: 0;
    top: 50%;
    border-top: 3px solid #2dbb55;
    border-bottom: 3px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }

  .stop > i {
    position: absolute;
    right: 0;
    top: 25%;
    border-top: 3px solid transparent;
    border-bottom: 3px solid #2dbb55;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }

  .evaluateImageBox > div {
    max-height: 79px;
    overflow: hidden;
  }

  .evaluateImageBox > div > img {
    float: left;
    margin: 0 5px 5px 0;
  }

  .timeAndApp > span {
    float: left;
    font: 14px/2 "微软雅黑";
  }

  .timeAndApp > span:nth-of-type(1) {
    color: #999999;
    margin-right: 30px;
  }

  .timeAndApp > span:nth-of-type(2) {
    color: #999;
  }

  /*周边热卖酒店*/

  .partitionList {
    float: left;
    width: 120px;
    border-top: 1px solid #e5e5e5;
    font: 14px/40px "微软雅黑";
    margin-top: 180px;
  }

  .partitionList > li {
    border-bottom: 1px solid #e5e5e5;
  }

  .recommendList {
    float: left;
    width: 775px;

  }

  .recommendList > li {
    width: 190px;
    padding: 10px;
    border: 1px solid #e5e5e5;
    float: left;
  }

  .recommendList .name {
    display: block;
    font: bold 14px/25px "微软雅黑";
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .recommendList .hotelType {
    display: block;
    font: 13px/30px "微软雅黑";
  }

  .recommendList .price {
    font: 18px/40px "微软雅黑";
    color: #f60;
    display: block;
    margin-left: 0;
  }

  .recommendList .guestScore {
    font: 12px/40px "微软雅黑";
    color: #666;
  }

  .recommendList .guestScore > span {
    font-size: 15px;
    color: #2DBB55;
  }

  .recommendList .address {
    height: 40px;
    font: 12px/40px "微软雅黑";
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    color: #333;
  }

  .recommendList .modify {
    height: 40px;
    font: 12px/40px "微软雅黑";
    color: #666;
  }

  .recommendList a {
    width: 100%;
    border-radius: 2px;
    background-color: #f80;
    color: #fff;
    text-align: center;
    line-height: 38px;
    font-size: 16px;
  }


</style>
