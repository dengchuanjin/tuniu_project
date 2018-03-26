<template>
  <div>
    <!--导航-->
    <div class="navBar">
      <div class="innerNav">
        <div class="logo">
          <img width="35px" height="35px" src="../../assets/img/center.png" alt="">
        </div>
        <div class="nav">
          <ul>
            <li>
              <a href="">首页</a>
            </li>
            <li>
            <a href="">跟团</a>
            </li>
            <li>
              <a href="">自助</a></li>
            <li>
              <a href="">邮轮</a></li>
            <li>
              <a href="">自驾</a>
            </li>
            <li>
              <a href="">特卖</a>
            </li>
            <li>
              <a href="">牛人专线</a>
            </li>
            <li>
              <a href="">门票</a>
          </li>
            <li>
              <a href="">酒店</a>
            </li>
            <li>
              <a href="">机票</a>
            </li>
            <li>
              <a href="">火车票</a>
            </li>
            <li>
              <a href="">公司游</a>
            </li>
            <li>
              <a href="">金融</a>
            </li>
            <li>
              <a href="">攻略</a>
            </li>
            <li class="phone">
              <span></span>
              <a href="">0000-000-000</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="blockFirst"></div>
    <!--选择地区-->
    <div class="hotelArea">
      <div class="hotelAreaMiddle">
        <dl class="areaBox">
          <dt class="startArea">出发地域</dt>
          <dd v-for="ar in ars" class="selectArea">
            <a href="javascript:void(0)">{{ar}}</a>
          </dd>
        </dl>
      </div>
    </div>
    <!--地区详情-->
    <div class="areaContainer">
      <div class="areaDetail" v-for="item,index in areaDetails">
        <div class="positionBox">
          <div class="boxContent" v-for="ite,index in item">
            <div class="areaDetailImg">
              <a href="javascript"><img src="../../assets/img/LJ.jpg" width="230" height="175" alt=""></a>
            </div>
            <div class="hotelExplain"><a href="javascript:void(0)">{{ite.name}}</a></div>
            <div class="boxBottle">
              <span class="money">￥</span>
              <span class="bbPbrice">{{ite.price}}</span>
              <span class="qi">起</span>
              <a href="javascript:void(0)" class="im">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--更多客栈-->
    <div class="moreInn">
      <div class="imgBox">
        <a v-for="m in mores" href="javascript:void(0)">{{m}}</a>
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
        ars: [
          '华东',
          '华北',
          '华南',
          '西部',
          '华中'
        ],
        //地区详情
        areaDetails:[
          [
            {
              name:"丽江沐云听风客栈",
              price:'211'
            },
            {
              name:"丽江锦瑟华年客栈旗舰店",
              price:'183'
            },
            {
              name:"丽江佬树客栈-云锦雅居",
              price:'288'
            },
            {
              name:"大业堂私人尚品客栈（丽江店）",
              price:'191'
            },
            {
              name:"花样年华精品风情驿栈（丽江臻品院）",
              price:'384'
            },
            {
              name:"丽江·晴初阁客栈",
              price:'199'
            }
          ],
          [
            {
              name:"丽江沐云听风客栈",
              price:'211'
            },
            {
              name:"丽江锦瑟华年客栈旗舰店",
              price:'183'
            },
            {
              name:"丽江佬树客栈-云锦雅居",
              price:'288'
            },
            {
              name:"大业堂私人尚品客栈（丽江店）",
              price:'191'
            },
            {
              name:"花样年华精品风情驿栈（丽江臻品院）",
              price:'384'
            },
            {
              name:"丽江·晴初阁客栈",
              price:'199'
            }
          ],
          [
            {
              name:"丽江沐云听风客栈",
              price:'211'
            },
            {
              name:"丽江锦瑟华年客栈旗舰店",
              price:'183'
            },
            {
              name:"丽江佬树客栈-云锦雅居",
              price:'288'
            },
            {
              name:"大业堂私人尚品客栈（丽江店）",
              price:'191'
            },
            {
              name:"花样年华精品风情驿栈（丽江臻品院）",
              price:'384'
            },
            {
              name:"丽江·晴初阁客栈",
              price:'199'
            }
          ],
          [
            {
              name:"丽江沐云听风客栈",
              price:'211'
            },
            {
              name:"丽江锦瑟华年客栈旗舰店",
              price:'183'
            },
            {
              name:"丽江佬树客栈-云锦雅居",
              price:'288'
            },
            {
              name:"大业堂私人尚品客栈（丽江店）",
              price:'191'
            },
            {
              name:"花样年华精品风情驿栈（丽江臻品院）",
              price:'384'
            },
            {
              name:"丽江·晴初阁客栈",
              price:'199'
            }
          ],
          [
            {
              name:"丽江沐云听风客栈",
              price:'211'
            },
            {
              name:"丽江锦瑟华年客栈旗舰店",
              price:'183'
            },
            {
              name:"丽江佬树客栈-云锦雅居",
              price:'288'
            },
            {
              name:"大业堂私人尚品客栈（丽江店）",
              price:'191'
            },
            {
              name:"花样年华精品风情驿栈（丽江臻品院）",
              price:'384'
            },
            {
              name:"丽江·晴初阁客栈",
              price:'199'
            }
          ]
        ],
        //更多客栈
        mores:[
           "腾冲",
           "丹山",
           "凤凰",
           "阳朔"
        ],
      }
    },
    methods: {},
    mounted() {
    },
    created() {}
  }
</script>

<style scoped>
  <!--导航-->
  .navBar{
    height: 58px;
    border-top: 1px solid #999;
    text-align: center;
  }

  .innerNav{
    height: 58px;
    width: 1000px;
    margin: 0 auto;
  }

  .logo{
    float: left;
    width: 160px;
    height: 58px;
    padding: 10px 0px 0px 70px;
  }

  .nav{
    width: 838px;
    height: 58px;
    float: right;
  }

  .nav ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  .nav ul li {
    float: left;
    height: 58px;
  }


  .nav>ul>li>a{
    color: #736f72;
    display: inline-block;
    padding: 0px 8px;
    font : 14px/58px '微软雅黑';
    text-decoration: none;
    text-align: center;
  }

  .phone{
    margin-left: 10px;
  }

  .phone>span{
    width: 13px;
    height: 14px;
    background-image: url("../../assets/img/icon-greenphone.png");
    display: inline-block;
    margin-bottom: -2px;
  }

  .nav>ul  .phone>a{
    color: #38c249;
    padding: 0;
  }
  /*第一个版块*/
  .blockFirst{
    width: 100%;
    margin: 0 auto;
    height: 590px;
    background: url("../../assets/img/bg_blockFirstjpg.jpg") no-repeat top center;
  }
  /*地区选择*/
  .hotelArea{
    height: 110px;
    font-size: 24px;
    text-align: left;
    background-color: #ffffea;
  }
  .hotelAreaMiddle{
    height: 110px;
    width: 1160px;
    margin: 0 auto;
    transform: translateX(10%) translateY(15%);
  }
  .startArea{
    float: left;
    width: 115px;
    height: 30px;
    background-color: #ff9644;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 30px;
    margin-right: 35px;
  }

  .areaBox>.selectArea{
    width: 50px;
    height: 30px;
    margin-right: 35px;
    float: left;
    text-align: center;
  }
  .areaBox>.selectArea>a{
    display: block;
    width: 50px;
    height: 30px;
    /*background-color: #b3e19d;*/
    color: #000;
    float: left;
    text-align: center;
    line-height: 30px;
    font-style: normal;
    border-radius: 10px;
  }
  .areaBox>.selectArea>a:hover{
    opacity: 0.9;
  }
  /*地区详情*/
  .areaDetail{
    margin: 0 auto;
    width: 100%;
    height: 785px;
    background-color: blueviolet;
  }
  .positionBox{
    width: 710px;
    height: 574px;
    margin: 0 auto;
  }
  .boxContent{
    float: left;
    width: 230px;
    height: 280px;
    margin-bottom: 10px;
    background-color: #f7f7f7;
  }

  .boxContent:nth-child(1),.boxContent:nth-child(2),.boxContent:nth-child(4),.boxContent:nth-child(5){
    margin-right: 10px;
  }

  .boxContent>.hotelExplain{
    width: 230px;
    height: 50px;
    text-align: left;
    font: 14px/14px 'Microsoft YaHei';
    padding: 7px 0 3px 5px;
  }

  .boxContent>.hotelExplain>a{
    line-height: 20px;
  }

  .boxContent>.boxBottle{
    width: 230px;
    height: 50px;
    text-align: left;
    padding: 10px 5px 10px 5px;
  }

  .boxBottle>span{
    line-height: 30px;
  }

  .boxBottle>a{
    display: block;
    height: 30px;
    width: 100px;
    background-color: #ff903f;
    float: right;
    text-align: center;
    font: 20px/25px 'Microsoft YaHei';
    color: #ffffff;
  }

  .boxBottle>.money{
    color: #ff903f;
    font-size: 16px;
  }
  .boxBottle>.bbPbrice{
    font-size: 23px;
    color: #ff903f;
  }

  .boxBottle>.qi{
    color: rgb(64, 64, 64);
    font-size: 16px;
  }

  .areaDetail:nth-child(1){
    background: url("../../assets/img/bg_lijiang.jpg") no-repeat top center ;
  }
  .areaDetail:nth-child(1)>.positionBox{
    transform: translateX(18%) translateY(18%);
  }

  .areaDetail:nth-child(2){
    background: url("../../assets/img/bg_dali.jpg") no-repeat top center ;
  }

  .areaDetail:nth-child(2)>.positionBox{
    transform: translateX(-18%) translateY(18%);
  }

  .areaDetail:nth-child(3){
    background: url("../../assets/img/bg_xiamen.jpg") no-repeat top center ;
  }

  .areaDetail:nth-child(3)>.positionBox{
    transform: translateX(18%) translateY(18%);
  }

  .areaDetail:nth-child(4){
    background: url("../../assets/img/bg_hangzhou.jpg") no-repeat top center ;
  }

  .areaDetail:nth-child(4)>.positionBox{
    transform: translateX(-18%) translateY(18%);
  }

  .areaDetail:nth-child(5){
    background: url("../../assets/img/bg_sanya.jpg") no-repeat top center ;
  }

  .areaDetail:nth-child(5)>.positionBox{
    transform: translateX(18%) translateY(18%);
  }

  /*更多客栈*/
  .moreInn{
    width: 100%;
    height: 487px;
    background: url("../../assets/img/bg1_moreInn.jpg") top center no-repeat;
    margin: -13px auto 0;
    position: relative;
  }
  .imgBox{
    width: 1000px;
    height: 242px;
    text-align: center;
    margin: 0px auto;
    transform: translateX(0%) translateY(62%);

  }
  .imgBox>a{
    width: 242px;
    height: 242px;
    margin-right: 8px;
    float: left;
    color: #fff;
    font-size: 44px;
    line-height: 242px;
  }

</style >
