<template>
  <div>
    <section class="commentTop">
      <!--Top导航-->
      <div class="operationNav">
        <div class="operationNavContent clearfix">
          <ul class="loginList">
            <li><a href="javascript:;"  @click="openWendow">登录</a></li>
          </ul>
          <ul class="operationNavIcon">
            <li class="microBlog"><a href="javascript:;"></a></li>
            <li class="APP">
              <a href="javascript:;"></a>
              <div>
                <img src="../assets/img/APPImage.png" height="310" width="274"/>
              </div>
            </li>
            <li class="weChat">
              <a href="javascript:;"></a>
              <div>
                <img src="../assets/img/erweima_v2.gif" height="209" width="299"/>
              </div>
            </li>
          </ul>
          <div class="operationNavFunction">
            <ul class="operationNavFunctionList">
              <li><a href="javascript:;">途牛商旅</a></li>
              <li><a href="javascript:;">严选商城</a></li>
              <li><a href="javascript:;" class="active">企业频道</a></li>
              <li><a href="javascript:;" class="active">会员俱乐部</a></li>
              <li class="myOrder">
                <a href="javascript:;">我的订单<i></i></a>
                <ul class="myOrderList">
                  <li><a href="javascript:;">全部订单</a></li>
                  <li><a href="javascript:;">我的机票</a></li>
                  <li><a href="javascript:;">我的火车票</a></li>
                  <li><a href="javascript:;">积分商城</a></li>
                </ul>
              </li>
              <li class="websiteMap">
                <a href="javascript:;">网站地图<i></i></a>
                <ul class="websiteMapList">
                  <li class="goForAtravel">
                    <strong>去旅游</strong>
                    <ul class="goForAtravelContent clearfix">
                      <li>
                        <ul>
                          <li><a href="javascript:;">跟团游</a></li>
                          <li><a href="javascript:;">自由行</a></li>
                          <li><a href="javascript:;">酒+景</a></li>
                          <li><a href="javascript:;">公司旅游</a></li>
                          <li><a href="javascript:;">当地玩乐</a></li>
                          <li><a href="javascript:;">首付出发<em></em></a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><a href="javascript:;">牛人专线</a></li>
                          <li><a href="javascript:;">亲子游</a></li>
                          <li><a href="javascript:;">蜜月游</a></li>
                          <li><a href="javascript:;">海岛游</a></li>
                          <li><a href="javascript:;">老于推荐</a></li>
                          <li><a href="javascript:;">机票+酒店<em></em></a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><a href="javascript:;">酒店</a></li>
                          <li><a href="javascript:;">门票</a></li>
                          <li><a href="javascript:;">邮轮</a></li>
                          <li><a href="javascript:;">签证</a></li>
                          <li><a href="javascript:;">机票</a></li>
                          <li><a href="javascript:;">旅拍</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="queryDiscount">
                    <strong>寻优惠</strong>
                    <ul>
                      <li><a href="javascript:;">特卖</a></li>
                      <li><a href="javascript:;">订酒店 返现金</a></li>
                      <li><a href="javascript:;">积分商城</a></li>
                      <li><a href="javascript:;">银行特惠游</a></li>
                    </ul>
                  </li>
                  <li class="readRaiders">
                    <strong>看攻略</strong>
                    <ul>
                      <li><a href="javascript:;">攻略</a></li>
                      <li><a href="javascript:;">途牛风向标</a></li>
                      <li><a href="javascript:;">游记</a></li>
                      <li><a href="javascript:;">达人玩法</a></li>
                    </ul>
                  </li>
                  <li class="searchService">
                    <strong>查服务</strong>
                    <ul>
                      <li><a href="javascript:;">帮助中心</a></li>
                      <li><a href="javascript:;">会员俱乐部</a></li>
                      <li><a href="javascript:;">阳光保障</a></li>
                      <li><a href="javascript:;">火车时刻表</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--TitleLogoAndQuery-->
      <div class="logoAndQuery">
        <div class="logoAndQueryContent clearfix">
          <!--图标-->
          <div class="websiteLogo">
            <a href="javascript:;">
              <img src="../assets/img/huileyouLogo.jpg" alt="" width="230" height="80">
            </a>
          </div>
          <!--搜索框-->
          <div class="queryBox">
            <div class="queryAllType">
              <a href="javascript:;">{{smSiName}}<i></i></a>
              <ul class="queryAllTypeList">
                <li v-for="item,index in navList" @click="changeTaualType(item)"><a href="javascript:;">{{item.sm_si_Name}}</a></li>
              </ul>
            </div>
            <div class="queryTextInput">
              <input type="text" placeholder="马尔代夫">
              <div class="localRecommend">
                <a href="javascript:;">日本</a>
                <a href="javascript:;">三亚</a>
                <a href="javascript:;">泰国</a>
              </div>
            </div>
            <div class="queryButton">
              <button></button>
            </div>
          </div>
          <!--客服-->
          <div class="customerService">
            <a href="javascript:;">
              欢迎使用
              <span>在线客服</span>
            </a>
            <span>
              24h客户服务电话
              <strong>4007-999-999</strong>
            </span>
            <em></em>
          </div>
        </div>
      </div>
      <!--主导航-->
      <div class="mainNavWrap">
        <nav class="mainNavWrapContent">
          <ul class="mainNavWrapContentList clearfix">
            <li v-for="item in navList">
              <a :href="'http://'+item.sm_si_GoURL">{{item.sm_si_Name}}<em v-show="item.sysChildList.length != 0"></em></a>
              <div v-show="item.sysChildList.length != 0">
                <div class="childrenNav"></div>
                <div class="childrenNavContent">
                  <a v-for="ite,index in item.sysChildList" :href="ite.sm_sc_GoURL">{{ite.sm_sc_Name}}</a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <!--旅游内容-->
      <div class="productBody">
        <h3>{{lineScheduleObj.ts_pt_Name}}</h3>
        <div class="tourismType clearfix">
          <strong>跟团游</strong>
          <span><i>编号300071416：</i>本产品由云南乐视国际旅行社有限公司直售，并提供咨询/预订/售后服务，合同需与商家直接签</span>
        </div>
        <div class="productBodyIntroduce clearfix">
          <div class="pictureShowAndTime">
            <div class="pictureShow">
              <div class="pictureShowList">
                <div class="block">
                  <el-carousel height="280px">
                    <el-carousel-item v-for="item in pictureList">
                      <img :src="item" height="280" width="500">
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
              <!--日历和城市选择-->
              <div class="calendarWrap">
                <ul class="monthSelecte clearfix" ref="monthSelecte">
                  <li v-for="item,index in searchMonth" @click="changeSearchMonth(index)">
                    <a href="javascript:;" :class="{active:isActiveSearchMonth}">
                      <strong>{{item.name}}</strong>
                      <span>￥3788起</span>
                    </a>
                  </li>
                </ul>
                <div class="calendarList">
                  <ul class="weekList clearfix">
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                  </ul>
                  <ul class="calendarContentList clearfix" id="calendarContentList">
                    <li style="color: #ccc" v-for="item in arr1">{{item}}</li>
                    <li v-for="item in arr4">{{item}}</li>
                    <li v-for="item in arr3">{{"今天"}}
                      <div v-show="item.isJ">
                        <span>充足</span>
                        <strong>￥{{item.ts_pp_Price}}起</strong>
                        <div class="mask">
                          <i></i>
                          <div class="maskContent clearfix">
                            <div>
                              <strong>成人票:</strong>
                              <span>￥{{item.ts_pp_Price}}起</span>
                            </div>
                            <div>
                              <strong>日期:</strong>
                              <span>{{item.ts_pp_Date}}</span>
                            </div>
                            <div>
                              <strong>儿童票:</strong>
                              <span>￥{{item.ts_pp_ChildPrice}}起</span>
                            </div>
                            <div>
                              <strong>出发城市:</strong>
                              <span>{{item.ts_pp_FromPlace}}</span>
                            </div>
                            <div>
                              <strong>剩余票:</strong>
                              <span>{{item.ts_pp_Person}}张</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li v-for="item in arr5">{{item.n}}
                      <div v-show="item.ts_pp_Price">
                        <span v-if="item.ts_pp_Person>10">充足</span>
                        <span v-else>不多</span>
                        <strong>￥{{item.ts_pp_Price}}起</strong>
                        <div class="mask">
                          <i></i>
                          <div class="maskContent clearfix">
                            <div>
                              <strong>成人票:</strong>
                              <span>￥{{item.ts_pp_Price}}起</span>
                            </div>
                            <div>
                              <strong>日期:</strong>
                              <span>{{item.ts_pp_Date}}</span>
                            </div>
                            <div>
                              <strong>儿童票:</strong>
                              <span>￥{{item.ts_pp_ChildPrice}}起</span>
                            </div>
                            <div>
                              <strong>出发城市:</strong>
                              <span>{{item.ts_pp_FromPlace}}</span>
                            </div>
                            <div>
                              <strong>剩余票:</strong>
                              <span>{{item.ts_pp_Person}}张</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li style="color: #ccc" v-for="item in arr2">{{item}}</li>
                  </ul>
                </div>
              </div>
              <p class="prompt">* 日历上显示的价格为当日最低成人优惠价，您可在下单时选择可用的优惠</p>
            </div>
          </div>
          <!--价格和评价-->
          <div class="pictureShowAndTimeDetails">
            <div class="ticketPrice">
              <i></i>
              <div class="ticketPriceContent clearfix">
                <span>促销价:<span>￥</span><strong>1788</strong>起<a href="javascript:;">起价说明</a></span>
                <div class="evaluate">
                  <div class="satisfaction">
                    <span>满意度</span>
                    <a href="javascript:;">96<i>%</i></a>
                  </div>
                  <div class="comment">
                    <span>出游人数：<a href="javascript:;">70437</a></span>
                    <span>点评人数：<a href="javascript:;">7956</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="ticketType">
              <div class="ticketTypeOK">
                <div class="Lately clearfix">
                  <span>150人出游</span>
                  <strong>最近30天8人出游</strong>
                </div>
                <div class="Characteristic clearfix">
                  <span>产品亮点:</span>
                  <ul>
                    <li><i></i>无自费</li>
                    <li><i></i>高性价比</li>
                    <li><i></i>接送机</li>
                  </ul>
                </div>
                <div class="ticketTypeTwoOK clearfix">
                  <span>二次确认: </span>
                  <strong>此商品需商家确认后可出行</strong>
                </div>
                <div class="tourOperator clearfix">
                  <div>
                    <img src="../assets/img/tourOperator.png" height="50" width="81">
                    <strong>丽江旅游</strong>
                  </div>
                  <div class="customerSer">
                    <a href="javascript:;" class="phone"><span></span>客服电话</a>
                    <a href="javascript:;" class="inPhone"><span></span>在线咨询</a>
                  </div>
                </div>
              </div>

              <div class="setOut">
                <ul>
                  <li class="selectCity">
                    <span>出发城市: </span>
                    <el-select v-model="provinceValue" placeholder="请选择出发城市" size="small" style="width: 150px"
                               @change="getSearchCity">
                      <el-option
                        v-for="item,index in getLineCityList"
                        :key="index"
                        :label="item"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </li>
                  <li>
                      <div class="block">
                        <span class="demonstration">出发日期: </span>
                        <el-date-picker
                          v-model="value1"
                          type="date"
                          placeholder="选择日期"
                          size=small>
                        </el-date-picker>
                      </div>
                  </li>
                  <li>
                    <span>选择数量:</span>
                    <el-input-number v-model="num1" @change="handleChange" size="small" :min="1" :max="10" label="描述文字"></el-input-number>
                  </li>
                </ul>
                <div class="button clearfix">
                  <a href="javascript:;" @click="openWendow">立即预定</a>
                  <a href="javascript:;">APP优惠<i></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="loginMask" v-show="isLoginMask">
      <div class="maskBox"></div>
      <div class="loginBox">
        <div class="loginBoxTitle">
          <h4>账户登录</h4>
          <a href="javascript:;" @click="closeWindow">×</a>
        </div>
        <div class="loginBoxInput">
          <input type="text" class="loginAccountNumber" placeholder="请输入电话号码">
          <div style="position: relative;">
            <input type="text" class="loginPassword" placeholder="验证码">
            <a href="javascript:;" class="getNumber" id="getNumber" @click="sendOutSuccess">{{getName}}</a>
          </div>
          <input type="button" value="登录" class="loginBtn" @click="loginSubmit">
        </div>
      </div>
    </div>
    <!--loading加载-->
    <div class="loadingMask" v-show="isLoading">
      <div class="loadingMaskBox"></div>
      <div class="loadingContentBox">
        <i></i>
        <p>拼命加载中</p>
      </div>
    </div>
    <!--主体-->
    <section id="wrap" v-show="iswrap">
      <header id="headerNavWrap">
        <nav class="headerNav clearfix" ref="headerNav">
          <span @click="changeType(index)" v-for="item,index in lineMenuList" :class="{active:index==0}"><a
            :href="'#h'+item.menuID">{{item.menuName}}</a></span>
        </nav>
      </header>
      <section id="content">
        <div class="productDetailsWrap" id="h1">
          <!--产品详情-->
          <div class="productDetails clearfix">
            <div class="discountIcon">
              <h3>产品详情</h3>
            </div>
            <div class="productDetailsContent">
              <div class="clearfix">
                <div>
                  <div class="couponsActive clearfix">
                    <span></span>
                    <h5>推荐理由</h5>
                  </div>
                  <div class="reason" v-html="productDetailsObj.ts_tg_IntroduceReason"></div>
                </div>
                <div>
                  <div class="couponsActive clearfix">
                    <span></span>
                    <h5>产品介绍</h5>
                  </div>
                  <div class="reason" v-html="productDetailsObj.ta_tg_Describe"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--线路日程-->
        <div class="LineSchedule clearfix" id="h2">
          <div class="discountIcon">
            <h3>行程线路</h3>
          </div>
          <div class="LineScheduleContent">
            <!--日程安排-->
            <ul>
              <li v-for="item,index in lineScheduleObj.prepareList" :id="'LineSchedule'+ index" style="padding-top: 45px;">
                <strong class="dayDetailedTitle">{{item.ts_pt_Content}} {{item.ts_pt_Name}}</strong>
                <div class="dayDetailed">
                  <div v-for="ite in item.travelTimeList">
                    <strong>{{ite.ts_tt_DoTime}}</strong>
                    <span>{{ite.ts_tt_DoWork}}</span>
                    <div class="activeContentList" style="padding-left: 20px;">
                      <span v-for="it in ite.timeActivityList">
                        <p class="information">{{it.ts_ta_DoWork}}</p>
                        <p v-for="i in it.activityFoodList">{{i.ts_af_DoWork}} : {{i.ts_af_Time}}</p>
                        <p class="information" v-show="it.activitySiteList.length != 0">景点信息</p>
                        <p v-for="i in it.activitySiteList">{{i.ts_as_SiteID}} : {{i.ts_as_Time}}</p>
                        <p class="information" v-show="it.activityTransportList.length != 0">交通信息</p>
                        <p v-for="i in it.activityTransportList">{{i.ts_at_DoWork}} : {{i.ts_at_WasteTime}}</p>
                        <p class="information" v-show="it.activityHotelList.length != 0">酒店信息</p>
                        <p v-for="i in it.activityHotelList">{{i.ts_ah_DoWork}} : {{i.ts_ah_WasteTime}}</p>
                        <p class="information" v-show="it.activityNoticeList.length != 0">温馨提示</p>
                        <p v-for="i in it.activityNoticeList">{{i.ts_an_DoWork}} : {{i.ts_an_WasteTime}}</p>
                        <p class="information" v-show="it.activityShoppingList.length != 0">购物信息</p>
                        <p v-for="i in it.activityShoppingList">{{i.ts_as_doWork}} : {{i.ts_as_WasteTime}}</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="imgBox">
                  <img :src="items" alt="" v-for="items in item.ts_pt_ShowImageList">
                </div>
              </li>
            </ul>
          </div>
          <!--左侧导航-->
          <ul class="scheduleList" id="scheduleList" ref="scheduleList" v-show="isScheduleList">
            <li v-for="item,index in lineScheduleObj.prepareList">
              <a :href="'#LineSchedule'+ index"  @click="changeDay(index)">{{item.ts_pt_Content}}</a>
              <i></i>
            </li>
          </ul>
        </div>
        <!--套餐说明-->
        <div class="packageDescription clearfix" id="h3">
          <div class="discountIcon">
            <h3>费用说明</h3>
          </div>
          <div class="packageDescriptionContent">
            <!--费用包含-->
            <div class="wrapMoney">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>费用包含</h5>
              </div>
              <div class="wrapMoneyContent">
                <div v-for="item in IncludeList">
                  <strong>【{{item.ts_fi_Item}}】</strong>
                  <p style="padding-left: 20px;">{{item.ts_fi_Content}}</p>
                </div>
              </div>
            </div>
            <!--费用不包含-->
            <div class="noWrapMoney">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>费用不包含</h5>
              </div>
              <div class="noWrapMoneyContent">
                <div v-for="item in noWrapMoneyList">
                  <strong>【{{item.ts_fi_Item}}】</strong>
                  <p style="padding-left: 20px;">{{item.ts_fi_Content}}</p>
                </div>
              </div>
            </div>
            <!--退订政策-->
            <div class="unsubscribePolicy">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>退订政策</h5>
              </div>
              <div class="unsubscribePolicyContent" v-html="lineScheduleObj.ts_pt_ReturnRule"></div>
            </div>
          </div>
        </div>
        <div class="packageDescription clearfix" id="h4">
          <div class="buyNeedToKnow">
            <div class="discountIcon">
              <h3>预定须知</h3>
            </div>
            <div class="couponsActiveWrap">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>购票需知</h5>
              </div>
              <div class="buyNeedToKnowContent" v-html="lineScheduleObj.ts_pt_BookKnow"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
  import cityOptions from '../assets/js/data'
  import '../assets/css/Compontent1.css'
  import ProvincesOfChina from './public/ProvincesOfChina.vue'
  import {mapGetters} from 'vuex'
  import calendar from './public/calendar.vue'
  import $ from 'jquery'

  export default {
    name: '',
    components: {
      calendar,
      ProvincesOfChina
    },
    computed: mapGetters([
      'productDetailsObj',
      'lineScheduleObj',
      'IncludeList',
      'noWrapMoneyList',
      'lineMenuList',
      'timesPriceList',
      'priceObj',
      'newPriceDetail',
      'navList',
      'getProvinceList',
      'getCityList',
      'getCountyList',
      'getLineCityList',
      'pictureList'
    ]),
    data() {
      return {
        isActiveSearchMonth: false,
        isActive: false,
        iswrap: true,
        getName:'获取动态验证码',
        data: [],
        arr1: [],
        arr2: [],
        arr3: [],
        arr4: [],
        arr5: [],
        selectMonth: [],
        isLoginMask:false,
        city: '',
        isShowMask: false,
        isScheduleList:false,
        positions: {
          left: 0,
          top: 0
        },
        searchMonth: [],
        date: '',
        userSearch: {
          name: ''
        },
        provinceValue: '',
        cityValue: '',
        countyValue: '',
        value1:'',
        num1: 1,
        smSiName:'所有产品',
        isLoading:false
      }
    },
    methods: {
      //日历选项卡
      changeSearchMonth(index) {
        let lis = this.$refs.monthSelecte.querySelectorAll('li');
        let len = lis.length;
        for (let i = 0; i < len; i++) {
          lis[i].querySelector('a').className = ''
        }
        lis[index].querySelector('a').className = 'active'
      },
      getCitySearch(city) {
        $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
          this.userSearch.name = remote_ip_info.city + '市';
          let options = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "goodID": "3",
            "city": city ? city : remote_ip_info.city + '市'//remote_ip_info.city +
          };
          this.$store.dispatch('initTimesPrice', options)
            .then((data) => {
              var calendarContentList = document.getElementById("calendarContentList");
              var str = '';
              var year = new Date().getFullYear();
              var month = new Date().getMonth();

              this.get(year, month, this, data);
              let index = Infinity;
              for (var i = 0; i < data.length; i++) {
                if (data[i].ts_pp_Price < index) {
                  index = data[i].ts_pp_Price
                }
              }

              for (var i = 0; i < 4; i++) {
                this.selectMonth.push({
                  year,
                  month: month + 1 + i,
                  index
                })
              }
            })
        });
      },
      getSearchCity() {
        this.getCitySearch(this.provinceValue);
      },
      getNum(num) {
        return num < 10 ? '0' + num : '' + num;
      },
      initData() {
        this.isLoading = true
        let date = new Date()
        let m = date.getMonth() + 1;
        let y = date.getFullYear()
        for (var i = 0; i < 4; i++) {
          this.searchMonth.push({
            name: y + '年' + this.getNum(m + i) + '月'
          })
        }
        //产品详情
        var getTradeGoodInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "tradeID": "18111729770",
          "page": 1,
          "rows": 10
        }
        this.$store.dispatch('initProductDetails', getTradeGoodInfo)
        //线路出发城市
        var getLineCityOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "lineID": 3

        }
        this.$store.dispatch('initGetLineCity', getLineCityOptions)
        //线路数据
        var getLineInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "lineID": "1"
        }
        this.$store.dispatch('initLineSchedule', getLineInfo)
        //导航套自导航
        var getSystemMenuInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "isDelete": 0
        }
        this.$store.dispatch('initNavList', getSystemMenuInfo)

        //线路菜单
        var getLineMenuInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "lineID": "1"
        }
        this.$store.dispatch('initLineMenu', getLineMenuInfo)

        //轮播图
        var getTopShow = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "itemID": "1",
        }
        this.$store.dispatch('initPictureList',getTopShow)
        setTimeout(()=>{
          this.isLoading = false;
        },1000)
      },
      changeType(index) {
        let spans = this.$refs.headerNav.querySelectorAll('span');
        let len = spans.length;

        for (let i = 0; i < len; i++) {
          spans[i].className = ''
        }
        spans[index].className = 'active'
        if(index==1){
          this.isScheduleList = true
        }else{
          this.isScheduleList = false
        }
      },
      changeDay(index) {
        let lis = this.$refs.scheduleList.querySelectorAll('li');
        let len = lis.length;
        for (let i = 0; i < len; i++) {
          lis[i].children[0].className = ''
        }
        lis[index].children[0].className = 'active'
      },
      getWeek(year, month) {
        return new Date(year, month, 1, 0, 0, 0).getDay();
      },
      //获取一个月中的所有天数
      getDates(year, month) {
        return new Date(year, month + 1, 1, -1, 0, 0).getDate();
      },
      get(year, month, _this, data) {
        year = Number(year);
        month = Number(month);
        var newArr = []
        _this.arr4 = []
        _this.arr2 = []
        _this.arr5 = []
        _this.arr3 = []
        for (var i = 1; i <= 42; i++) {
          var v = i - this.getWeek(year, month);
          if (v < 1) {
            var topMonth = this.getDates(year, month - 1);
            _this.arr1 = []
            _this.arr1.push(topMonth - (this.getWeek(year, month) - i))
          } else if (v > this.getDates(year, month)) {
            var booToomMonth = this.getDates(year, month + 1);
            _this.arr2.push(v - this.getDates(year, month))
          } else if (v == new Date().getDate() && year == new Date().getFullYear() && month == new Date().getMonth()) {
            for (var n = 0; n < data.length; n++) {
              if (data[n].day == new Date().getDate()) {

                data[0].n = v;
                _this.arr3.push({
                  isJ: true,
                  day: data[v - new Date().getDate()]
                })
                _this.arr3.shift()
              }
            }
            _this.arr3.push({
              isJ: false,
              day: data[v - new Date().getDate()]
            })
          }
          else {
            if (v < new Date().getDate()) {

              _this.arr4.push(v)
            } else {
              newArr.push(v)
            }
          }
        }
        for (var j = 0; j < newArr.length; j++) {
          for (var m = 0; m < data.length; m++) {
            if (data[m].day && data[m].day == newArr[j]) {
              data[m].n = newArr[j];
              _this.arr5.push(data[m])
            }
          }
          _this.arr5.push({
            n: newArr[j],
          })
        }
        var hash = {};

        _this.arr5 = _this.arr5.reduce(function (item, next) {
          hash[next.n] ? '' : hash[next.n] = true && item.push(next);
          return item
        }, [])
      },
      //累加器
      handleChange(value) {
      },
      //发送信息
      sendOutSuccess(){
        let num = 60
        let timer = setInterval(()=>{
          num--;
          this.getName = num +'s';
          if( num <= 0 ){
            clearInterval(timer)
            this.getName  = "重新获取验证码"
          }
        },1000)
      },
      //点击关闭登录窗口
      closeWindow(){
        this.isLoginMask = false;
      },
      //点击打开登录窗口
      openWendow(){
        this.isLoginMask = true;
      },
      //选择旅游类型
      changeTaualType(id){
        this.smSiName = id.sm_si_Name
      },
      //发送登录信息并获取登录验证码
      loginSubmit(){
//        var ={
//
//        }
//        this.$store.dispatch('loginSubmit',)
      },

  },
    created() {
      this.initData()
      this.data = cityOptions;
    },
    updated() {
      let lis = this.$refs.scheduleList.querySelectorAll('li')
      if (lis.length) {
        for( var i=0;i<lis.length;i++ ){
          lis[i].children[0].className = ''
        }
        lis[0].children[0].className = 'active'
      }
      let lisSearch = this.$refs.monthSelecte.querySelectorAll('li')
      if (lisSearch.length) {
        for( var i=0;i<lisSearch.length;i++ ){
          lisSearch[i].querySelector('a').className = ''
        }
        lisSearch[0].querySelector('a').className = 'active'
      }
    },
    mounted() {
      this.getCitySearch();
      var sTop = $('#headerNavWrap').get(0).offsetTop+180;
      var w = ($(window).width()-1188)/2
      var bTop = $('#scheduleList').get(0).offsetTop+180
      $(window).bind("scroll", function(){
        var top = $(this).scrollTop(); // 当前窗口的滚动距离

        if(top> sTop ){
          $('#headerNavWrap').css({position: 'fixed', left: w+'px', top: 0,})
          var content = document.getElementById('content');
        }else{
          $('#headerNavWrap').css({position: 'static', left: 'auto', top: 'auto',})
        }
        if(top> bTop ){
          $('#scheduleList').css({position: 'fixed', left: (w+20)+'px', top: '70px',})
        }else{
          $('#scheduleList').css({position: 'static', left: 'auto', top: 'auto',})
        }
      });


    }
  }
</script>
<style>

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
