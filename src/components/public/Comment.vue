<template>
  <div>

    <section class="commentTop">
      <!--Top导航-->
      <div class="operationNav">
        <div class="operationNavContent clearfix">
          <ul class="loginList">
            <li v-show="isLogin">
              <router-link to="/adminLogin">登录</router-link>
            </li>
            <li>
              <router-link to="/Register">游客注册</router-link>
            </li>
            <li>
              <router-link to="/MerchantRegister">供应商注册</router-link>
            </li>
            <li v-show="isLoginShow">
              <a href="javascript:;" style="color: #f60;" @click="toPersonalCenter">欢迎您:{{loginName ? loginName : ""}}</a>
            </li>
            <li class="AdminLoginList">
              <a href="javascript:;">管理员登录</a>
              <ul>
                <li><a href="http://hly.1000da.com.cn/user/#/" target="view_window">惠乐游后台管理系统</a></li>
                <li><a href="http://tuniu.1000da.com.cn/admin/index.html" target="view_window">旅行社管理系统</a></li>
              </ul>
            </li>
            <li v-show="showQuit">
              <a href="javascript:;" @click="Quit">退出</a>
            </li>
          </ul>
          <!--注释-->
          <div>
            <!--<ul class="operationNavIcon">-->
            <!--<li class="microBlog"><a href="javascript:;"></a></li>-->
            <!--<li class="APP">-->
            <!--<a href="javascript:;"></a>-->
            <!--<div>-->
            <!--<img src="../assets/img/APPImage.png" height="310" width="274"/>-->
            <!--</div>-->
            <!--</li>-->
            <!--<li class="weChat">-->
            <!--<a href="javascript:;"></a>-->
            <!--<div>-->
            <!--<img src="../assets/img/erweima_v2.gif" height="209" width="299"/>-->
            <!--</div>-->
            <!--</li>-->
            <!--</ul>-->
            <!--<div class="operationNavFunction">-->
            <!--<ul class="operationNavFunctionList">-->
            <!--<li><a href="javascript:;">商旅</a></li>-->
            <!--<li><a href="javascript:;">严选商城</a></li>-->
            <!--<li><a href="javascript:;" class="active">企业频道</a></li>-->
            <!--<li><a href="javascript:;" class="active">会员俱乐部</a></li>-->
            <!--<li class="myOrder">-->
            <!--<a href="javascript:;">我的订单<i></i></a>-->
            <!--<ul class="myOrderList">-->
            <!--<li><a href="javascript:;">全部订单</a></li>-->
            <!--<li><a href="javascript:;">我的机票</a></li>-->
            <!--<li><a href="javascript:;">我的火车票</a></li>-->
            <!--<li><a href="javascript:;">积分商城</a></li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--<li class="websiteMap">-->
            <!--<a href="javascript:;">网站地图<i></i></a>-->
            <!--<ul class="websiteMapList">-->
            <!--<li class="goForAtravel">-->
            <!--<strong>去旅游</strong>-->
            <!--<ul class="goForAtravelContent clearfix">-->
            <!--<li>-->
            <!--<ul>-->
            <!--<li><a href="javascript:;">跟团游</a></li>-->
            <!--<li><a href="javascript:;">自由行</a></li>-->
            <!--<li><a href="javascript:;">酒+景</a></li>-->
            <!--<li><a href="javascript:;">公司旅游</a></li>-->
            <!--<li><a href="javascript:;">当地玩乐</a></li>-->
            <!--<li><a href="javascript:;">首付出发<em></em></a></li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--<li>-->
            <!--<ul>-->
            <!--<li><a href="javascript:;">专线</a></li>-->
            <!--<li><a href="javascript:;">亲子游</a></li>-->
            <!--<li><a href="javascript:;">蜜月游</a></li>-->
            <!--<li><a href="javascript:;">海岛游</a></li>-->
            <!--<li><a href="javascript:;">老于推荐</a></li>-->
            <!--<li><a href="javascript:;">机票+酒店<em></em></a></li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--<li>-->
            <!--<ul>-->
            <!--<li><a href="javascript:;">酒店</a></li>-->
            <!--<li><a href="javascript:;">门票</a></li>-->
            <!--<li><a href="javascript:;">邮轮</a></li>-->
            <!--<li><a href="javascript:;">签证</a></li>-->
            <!--<li><a href="javascript:;">机票</a></li>-->
            <!--<li><a href="javascript:;">旅拍</a></li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--<li class="queryDiscount">-->
            <!--<strong>寻优惠</strong>-->
            <!--<ul>-->
            <!--<li><a href="javascript:;">特卖</a></li>-->
            <!--<li><a href="javascript:;">订酒店 返现金</a></li>-->
            <!--<li><a href="javascript:;">积分商城</a></li>-->
            <!--<li><a href="javascript:;">银行特惠游</a></li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--<li class="readRaiders">-->
            <!--<strong>看攻略</strong>-->
            <!--<ul>-->
            <!--<li><a href="javascript:;">攻略</a></li>-->
            <!--<li><a href="javascript:;">风向标</a></li>-->
            <!--<li><a href="javascript:;">游记</a></li>-->
            <!--<li><a href="javascript:;">达人玩法</a></li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--<li class="searchService">-->
            <!--<strong>查服务</strong>-->
            <!--<ul>-->
            <!--<li><a href="javascript:;">帮助中心</a></li>-->
            <!--<li><a href="javascript:;">会员俱乐部</a></li>-->
            <!--<li><a href="javascript:;">阳光保障</a></li>-->
            <!--<li><a href="javascript:;">火车时刻表</a></li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
          </div>
        </div>
      </div>
      <!--TitleLogoAndQuery-->
      <div class="logoAndQuery">
        <div class="logoAndQueryContent clearfix">
          <!--图标-->
          <div class="websiteLogo">
            <a href="javascript:;">
              <img src="../../assets/img/huileyouLogo.jpg" alt="" width="230" height="80">
            </a>
          </div>
          <!--搜索框-->
          <div class="queryBox">
            <div class="queryAllType">
              <a href="javascript:;">{{smSiName}}<i></i></a>
              <ul class="queryAllTypeList">
                <li v-for="item,index in navList" @click="changeTaualType(item)"><a
                  href="javascript:;">{{item.sm_si_Name}}</a></li>
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
          <div class="customerService clearfix">
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
          <ul class="mainNavWrapContentList  clearfix" ref="mainNavWrapContentList">
            <!--<li v-for="item in navList">-->
            <!--<a :href="'http://'+item.sm_si_GoURL" class="mainNavWrapContentListActive">{{item.sm_si_Name}}<em-->
            <!--v-show="item.sysChildList.length != 0"></em></a>-->
            <!--<div v-show="item.sysChildList.length != 0">-->
            <!--<div class="childrenNav"></div>-->
            <!--<div class="childrenNavContent">-->
            <!--<a v-for="ite,index in item.sysChildList" :href="ite.sm_sc_GoURL">{{ite.sm_sc_Name}}</a>-->
            <!--</div>-->
            <!--</div>-->
            <!--</li>-->
            <li>
              <router-link to="/Comment/HeelTour">跟团游</router-link>
            </li>
            <li>
              <router-link to="/Comment/AdmissionTicket">门票</router-link>
            </li>
            <li>
              <router-link to="/Comment/HotelHomePage">酒店 </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <router-view name="User"></router-view>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import '@/assets/css/comment.css'
  import {postPromise} from '@/assets/public'

  export default {
    name: '',
    computed: mapGetters([
      'navList',
      'lineScheduleObj',
      'isLoading',
      'showQuit'
    ]),
    watch: {
      '$route' (to, from) {
        this.$store.commit('hideLoading')
      }
    },
    data() {
      return {
        isLoginShow: false,
        isLogin: true,
        getName: '获取动态验证码',
        smSiName: '所有产品',
        isShowMask: false,
        UserLoadingShow: true,
        UserRegisterBoxShow: false,
        isDisabled: false,
        loginName: ''
      }
    },
    methods: {
      //退出
      Quit(){
        //删除用户sessionStorage
        let user = JSON.parse(sessionStorage.getItem('user'))
        if(!user){
          this.$store.commit('hideQuitButton')
          return
        }
        sessionStorage.removeItem('user');
        window.location.reload()
      },
      initData() {
        //导航套自导航
        var getSystemMenuInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "isDelete": 0
        }
//        this.$store.commit('showLoading')
        this.$store.dispatch('initNavList', getSystemMenuInfo)
        .then(()=>{
//          this.$store.commit('hideLoading')
        })

      },
      //选择旅游类型
      changeTaualType(id) {
        this.smSiName = id.sm_si_Name
      },
      //跳转个人中心
      toPersonalCenter(){
        this.$router.push({name:'MyTourOrder'})
      }
    },
    created() {
      this.initData();
    },
    mounted() {
      let ul = this.$refs.mainNavWrapContentList;
      let lis = ul.children;
      lis[0].className = 'active'
      for(let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
          for(var j=0;j<lis.length;j++){
            lis[j].className = ''
          }
          lis[i].className = 'active';
        }
      }

      if (sessionStorage.getItem('user')) {
        var InformetionObj = JSON.parse(sessionStorage.getItem('user'))
        this.isLogin = false;
        this.isLoginShow = true;
        this.loginName = InformetionObj.ui_Name
      }
    },
  }
</script>
<style scoped>
.active{
  background-color: orange;
}
.active a{
  color: #fff;
}
</style>
