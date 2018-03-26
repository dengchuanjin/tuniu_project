<template>
  <div>
    <!--青旅酒店头部面板-->
    <div class="header"></div>
    <!--内容部分-->
    <div class="content">
      <!--南京-->
      <div class="nanjing">
        <div class="HotelHouse">
          <div class="house" v-for="house in Houses">
            <img :src="image.houseimg" v-for="image in house">
            <p class="houseName" v-for="name in house">{{name.housename}}</p>
            <div class="houseValue" v-for="value in house">￥<span>{{value.housevalue}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--苏州-->
      <div class="suzhou">
        <div class="HotelHouse">
          <div class="house" v-for="house in Houses">
            <img :src="image.houseimg" v-for="image in house">
            <p class="houseName" v-for="name in house">{{name.housename}}</p>
            <div class="houseValue" v-for="value in house">￥<span>{{value.housevalue}}</span>起<button>立即购买</button></div>
          </div>
        </div>
        </div>
      <!--厦门-->
      <div class="xiamen">
        <div class="HotelHouse">
          <div class="house" v-for="house in Houses">
            <img :src="image.houseimg" v-for="image in house">
            <p class="houseName" v-for="name in house">{{name.housename}}</p>
            <div class="houseValue" v-for="value in house">￥<span>{{value.housevalue}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--北京-->
      <div class="beijing">
        <div class="HotelHouse">
          <div class="house" v-for="house in Houses">
            <img :src="image.houseimg" v-for="image in house">
            <p class="houseName" v-for="name in house">{{name.housename}}</p>
            <div class="houseValue" v-for="value in house">￥<span>{{value.housevalue}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--成都-->
      <div class="chengdu">
        <div class="HotelHouse">
          <div class="house" v-for="house in Houses">
            <img :src="image.houseimg" v-for="image in house">
            <p class="houseName" v-for="name in house">{{name.housename}}</p>
            <div class="houseValue" v-for="value in house">￥<span>{{value.housevalue}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--更多-->
      <div class="more">
        <div class="moreHotel">
          <div v-for="image in moreImg" class="imgBox"><img :src="image.srcs"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          Houses:[
            [{housename:'国际青年旅舍（南京朝天宫店）',housevalue:50,houseimg:require('../../assets/img/house.jpg')}],
            [{housename:'国际青年旅舍（南京朝天宫店）',housevalue:50,houseimg:require('../../assets/img/house.jpg')}],
            [{housename:'国际青年旅舍（南京朝天宫店）',housevalue:50,houseimg:require('../../assets/img/house.jpg')}],
            [{housename:'国际青年旅舍（南京朝天宫店）',housevalue:50,houseimg:require('../../assets/img/house.jpg')}],
            [{housename:'国际青年旅舍（南京朝天宫店）',housevalue:50,houseimg:require('../../assets/img/house.jpg')}],
            [{housename:'国际青年旅舍（南京朝天宫店）',housevalue:50,houseimg:require('../../assets/img/house.jpg')}]
          ],
          moreImg:[
            {srcs:require('../../assets/img/house.jpg')},
            {srcs:require('../../assets/img/house.jpg')},
            {srcs:require('../../assets/img/house.jpg')},
            {srcs:require('../../assets/img/house.jpg')}
            ]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .header{
    background: url("../../assets/img/qinglv.jpg") no-repeat center;
    height: 722px;
  }
  .content{
    //南京
    .nanjing{
      position: relative;
      background: url("../../assets/img/nanjing.jpg") no-repeat center;
      height: 820px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    //苏州
    .suzhou{
      position: relative;
      background: url("../../assets/img/suzhou.jpg") no-repeat center;
      height: 800px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    //厦门
    .xiamen{
      position: relative;
      background: url("../../assets/img/xiamen.jpg") no-repeat center;
      height: 820px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    //北京
    .beijing{
      position: relative;
      background: url("../../assets/img/beijing.jpg") no-repeat center;
      height: 820px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    //成都
    .chengdu{
      position: relative;
      background: url("../../assets/img/chengdu.jpg") no-repeat center;
      height: 830px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    //更多
    .more{
      position: relative;
      background: url("../../assets/img/more.jpg") no-repeat center;
      height: 673px;
      .moreHotel{
        width: 1020px;
        height: 180px;
        margin: 0 auto;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        .imgBox{
          width: 243px;
          height: 190px;
          float: left;
          margin: 5px;
          img{
            width:243px;
            height:190px;
            margin:0;
          }
        }
      }
    }
  }
</style>
