<template>
  <div id="AncientTownHotel">
    <!--古镇游content-->
    <div class="header">
      <div class="HotelVoucher">
        <div class="VoucherNumber">
          <input type="text" placeholder="输入手机号 领取优惠券">
          <button>领取</button>
        </div>
      </div>
    </div>
    <!--热销古镇-->
    <div class="HotSaleTown">
      <div class="HotelContent">
        <ul>
          <li v-for="town in ancientTowns">{{town.name}}</li>
        </ul>
        <!--酒店图片展示-->
        <dl class="HotelPicture">
          <dd v-for="datas in townImages"><img :src="pic.img" v-for="pic in datas" width="312" height="235" alt="">
            <p v-for="pic in datas">{{pic.HotelName}}</p>
            <div class="HotelPrice">￥<span v-for="pic in datas">{{pic.HotelValue}}</span>起
              <button>立即购买</button>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!--江南水乡-->
    <div class="DevinReuter">
      <div class="HotelContent">
        <ul>
          <li v-for="reuter in devinReuters">{{reuter.name}}</li>
        </ul>
        <!--酒店图片展示-->
        <dl class="HotelPicture">
          <dd v-for="datas in reuterImages"><img :src="pic.img" v-for="pic in datas" width="312" height="235" alt="">
            <p v-for="pic in datas">{{pic.HotelName}}</p>
            <div class="HotelPrice">￥<span v-for="pic in datas">{{pic.HotelValue}}</span>起
              <button>立即购买</button>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!--吃货天堂-->
    <div class="EattingHeaven">
      <div class="HotelContent">
        <ul>
          <li v-for="heaven in eattingHeavens">{{heaven.name}}</li>
        </ul>
        <!--酒店图片展示-->
        <dl class="HotelPicture">
          <dd v-for="datas in heavenImages"><img :src="pic.img" v-for="pic in datas" width="312" height="235" alt="">
            <p v-for="pic in datas">{{pic.HotelName}}</p>
            <div class="HotelPrice">￥<span v-for="pic in datas">{{pic.HotelValue}}</span>起
              <button>立即购买</button>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!--悠闲古城-->
    <div class="LeisureCity">
      <div class="HotelContent">
        <ul>
          <li v-for="city in leisureCitys">{{city.name}}</li>
        </ul>
        <!--酒店图片展示-->
        <dl class="HotelPicture">
          <dd v-for="datas in cityImages"><img :src="pic.img" v-for="pic in datas" width="312" height="235" alt="">
            <p v-for="pic in datas">{{pic.HotelName}}</p>
            <div class="HotelPrice">￥<span v-for="pic in datas">{{pic.HotelValue}}</span>起
              <button>立即购买</button>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <!--其他推荐-->
    <div class="OtherRecommend">
      <!--其他推荐的展示-->
      <div class="TextShow">
        <a href="#" v-for="text in texts">{{text.show}}</a>
      </div>
    </div>
    <!--快捷导航-->
    <div class="QuickNav">
      <!--<img src="../../assets/img/SidebarAnchor.png" alt="">-->
      <ul>
        <li v-for="nav in navs">{{nav.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //热销古镇
        ancientTowns: [
          {name: '乌镇'}, {name: '西塘'}, {name: '丽江'}, {name: '大理'}, {name: '宏村'}
        ],
        townImages: [
          [{img: require('../../assets/img/HotelHouse1.jpg'), HotelName: '乌镇海角77号民宿', HotelValue: 76}],
          [{img: require('../../assets/img/HotelHouse2.jpg'), HotelName: '乌镇我行我宿主题酒店', HotelValue: 128}],
          [{img: require('../../assets/img/HotelHouse3.jpg'), HotelName: '乌镇梵璞主题文化酒店', HotelValue: 337}]
        ],
        //江南水乡
        devinReuters: [
          {name: '周庄'}, {name: '朱家角'}, {name: '同里'}, {name: '南浔'}, {name: '凤凰'}
        ],
        reuterImages: [
          [{img: require('../../assets/img/HotelHouse4.jpg'), HotelName: '周庄古韵风客栈', HotelValue: 156}],
          [{img: require('../../assets/img/HotelHouse5.jpg'), HotelName: '亲的客栈（周庄清风明月楼店）（原清风明月楼客栈）', HotelValue: 217}],
          [{img: require('../../assets/img/HotelHouse6.jpg'), HotelName: '周庄碧水云居精品客栈', HotelValue: 363}]
        ],
        //吃货天堂
        eattingHeavens: [
          {name: '香格里拉'}, {name: '安昌'}, {name: '平遥'}, {name: '泸沽湖'}, {name: '黄姚'}
        ],
        heavenImages: [
          [{img: require('../../assets/img/HotelHouse7.jpg'), HotelName: '德钦小愉驿栈', HotelValue: 168}],
          [{img: require('../../assets/img/HotelHouse8.jpg'), HotelName: '香格里拉古城远方的家客栈', HotelValue: 150}],
          [{img: require('../../assets/img/HotelHouse9.jpg'), HotelName: '香格里拉517驿站', HotelValue: 163}]
        ],
        //悠闲古城
        leisureCitys: [
          {name: '阳朔'}, {name: '婺源'}, {name: '束河'}, {name: '上里'}, {name: '高淳'}
        ],
        cityImages: [
          [{img: require('../../assets/img/HotelHouse10.jpg'), HotelName: '阳朔东院弥香客栈', HotelValue: 115}],
          [{img: require('../../assets/img/HotelHouse11.jpg'), HotelName: '阳朔白蓝蒂地中海主题酒店', HotelValue: 128}],
          [{img: require('../../assets/img/HotelHouse12.jpg'), HotelName: '真美度假连锁酒店（阳朔西街瑷源店）（原瑷源客栈）', HotelValue: 178}]
        ],
        //其他推荐->酒店地址
        texts: [
          {show: '乌镇'}, {show: '西塘'}, {show: '绍兴'}, {show: '南浔'}, {show: '木渎'}, {show: '周庄'}, {show: '锦溪'}, {show: '同里'}, {show: '徽州古城'}, {show: '宏村'}, {show: '永定'}, {show: '婺源'}, {show: '丽江'}, {show: '大理'}, {show: '束河'}, {show: '香格里拉'}, {show: '和顺'}, {show: '阳朔'}, {show: '黄姚'}, {show: '凤凰'}, {show: '康定'}, {show: '阆中'}, {show: '雅安'}
        ],
        //快捷导航
        navs: [
          {name: '热销古镇'}, {name: '江南水乡'}, {name: '吃货天堂'}, {name: '悠闲古城'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  //古镇游顶部面板，酒店券领取
  .header {
    background: url('../../assets/img/header.jpg') no-repeat -120px 0;
    height: 604px;
    .HotelVoucher {
      background-color: rgba(0, 0, 0, .6);
      width: 860px;
      height: 150px;
      margin: 0px auto;
      position: relative;
      top: 70%;
      .VoucherNumber {
        height: 40px;
        width: 710px;
        margin: 0px auto;
        position: relative;
        top: 60%;
        input {
          font-size: 18px;
          width: 580px;
          height: 40px;
          padding-left: 20px;
          color: rgba(0, 0, 0, .65);
        }
        button {
          width: 110px;
          font-size: 20px;
          font-weight: bold;
          font-family: 华文楷体;
          background-color: #e58754;
          color: #fff;
          height: 40px;
          outline: none;
          border: none;
        }
      }
    }
  }

  //旅游酒店地址
  #AncientTownHotel {
    //热销古镇
    .HotSaleTown {
      background: url("../../assets/img/HotSaleTown.jpg") no-repeat -120px 0;
      height: 681px;
      //热销酒店中的house
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            width: 180px;
            height: 40px;
            float: left;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 32px;
            font-weight: bold;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 450px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //江南水乡
    .DevinReuter {
      background: url("../../assets/img/DevinReuter.jpg") no-repeat -120px 0;
      height: 685px;
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            float: left;
            width: 180px;
            height: 40px;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 32px;
            font-weight: bold;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 450px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //吃货天堂
    .EattingHeaven {
      background: url("../../assets/img/EattingHeaven.jpg") no-repeat -120px 0;
      height: 685px;
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            float: left;
            width: 180px;
            height: 40px;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 32px;
            font-weight: bold;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 450px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //悠闲古城
    .LeisureCity {
      background: url("../../assets/img/LeisureCity.jpg") no-repeat -120px 0;
      height: 685px;
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            float: left;
            width: 180px;
            height: 40px;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 32px;
            font-weight: bold;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 470px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //其他推荐
    .OtherRecommend {
      background: url("../../assets/img/OtherRecommend.jpg") no-repeat -120px 0;
      height: 500px;
      .TextShow {
        width: 1000px;
        height: 260px;
        position: relative;
        top: 42%;
        margin: 0px auto;
        a {
          color: #444;
          display: inline-block;
          width: 166px;
          height: 30px;
          line-height: 30px;
          margin-top: 10px;
          text-align: center;
          font-family: "Microsoft YaHei";
          font-size: 24px;
          text-decoration: none;
        }
      }
    }
    .QuickNav {
      width: 100px;
      height: 230px;
      position: fixed;
      right: 200px;
      top: 330px;
      ul {
        position: fixed;
        top: 374px;
        right: 194px;
        li {
          font-family: "Microsoft YaHei";
          font-size: 20px;
          width: 106px;
          margin-top: 7px;
          height: 30px;
          color: #fff;
          border-bottom: 1px solid;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
</style>
