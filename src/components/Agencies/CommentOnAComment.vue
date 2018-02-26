<template>
  <div class="commentWrap">
    <div class="commentHeaderWrap">
      <div class="commentHeader">
        <img src="../../assets/img/center.png" width="60" height="60">
        <strong>添加评论</strong>
        <router-link to="AgenciesHome"></router-link>
      </div>
    </div>
    <div class="commentBox">
      <!--头像昵称-->
      <div class="HeadPortrait clearfix">
        <img src="../../assets/img/center.png" width="60" height="60">
        <strong>惠乐游</strong>
      </div>
      <!--评论内容-->
      <div class="commentContent">
        <textarea id="commentContent"></textarea>
      </div>
      <!--上传图片-->
      <div class="uploadPicture">
        <a href="javascript:;" class="file">上传文件
          <input type="file" name="" ref="upload" accept="image/*" multiple>
        </a>
        <div class="uploadPictureBox clearfix">
          <img
            style="display: block"
            v-for="item in ImageURL"
            v-lazy="item"
            width="100"
            height="100"
            v-show="ImageURL.length"
          >
        </div>
      </div>
      <!--评分-->
      <ul class="scoreList">
        <li>
          <span>导游服务:</span>
          <el-rate
            v-model="TourGuideService"
            show-text>
          </el-rate>
        </li>
        <li>
          <span>行程安排:</span>
          <el-rate
            v-model="Scheduling"
            show-text>
          </el-rate>
        </li>
        <li>
          <span>餐饮住宿:</span>
          <el-rate
            v-model="CateringAccommodation"
            show-text>
          </el-rate>
        </li>
        <li>
          <span>旅行交通:</span>
          <el-rate
            v-model="TravelTraffic"
            show-text>
          </el-rate>
        </li>
        <li>
          <span>总体评价:</span>
          <el-rate
            v-model="AllFraction"
            show-text>
          </el-rate>
        </li>
      </ul>
      <!--提交-->
      <div class="submitComment clearfix">
        <el-button type="primary" round>提交</el-button>
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
        TourGuideService: null,
        Scheduling: null,
        CateringAccommodation: null,
        TravelTraffic: null,
        AllFraction: null,
        ImageURL: [],
      }
    },
    methods: {
      //图片转二进制
      uploadImg(file) {
        return new Promise(function (relove, reject) {
          lrz(file)
            .then(data => {
              relove(data.base64.split(',')[1])
            })
        })
        console.log(this.ImageURL)
      },
      //添加图片
      uploaNode() {
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadImg(this.$refs.upload.files[i]).then(data => {
                  this.$store.dispatch('uploadAdminImgs', {
                    imageData: data
                  })
                    .then(data => {
                      if (data) {
                        this.ImageURL.push(data.data);
                      } else {
                        this.$notify({
                          message: '图片地址不存在!',
                          type: 'error'
                        });
                      }
                    })
                })
              }
            })
          }
        }, 30)
      },
    },
    mounted() {
      this.uploaNode()
    }
  }
</script>
<style scoped>
  .el-rate {
    display: inline-block;
    margin-left: 10px;
  }

  .file {
    position: relative;
    display: inline-block;
    background: green;
    /*border: 1px solid #99D3F5;*/
    border-radius: 4px;
    padding: 4px 20px;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    text-indent: 0;
    font-size: 12px;
    line-height: 20px;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  .commentHeaderWrap {
    width: 100%;
    background-color: #00cd4c;
  }

  .commentHeader {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
  }

  .commentHeader strong {
    font: bold 30px/1.3 "宋体";
    color: #fff;
    vertical-align: bottom;
    padding-left: 10px;
  }

  .commentHeader a {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
  }

  .commentWrap {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .commentBox {
    padding: 0 100px 100px;
    width: 800px;
    background-color: #f6f6f6;
    margin: 0 auto;
    box-sizing: content-box;
  }

  .HeadPortrait {
    padding: 10px 0;
  }

  .HeadPortrait img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    float: left;
  }

  .HeadPortrait strong {
    float: left;
    font: bold 16px/2 "微软雅黑";
    padding-top: 25px;
    margin-left: 10px;
    color: #e90;
  }

  #commentContent {
    width: 800px;
    height: 300px;
    resize: none;
    padding: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font: 14px/2 Arial;
    background-color: #f0f0f0;
  }

  .scoreList > li > span {
    font: 14px/4 "微软雅黑";
    color: #f80;
  }

  .submitComment > button {
    float: right;
  }

  .uploadPicture {
    border: 2px solid #f60;
    padding: 10px 0;
    margin-top: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: #f6f6f6;
  }

  .uploadPictureBox > img {
    float: left;
    margin: 5px;
  }

</style>
