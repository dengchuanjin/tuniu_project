<template>
  <div>
    <!--主体-->
    <section id="wrap" v-show="iswrap">
      <!--旅游内容-->
      <div class="productBody">
        <h3>{{productDetailsObj.ts_pt_Name}}</h3>
        <div class="tourismType clearfix">
          <strong>跟团游</strong>
          <!--本产品由云南乐视国际旅行社有限公司直售，并提供咨询/预订/售后服务，合同需与商家直接签-->
          <span><i>编号{{productDetailsObj.ts_pt_GoodsListID}}：</i></span>
        </div>
        <div class="productBodyIntroduce clearfix">
          <div class="pictureShowAndTime">
            <div class="pictureShow">
              <div class="pictureShowList">
                <div class="block">
                  <el-carousel height="280px">
                    <el-carousel-item v-for="item,index in pictureList" :key="index">
                      <img height="280" width="500" v-lazy="item">
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
                  <ul class="calendarContentList clearfix" id="calendarContentList" v-loading="showCalendar">
                    <li style="color: #ccc" v-for="item in arr1">{{item}}</li>
                    <li v-for="item in arr4">{{item}}</li>
                    <!--今天-->
                    <li v-for="item in arr3"  @click="changeTime(item.day)">{{"今天"}}
                      <div v-show="item.isJ">
                        <span>充足</span>
                        <strong>￥{{item.day.ts_pp_Price}}起</strong>
                        <div class="mask">
                          <i></i>
                          <div class="maskContent clearfix">
                            <div>
                              <strong>成人票:</strong>
                              <span>￥{{item.day.ts_pp_Price}}起</span>
                            </div>
                            <div>
                              <strong>日期:</strong>
                              <span>{{item.day.ts_pp_Date}}</span>
                            </div>
                            <div>
                              <strong>儿童票:</strong>
                              <span>￥{{item.day.ts_pp_ChildPrice}}起</span>
                            </div>
                            <div>
                              <strong>出发城市:</strong>
                              <span>{{item.day.ts_pp_FromPlace}}</span>
                            </div>
                            <div>
                              <strong>剩余票:</strong>
                              <span>{{item.day.ts_pp_Person}}张</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <!--有价格的-->
                    <li v-for="item in arr5" @click="changeTime(item)">{{item.n}}
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
                <span>促销价:<span>￥</span><strong>{{productDetailsObj.money}}</strong>起<a href="javascript:;">起价说明</a></span>
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
                    <el-select
                      v-model="addOrderOptions.provinceValue"
                      placeholder="请选择出发城市"
                      size="small"
                      style="width: 150px"
                      @change="getSearchCity"
                    >
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
                        v-model="addOrderOptions.DayValue"
                        type="date"
                        placeholder="选择日期"
                        size=small>
                      </el-date-picker>
                    </div>
                  </li>
                  <li>
                    <span>选择数量:</span><i style="margin-left: 20px">成人:</i>
                    <div class="bottom">
                      <el-tooltip class="item" effect="light" content="此价格根据机票有浮动，详情请咨询客服." placement="bottom-start">
                        <i class=" icon-info22"></i>
                      </el-tooltip>
                      <span style="color: #f60;font-weight: bold;" v-show="addOrderOptions.adultPrice">¥{{addOrderOptions.adultPrice}}</span>
                    </div>
                    <el-input-number
                      v-model="addOrderOptions.adultNumber"
                      @change="handleChange"
                      size="small"
                      :min="0"
                      :max="100"
                      label="描述文字"
                    ></el-input-number>
                    <span style="color: #f60;font-weight: bold;" v-show="addOrderOptions.adultYu">余{{addOrderOptions.adultYu}}</span>
                  </li>
                  <li>
                    <i style="margin-left:70px;margin-right: 30px">儿童:</i>
                    <span style="color: #f60;font-weight: bold;" v-show="addOrderOptions.childPrice">¥{{addOrderOptions.childPrice}}</span>
                    <el-input-number
                      v-model="addOrderOptions.childNumber"
                      @change="handleChange"
                      size="small"
                      :min="0"
                      :max="100"
                      label="描述文字"
                    ></el-input-number>
              <span style="color: #f60;font-weight: bold;" v-show="addOrderOptions.childYu">余{{addOrderOptions.childYu}}</span>
                  </li>
                </ul>
                <div class="button clearfix">
                  <a href="javascript:;" @click="immediatelyReserveSubmit">立即预订</a>
                  <a href="javascript:;">APP优惠<i></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <div class="reason" v-html="productDetailsObj.ts_pt_BookKnow"></div>
                </div>
                <div>
                  <div class="couponsActive clearfix">
                    <span></span>
                    <h5>产品介绍</h5>
                  </div>
                  <div class="reason" v-html="productDetailsObj.ts_pt_ReturnRule"></div>
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
                  <img v-lazy="items" alt="" v-for="items in item.ts_pt_ShowImageList">
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
    <el-dialog
      title="温馨提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span style="color: #f60">请先登录!</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisibleSubmit">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>
<script>
  import cityOptions from '../assets/js/data'
  import '../assets/css/comment.css'
  import '../assets/css/HeelTour.css'
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
      'getProvinceList',
      'getCityList',
      'getCountyList',
      'getLineCityList',
    ]),
    data() {
      return {
        centerDialogVisible:false,//登录弹窗
        showCalendar:false,
        pictureList:[],
        isActiveSearchMonth: false,
        isActive: false,
        iswrap: true,
        data: [],
        arr1: [],
        arr2: [],
        arr3: [],
        arr4: [],
        arr5: [],
        selectMonth: [],
        city: '',
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
        id:'',
        cityValue: '',
        countyValue: '',
        addOrderOptions:{
          ts_pp_ID:'',
          provinceValue: '',
          DayValue:'',
          adultNumber: 0,//成人
          adultYu:'',//成人余票
          adultPrice:'',//成人价格
          childPrice:'',//儿童价格
          childYu:'',//儿童余票
          childNumber:0,//儿童
        },
      }
    },
    methods: {
      //选中日历,item日历信息
      changeTime(item){
        this.addOrderOptions.ts_pp_ID = item.ts_pp_ID;
        this.addOrderOptions.DayValue = item.ts_pp_Date;
        this.addOrderOptions.adultYu = item.ts_pp_Person
        this.addOrderOptions.childYu = item.ts_pp_Child
        this.addOrderOptions.adultPrice = item.ts_pp_Price
        this.addOrderOptions.childPrice = item.ts_pp_ChildPrice
      },
      //日历选项卡
      changeSearchMonth(index) {
        let lis = this.$refs.monthSelecte.querySelectorAll('li');
        let len = lis.length;
        for (let i = 0; i < len; i++) {
          lis[i].querySelector('a').className = ''
        }
        lis[index].querySelector('a').className = 'active'
      },
      //获取搜索城市
      getCitySearch(id,city,isOne) {
        $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
          this.userSearch.name = remote_ip_info.city + '市';
          if(isOne){
            this.addOrderOptions.provinceValue = remote_ip_info.city + '市'
          }
//
          let options = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "lineID": id,
            "city": city ? city : remote_ip_info.city + '市'//remote_ip_info.city +
          };
          this.$store.dispatch('initTimesPrice', options)
            .then((data) => {
              var calendarContentList = document.getElementById("calendarContentList");
              var str = '';
              var year = new Date().getFullYear();
              var month = new Date().getMonth();
              this.showCalendar = true;
              this.get(year, month, this, data).then(()=>{
                this.showCalendar = false;
              });
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
      //选中出发城市
      getSearchCity() {
        this.getCitySearch(this.id,this.addOrderOptions.provinceValue);
        this.addOrderOptions.DayValue = '';
        this.addOrderOptions.adultNumber=0,//成人
        this.addOrderOptions.adultYu='',//成人余票
        this.addOrderOptions.adultPrice='',//成人价格
        this.addOrderOptions.childPrice='',//儿童价格
        this.addOrderOptions.childYu='',//儿童余票
        this.addOrderOptions.childNumber=''//儿童
      },
      //补0
      getNum(num) {
        return num < 10 ? '0' + num : '' + num;
      },
      //初始化数据
      async initData() {
        let date = new Date()
        let m = date.getMonth() + 1;
        let y = date.getFullYear()
        for (var i = 0; i < 4; i++) {
          this.searchMonth.push({
            name: y + '年' + this.getNum(m + i) + '月'
          })
        }
        let tradeID = this.$route.params.id
        //产品详情
        var getTradeGoodInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "goodID": tradeID,
        };
        //获取产品线路id
        let id = await this.$store.dispatch('initProductDetails', getTradeGoodInfo)

        //线路出发城市
        var getLineCityOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "lineID": id
        };
        await this.$store.dispatch('initGetLineCity', getLineCityOptions)
        //线路数据
        var getLineInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "goodID": tradeID,
        };
        await this.$store.dispatch('initLineSchedule', getLineInfo)

        //线路菜单
        var getLineMenuInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "lineID": id
        };
        await this.$store.dispatch('initLineMenu', getLineMenuInfo)
        return id

//        //轮播图
//        var getTopShow = {
//          "loginUserID": "huileyou",
//          "loginUserPass": "123",
//          "itemID": "1",
//        };
//        await this.$store.dispatch('initPictureList',getTopShow)
      },
      //选中线路菜单
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
      //选中日历
      changeDay(index) {
        let lis = this.$refs.scheduleList.querySelectorAll('li');
        let len = lis.length;
        for (let i = 0; i < len; i++) {
          lis[i].children[0].className = ''
        }
        lis[index].children[0].className = 'active'
      },
      //获取周数
      getWeek(year, month) {
        return new Date(year, month, 1, 0, 0, 0).getDay();
      },
      //获取一个月中的所有天数
      getDates(year, month) {
        return new Date(year, month + 1, 1, -1, 0, 0).getDate();
      },
      //获取日历生成
      get(year, month, _this, data) {
        //赋值day
        for (var n = 0; n < data.length; n++) {
          data[n].day = Number(data[n].ts_pp_Date.split('-')[2])
        }
        return new Promise((relove,reject)=>{
          year = Number(year);
          month = Number(month);
          var newArr = []
          _this.arr1 = []
          _this.arr4 = []
          _this.arr2 = []
          _this.arr5 = []
          _this.arr3 = []
          for (var i = 1; i <= 42; i++) {
            var v = i - this.getWeek(year, month);
            if (v < 1) {
              var topMonth = this.getDates(year, month - 1);

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
//                _this.arr3.pop()
                }
              }
              if( _this.arr3.length>1){
                _this.arr3.shift()
              }
              if(!_this.arr3.length){
                _this.arr3.push({
                  isJ: false,
                  day: new Date().getDate()
                })
              }
//              if( _this.arr3.isJ){
//                _this.arr3.push({
//                  isJ: false,
//                  day: data[v - new Date().getDate()]
//                })
//              }else{
//                _this.arr3.push({
//                  isJ: false,
//                  day: data[v - new Date().getDate()]
//                })
//              }

//              console.log( _this.arr3)
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
          relove()
        })
      },
      //累加器
      handleChange(value) {

      },
      //选择旅游类型
      changeTaualType(id){
        this.smSiName = id.sm_si_Name
      },
      //登录确定
      centerDialogVisibleSubmit(){
        this.$router.push({name:'AdminLogin'});
      },
      //立即预订
      immediatelyReserveSubmit(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        if(!user){
          this.centerDialogVisible = true;
          return;
        }
        console.log(this.addOrderOptions)
//        var makeOrder = {
//          "loginUserID": "huileyou",
//          "loginUserPass": "123",
//          "operateUserID": "",
//          "operateUserName": "",
//          "pcName": "",
//          "data": [
//            {
//              "ts_to_od_TouristTraderID": 'qingchunzhilv',
//              "ts_to_od_TouristTraderName": "青春之旅",
//              "ts_to_od_GoodsListID": "001",
//              "ts_to_od_GoodsListName": "鸡一份",
//              "ts_to_od_SellID": "qingchun",
//              "ts_to_od_SellName": "青春",
//              "ts_to_od_SellPrice": 21,
//              "ts_to_od_UserID": "1111",
//              "ts_to_od_UserName": "正兴鸡排",
//              "ts_to_od_Phone": "18111729770",
//              "ts_to_od_CertNo": "身份证号码",
//              "ts_to_od_SellPrice": 21.00
//            }
//          ]
//
//        }
      },

  },
    created() {
      //获取轮播图
      this.$store.commit('showLoading');
      let images = JSON.parse(sessionStorage.getItem('images')).split(',')
      if(!images[images.length-1]){
        images.pop()
      }
      this.pictureList = images;
      this.initData().then((id)=>{
        this.id = id;
        this.getCitySearch(id,'',true);
        this.$store.commit('hideLoading')
      });
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

//      固定的导航
      (function(){
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
      })()


    }
  }
</script>
<style scoped>
  .bottom {
    clear: both;
    display: inline-block;
    text-align: center;
  }

  .item {
    margin: 4px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
