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
            <li>
              <router-link to="/agents">代理商注册</router-link>
            </li>
            <li v-show="isLoginShow">
              <a href="javascript:;" style="color: #f60;"
                 @click="toPersonalCenter">欢迎您:{{loginName ? loginName : ""}}</a>
            </li>
            <li class="AdminLoginList">
              <a href="javascript:;">管理员登录</a>
              <ul>
                <!--<li><a href="http://hly.1000da.com.cn/user/#/" target="view_window">惠乐游后台管理系统</a></li>-->
                <li><a href="http://tuniu.1000da.com.cn/supplier" target="view_window">供应商管理系统</a></li>
                <li><a href="http://tuniu.1000da.com.cn/agents" target="view_window">代理商管理系统</a></li>
                <li><a href="http://tuniu.1000da.com.cn/admin" target="view_window">惠乐游管理系统</a></li>
              </ul>
            </li>
            <li v-show="showQuit">
              <a href="javascript:;" @click="Quit">退出</a>
            </li>
          </ul>
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
            <li v-for="item,index in mainNavWrapContentList" @click="clickMainNavWrapContent(index)"
                :class="{active:index==n}">
              <router-link :to="item.to">{{item.name}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <div class="FixedComment" v-show="showFixedComment">

      <ul class="FixedCommentTop">

        <li class="App">

          <a href="javascript:;"></a>

          <img src="../../assets/img/APPImage.png" width="274" height="310">

        </li>

        <li class="goLogin">

          <a href="javascript:;"></a>
          <router-link to="/adminLogin">前往登录</router-link>
        </li>

        <li class="myFocusOn">

          <a href="javascript:;"></a>

          <router-link to="/personalCenter/myCollection">我的关注</router-link>

        </li>

        <li class="myOrder">

          <a href="javascript:;"></a>
          <router-link to="/personalCenter/myTourOrder">我的订单</router-link>

        </li>

        <li class="myGiftCertificates">

          <a href="javascript:;"></a>

          <a href="javascript:;">我的礼券</a>

        </li>

        <li class="messageToRemind">

          <a href="javascript:;"></a>

          <a href="javascript:;">消息提醒</a>

        </li>

        <li class="onlineCustomerService">

          <a href="javascript:;"></a>

          <a href="javascript:;">在线客服</a>

        </li>

      </ul>

      <ul class="FixedCommentBottom">

        <li class="askTicketSurvey">

          <a href="javascript:;"></a>

          <a href="javascript:;">问券调查</a>

        </li>

        <li class="opinionSuggestion">

          <a href="javascript:;"></a>

          <a href="javascript:;">意见建议</a>

        </li>

        <li class="goTop">

          <a href="javascript:;"></a>

          <a href="javascript:;">返回顶部</a>

        </li>

      </ul>

    </div>

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
      'showFixedComment'
    ]),
    watch: {
      '$route'(to, from) {
        this.$store.commit('hideLoading')
      }
    },
    data() {
      return {
        'showQuit':false,
        n:0,
        isLoginShow: false,
        isLogin: true,
        getName: '获取动态验证码',
        smSiName: '所有产品',
        isShowMask: false,
        UserLoadingShow: true,
        UserRegisterBoxShow: false,
        isDisabled: false,
        loginName: '',
        mainNavWrapContentList: [
          {
            name: '跟团游',
            to: '/Comment/HeelTour'
          },
          {
            name: '门票',
            to: '/Comment/AdmissionTicketHomePage'
          },
          {
            name: '酒店',
            to: '/Comment/HotelHomePage'
          },
          {
            name: '酒店详情',
            to: '/Comment/HotelSearchMore'
          },
        ]
      }
    },
    watch: {
      '$route' (to, from) {
        let str = to.path;
        if(str.includes('Hotel')){
          sessionStorage.setItem('commentNavNum', 2);
          window.location.reload()
        }else if(str.includes('Ticket')){
          sessionStorage.setItem('commentNavNum', 1);
          window.location.reload()
        }else if(str.includes('agencies')){
          sessionStorage.setItem('commentNavNum', 0);
          window.location.reload()
        }
      }
    },
    methods: {
      clickMainNavWrapContent(index) {
        let commentNavNum = JSON.parse(sessionStorage.getItem('indexNumber'));
        sessionStorage.setItem('commentNavNum', index);
        this.n = JSON.parse(sessionStorage.getItem('commentNavNum'));
        if (this.n == 2) {
          this.$store.commit('hideShowFixedComment')
        } else {
          this.$store.commit('showShowFixedComment')
        }
      },
      //退出
      Quit() {
        //删除用户sessionStorage
        let user = JSON.parse(sessionStorage.getItem('user'))
        if (!user) {
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
          .then(() => {
//          this.$store.commit('hideLoading')
          })

      },
      //选择旅游类型
      changeTaualType(id) {
        this.smSiName = id.sm_si_Name
      },
      //跳转个人中心
      toPersonalCenter() {
        this.$router.push({name: 'MyTourOrder'})
      }
    },
    created() {
      let user = JSON.parse(sessionStorage.getItem('user'))
      if(user){
        this.showQuit = true;
      }
      this.initData();
      //当前选中导航
      let id = JSON.parse(sessionStorage.getItem('commentNavNum'));
      if (id) {
        this.n = id;
      } else {
        this.n = 0
      }
      //判断右边导航是否隐藏
      if (id == 2) {
        this.$store.commit('hideShowFixedComment')
      } else {
        this.$store.commit('showShowFixedComment')
      }
      sessionStorage.setItem('indexNumber', 0)
    },
    mounted() {
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
  .active {
    background-color: orange;
  }

  .active a {
    color: #fff;
  }

  .FixedComment {
    width: 40px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #000;
    z-index: 999;
  }

  .FixedComment li {
    position: relative;
    overflow: hidden;
  }

  .FixedComment li > a:first-of-type {
    height: 40px;
    background-image: url("../../assets/img/rc_icon_all.png");
    background-repeat: no-repeat;
    border-top: 1px solid #3c3c3c;
  }

  .FixedComment li > a:nth-of-type(2) {
    position: absolute;
    right: 50px;
    top: 0;
    transition: .3s linear;
    width: 100px;
    text-align: center;
    font: 16px/40px "微软雅黑";
    color: #ff8800;
    background-color: #333333;
    border-left: 4px solid #ff8800;
    box-sizing: content-box;
    opacity: .1;
  }

  .FixedCommentTop > .App > a {
    background-position: 6px 14px;
  }

  .FixedCommentTop {
    margin-top: 100px;
  }

  .FixedComment li:hover > a:nth-of-type(2) {
    right: 39px;
    opacity: 1;
  }

  .FixedComment li:hover {
    overflow: visible;
  }

  .FixedCommentTop > .App:hover > a {
    background-position: -62px 14px;
  }

  .FixedCommentTop > .App:hover > img {
    right: 40px;
    opacity: 1;
  }

  .FixedCommentTop > .App > img {
    position: absolute;
    right: 50px;
    top: 0px;
    transition: .3s linear;
    opacity: .1;
  }

  .FixedCommentTop > .goLogin > a:first-of-type {
    background-position: 5px -36px;
  }

  .FixedCommentTop > .goLogin:hover > a:first-of-type {
    background-position: -64px -36px;
  }

  .FixedCommentTop > .myFocusOn > a:first-of-type {
    background-position: 6px -97px;
  }

  .FixedCommentTop > .myFocusOn:hover > a:first-of-type {
    background-position: -61px -97px;
  }

  .FixedCommentTop > .myOrder > a:first-of-type {
    background-position: 8px -224px;
  }

  .FixedCommentTop > .myOrder:hover > a:first-of-type {
    background-position: -61px -224px;
  }

  .FixedCommentTop > .myGiftCertificates > a:first-of-type {
    background-position: 10px -288px;
  }

  .FixedCommentTop > .myGiftCertificates:hover > a:first-of-type {
    background-position: -58px -288px;
  }

  .FixedCommentTop > .messageToRemind > a:first-of-type {
    background-position: 8px -785px;
  }

  .FixedCommentTop > .messageToRemind:hover > a:first-of-type {
    background-position: -60px -785px;
  }

  .FixedCommentTop > .onlineCustomerService > a:first-of-type {
    background-position: 8px -728px;
  }

  .FixedCommentTop > .onlineCustomerService:hover > a:first-of-type {
    background-position: -60px -728px;
  }

  .FixedCommentBottom {
    margin-top: 100px;
  }

  .FixedCommentBottom > .askTicketSurvey > a:first-of-type {
    background-position: 8px -846px;
  }

  .FixedCommentBottom > .askTicketSurvey:hover > a:first-of-type {
    background-position: -60px -846px;
  }

  .FixedCommentBottom > .opinionSuggestion > a:first-of-type {
    background-position: 9px -544px;
  }

  .FixedCommentBottom > .opinionSuggestion:hover > a:first-of-type {
    background-position: -60px -544px;
  }

  .FixedCommentBottom > .goTop > a:first-of-type {
    background-position: 9px -600px;
  }

  .FixedCommentBottom > .goTop:hover > a:first-of-type {
    background-position: -60px -600px;
  }

</style>
