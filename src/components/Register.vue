<template>
  <div id="bgBox">
    <div id="registerBox">
      <div class="hearder">
        <div class="huLeYouLogo">
          <a href="javascript:;" style="position: relative;">
            <router-link to="/HeelTour" style="position: absolute;width: 100%;height:100%"></router-link>
            <img src="../assets/img/huileyouLogo.jpg" width="286" height="75">
          </a>
          <strong>欢迎注册</strong>
        </div>
      </div>
      <div class="registerDetails">
        <h2 class="titel">手机注册</h2>
        <div class="registerDetailsContent">
          <el-steps :active="active" finish-status="success">
            <el-step title="设置密码"></el-step>
            <el-step title="注册成功"></el-step>
          </el-steps>
          <div class="registerInputBox" v-show="registerInputBoxShow">
            <div class="telephoneNumber">
              <span>电话号码:</span>
              <input type="text" v-model="addOptions.phone">
            </div>
            <div class="password">
              <span>密码:</span>
              <input type="password" v-model="addOptions.password">
            </div>
            <div class="repeatPassword">
              <span>确认密码:</span>
              <input type="password" v-model="addOptions.repeatPassword">
            </div>
            <div class="verificationCode">
              <span>验证码:</span>
              <input type="text" v-model="addOptions.validateNo">
              <a href="javascript:;" @click="getNumbers">{{getName}}</a>
            </div>
          </div>
          <div class="successContent" v-show="successShow">
            <i class="el-icon-success"></i>
            <span>注册成功！</span>
            <router-link to="adminLogin">前往登录</router-link>
          </div>
          <el-button style="margin-top: 12px;" @click="next" v-show="nextShow">下一步</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Register from '../assets/css/Register.css'
  import {postPromise} from '../assets/public'

  export default {
    name: '',
    computed: mapGetters([]),
    data() {
      return {
        active: 1,
        registerInputBoxShow: true,
        successShow: false,
        nextShow: true,
        getName: '获取动态验证码',
        addOptions: {
          phone: '',
          password: '',
          repeatPassword: '',
          validateNo: ''
        }
      }
    },
    methods: {
      next() {
        if (this.active == 1) {
          this.registerInputBoxShow = true;
          this.successShow = false;
          this.nextShow = true;
          this.UserRegisterBoxSubmit();
        } else if (this.active == 2) {
          this.registerInputBoxShow = false;
          this.successShow = true;
          this.nextShow = false;
        }
      },
      initData() {

      },
      search() {
        this.initData()
      },
      //获取动态验证码
      getNumbers() {
        if (this.addOptions.phone == '') {
          this.$notify({
            message: '请输入电话号码！！',
            type: 'error'
          });
          return;
        }
        postPromise('http://114.55.248.116:1001/Service.asmx/SendMessage', {
          paramJson: JSON.stringify({
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "phone": this.addOptions.phone,
          })
        })
          .then(data => {
            var data = JSON.parse(data)
            if (Number(data.backCode) == 200) {
              let _this = this;
              let num = 59;
              let timer = setInterval(() => {
                _this.getName = num + 's后重新获取'
                num--;
                if (num == 0) {
                  this.isDisabled = false;
                  clearInterval(timer)
                  _this.getName = '重新获取验证码'
                }
              }, 1000)
            }
          })
      },

      //注册提交
      UserRegisterBoxSubmit() {
        if (this.phon == '') {
          this.$notify({
            message: '请输入电话号码',
            type: 'error'
          });
          return;
        }
        if (this.password != this.repeatPassword) {
          this.$notify({
            message: '两次输入的密码不一致',
            type: 'error'
          });
          return;
        }
        if (this.password == '') {
          this.$notify({
            message: '请输入密码',
            type: 'error'
          });
          return;
        }
        if (this.validateNo == '') {
          this.$notify({
            message: '请输入验证码',
            type: 'error'
          });
          return;
        }
        postPromise('http://114.55.248.116:1001/Service.asmx/RegByCode', {
          paramJson: JSON.stringify({
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "phone": this.addOptions.phone,
            "password": this.addOptions.password,
            "validateNo": this.addOptions.validateNo
          })
        })
          .then(data => {
            var data = JSON.parse(data);
            if (Number(data.backCode) == 200) {
              this.$notify({
                message: '注册成功!',
                type: 'success'
              });
              this.active = 2;
              this.registerInputBoxShow = false;
              this.successShow = true;
              this.nextShow = false;

            }
          })
      },
    },
  }
</script>
<style scoped>

  .el-step__main {
    margin-left: -20px;
  }
</style>
