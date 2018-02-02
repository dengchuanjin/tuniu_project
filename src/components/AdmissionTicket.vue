<template>
  <div>
    <section id="wrapBoxa">
      <div class="scenicSpotInformation clearfix">
        <div class="pictureBox">
          <div class="block">
            <el-carousel height="300px">
              <el-carousel-item v-for="item in pictureList">
                <img :src="item" height="300" width="500">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="scenicSpotInformationContent">
          <h1>西岭雪山</h1>
          <p class="money">
            <span>价格: ￥</span>
            <strong>198</strong>
            起
          </p>
          <ul class="describe">
            <li><span>具体地址：</span>四川省成都市大邑县西岭镇邛崃山脉中段<a href="#trafficInformation">查看地图</a></li>
            <li><span>开放时间：</span>周一至周五：08:30-18:00 周六至周日：07:30-18:00</li>
            <li>
              <span>服务承诺：</span>
              <button>入园保障</button>
              <strong>预订此门票无法入园且千里达旅游网10分钟内未解决完，可买门市价入园，千里达旅游网赔偿<i>门市价</i>与<i>千里达旅游网价</i>的差价</strong>
            </li>
          </ul>
          <div class="scoreContent">
            <div class="score clearfix">
              <span>满意度:<strong>100%</strong></span>
              <em></em>
              <span>来自<strong>5680</strong>名游客的点评</span>
            </div>
            <div class="evaluateContent clearfix">
              <img src="../assets/img/Symbol.png" width="31" height="28">
              <p class="evaluate"><【千里达旅游网】西岭雪山后山门票+鸳鸯池索道往返 - 成人门票>▼</p>
              <img src="../assets/img/Symbol.png" width="31" height="28" class="imgRotate">
            </div>
          </div>
        </div>
      </div>
      <div class="admissionTicketType">
        <div class="admissionTicketTypeContent">
          <ul class="titleList clearfix">
            <li class="admissionTicketName">产品名称</li>
            <li>提前预订时间</li>
            <li>市场价</li>
            <li>千里达旅游网价</li>
            <li>优惠</li>
            <li>支付方式</li>
          </ul>
          <div class="productType">
            <h5>门票</h5>
            <div class="admissionTicketContent clearfix">
              <a href="javascript:;" class="widthCommentA"><【千里达旅游网】西岭雪山后山门票+鸳鸯池索道往返 - 成人门票>▼</a>
              <span>当天17点前	</span>
              <span class="marketMoney">¥240</span>
              <span class="myMoney">¥228起</span>
              <span class="quan">优惠券</span>
              <p class="payment">
                <span>网上支付</span>
                <a href="javascript:;">预订</a>
              </p>
            </div>
          </div>
          <div class="specialContent">
            <h5>专项</h5>
            <ul>
              <li v-for="item in 4">
                <div class="admissionTicketContent clearfix">
                  <a href="javascript:;" class="widthCommentA"><【千里达旅游网】西岭雪山后山门票+鸳鸯池索道往返 - 成人门票>▼</a>
                  <span>当天17点前</span>
                  <span class="marketMoney">¥240</span>
                  <span class="myMoney">¥228起</span>
                  <span class="quan">优惠券</span>
                  <p class="payment">
                    <span>网上支付</span>
                    <a href="javascript:;">预订</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--主体部分-->
      <div id="infrometionWrap">
        <!--主体导航-->
        <ul id="infrometionWrapNav" ref="infrometionWrapNav" class="infrometionWrapNav clearfix">
          <li v-for="item,index in idName">
            <a :href="'#'+item.id" @click="changeType(index)">{{item.name}}</a>
          </li>
        </ul>
        <!--预定需知-->
        <div id="reserveContent" class="reserveContent clearfix">
          <div class="discountIcon">
            <h3>预定需知</h3>
          </div>
          <div class="reservations">
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>景区开放时间：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_OpenTime}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>特殊人群政策：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_SpecialPolicy}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>预订提醒：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_Remind}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>温馨提示：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_HappyNotice}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>发票说明：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_TicketSay}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>退改规则：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_ReturnRule}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>特殊信息：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_SpecialMessage}}</p>
              </div>
            </div>
          </div>
        </div>
        <!--景点介绍-->
        <div id="introductionOfScenicSpots" class="introductionOfScenicSpots clearfix">
          <div class="discountIcon">
            <h3>景点介绍</h3>
          </div>
          <div class="introductionOfScenicSpotsContent">
            <div class="couponsActive clearfix">
              <span></span>
              <h5>景点详情</h5>
            </div>
            <div class="detailsOfTheScenicSpots">
              <div v-for="item in getTourSiteList" v-html="item.tm_ts_Detailedintroduction"></div>
            </div>
          </div>
        </div>
        <!--交通信息-->
        <div id="trafficInformation" class="trafficInformation clearfix">
          <div class="discountIcon">
            <h3>交通指南</h3>
          </div>
          <div class="trafficInformationContent">
            <div class="couponsActive clearfix">
              <span></span>
              <h5>交通信息</h5>
            </div>
            <div class="trafficGuide">
              <div class="recommendRoute">
                <ul>
                  <li class="clearfix">
                    <strong>自驾线路 : </strong><span></span>
                  </li>
                  <li class="clearfix">
                    <strong>公交线路 : </strong><span>从西岭镇—行驶80米—左转行驶160米—向右转行驶20米—右前方转弯行驶4.0公里—右转行驶3.4公里—到达终点（西岭雪山）。</span>
                  </li>
                  <li class="clearfix">
                    <strong>景点地址 : </strong><span> 四川省成都市大邑县西岭镇邛崃山脉中段</span>
                  </li>
                </ul>
              </div>
              <!--地图-->
              <div class="mapBoxWrap">
                <div class="mapJW">
                  <div id="allmap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import '../assets/css/comment.css'
  import '../assets/css/AdmissionTicket.css'
  import $ from 'jquery'

  export default {
    name: '',
    computed: mapGetters([
      'pictureList',
      'bookKnowObj',
      'getTourSiteList'
    ]),
    data() {
      return {
        form: {
          x: '105.44397029',
          y: '24.8959298'
        },
        idName: [
          {
            name: '预定需知',
            id: 'reserveContent'
          },
          {
            name: '景点介绍',
            id: 'introductionOfScenicSpots'
          },
          {
            name: '交通指南',
            id: 'trafficInformation'
          }
        ]
      }
    },
    methods: {
      initData() {
        //预定需知
        var getBookKnow = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "siteName": "001"
        }
        this.$store.dispatch('initBookKnowObj', getBookKnow);
        //景点介绍
        var GetTourSite = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "tsCode": "001",
          "tsName": "",
          "isDelete": 0,
          "page": 1,
          "rows": 5
        };
        this.$store.dispatch('initGetTourSite', GetTourSite)
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
      changeType(index){
        let lis = this.$refs.infrometionWrapNav.children;
        for (var i = 0; i < lis.length; i++) {
          lis[i].children[0].className = ''
        }
        lis[index].children[0].className = 'active'
      }
    },
    mounted() {
      this.searchMap();
      //滚动到一定距离变固定定位
      (function () {
        var w = ($(window).width() - 1188) / 2
        var sTop = $('#infrometionWrapNav').get(0).offsetTop;
        $(window).bind("scroll", function () {
          var top = $(this).scrollTop(); // 当前窗口的滚动距离
          if (top > sTop) {
            $('#infrometionWrapNav').css({position: 'fixed', left: w - 6 + 'px', top: 0,})
          } else {
            $('#infrometionWrapNav').css({position: 'static', left: 'auto', top: 'auto',})
          }
        });
      })()

      //      点击切换导航的class
      let lis = this.$refs.infrometionWrapNav.children;
      lis[0].children[0].className = 'active'
    },
    created() {
      this.initData();
    },
    update() {
      let lisSearch = this.$refs.infrometionWrapNav.querySelectorAll('li')
      if (lisSearch.length) {
        for (var i = 0; i < lisSearch.length; i++) {
          lisSearch[i].querySelector('a').className = ''
        }
        lisSearch[0].querySelector('a').className = 'active'
      }
    }
  }
</script>
<style scoped>
</style>
