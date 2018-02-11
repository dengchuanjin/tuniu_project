<template>
    <div>
      <div class="personalDataDetailsWrap">
        <ul class="personalDataDetailsWrapNavList clearfix">
          <li><a href="javascript:;" class="active">基本信息</a></li>
        </ul>
        <el-form ref="form" label-width="80px">
          <el-form-item label="昵称:" label-width="100px">
            <el-input
              style="width: 220px"
              placeholder="请输入昵称"
              v-model="userInfo.ui_Name"
              clearable
              :disabled="isDisabled"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="身份证:" label-width="100px" :required="isOff">
            <el-input
              style="width: 220px"
              placeholder="请输入身份证"
              v-model="userInfo.ui_CertNo"
              :disabled="isDisabled"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="电话号码:" label-width="100px" :required="isOff">
            <el-input
              style="width: 220px"
              placeholder="请输入电话号码"
              v-model="userInfo.ui_Phone"
              :disabled="isDisabled"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item v-show="!isDisabled">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button @click="clear">清空</el-button>
          </el-form-item>
          <el-form-item v-show="isDisabled">
            <el-button  type="primary" @click="Editor">编辑</el-button>
          </el-form-item>
        </el-form>
          <!--<el-form-item label="姓名:" label-width="80px">-->
            <!--<el-input-->
              <!--style="width: 220px"-->
              <!--placeholder="请输入内容"-->
              <!--v-model="input10"-->
              <!--clearable>-->
            <!--</el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="手机号:" label-width="80px">-->
            <!--<el-input-->
              <!--style="width: 220px"-->
              <!--placeholder="请输入内容"-->
              <!--v-model="input10"-->
              <!--clearable>-->
            <!--</el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="生日:" label-width="80px">-->
            <!--<el-date-picker-->
              <!--v-model="input10"-->
              <!--type="year"-->
              <!--placeholder="选择年">-->
            <!--</el-date-picker>-->
            <!--<el-date-picker-->
              <!--v-model="input10"-->
              <!--type="month"-->
              <!--placeholder="选择月">-->
            <!--</el-date-picker>-->
            <!--<el-date-picker-->
              <!--v-model="input10"-->
              <!--type="date"-->
              <!--placeholder="选择日">-->
            <!--</el-date-picker>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="性别:" label-width="80px">-->
            <!--<el-radio-group v-model="sex">-->
              <!--<el-radio :label="0">男</el-radio>-->
              <!--<el-radio :label="1">女</el-radio>-->
            <!--</el-radio-group>-->
          <!--</el-form-item>-->

          <!--<el-form-item label="邮箱:" label-width="80px">-->
            <!--<el-input-->
              <!--style="width: 220px"-->
              <!--placeholder="请输入内容"-->
              <!--v-model="input10"-->
              <!--clearable>-->
            <!--</el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="婚姻:" label-width="80px">-->
            <!--<el-select v-model="value" placeholder="请选择婚姻状态">-->
              <!--<el-option key="0" label="已婚" value="0"></el-option>-->
              <!--<el-option key="1" label="未婚" value="1"></el-option>-->
            <!--</el-select>-->
          <!--</el-form-item>-->
          <!--&lt;!&ndash;<el-form-item label="职业:" label-width="80px">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-select v-model="value" placeholder="请选择职业">&ndash;&gt;-->
              <!--&lt;!&ndash;<el-option key="0" label="白领/一般职员" value="0"></el-option>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-option key="1" label="公务员/事业单位" value="1"></el-option>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-option key="2" label="工业/服务业人员" value="1"></el-option>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-option key="1" label="公务员/事业单位" value="1"></el-option>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-option key="1" label="公务员/事业单位" value="1"></el-option>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
          <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
          <!--<el-form-item label="常住地:" label-width="80px">-->
            <!--<el-input-->
              <!--style="width: 220px"-->
              <!--placeholder="请输入内容"-->
              <!--v-model="input10"-->
              <!--clearable>-->
            <!--</el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="详细地址:" label-width="80px">-->
            <!--<el-input-->
              <!--style="width: 220px"-->
              <!--placeholder="请输入内容"-->
              <!--v-model="input10"-->
              <!--clearable>-->
            <!--</el-input>-->
          <!--</el-form-item>-->
      </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        isDisabled:true,
        value:'',
        sex:0,
        userInfo:{},
        NoID:'',
        width:'120px',
        input10:'',
        isOff:true
      }
    },
    computed: mapGetters([]),
    created(){
      let user = JSON.parse(sessionStorage.getItem('user'));
      if(user){
        this.userInfo = user;
      }else{
        this.$router.push({name:'AdminLogin'})
      }
    },
    methods: {
      initData() {
      },
      //清空
      clear(){
        this.userInfo.ui_Name = '';
        this.NoID = ''
      },
      save(){
        if(this.NoID == ''){
          this.$notify({
            message: '请输入身份证号!',
            type: 'error'
          });
          return;
        }
        let saveOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          userInfo:{
            "ui_Name":this.userInfo.ui_Name,
            "ui_ID": this.userInfo.ui_ID,
            "ui_CertNo":this.userInfo.ui_CertNo
          }
        };
        this.isLoading = true;
        this.$store.dispatch('saveUserInfo',saveOptions)
        .then(suc=>{
          this.$notify({
            message: suc,
            type: 'success'
          });
          this.isLoading = false;
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
          this.isLoading = false;
        })
      },
      //编辑
      Editor(){
        this.isDisabled = false
      },
      search() {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "userID": this.userInfo.ui_UserCode,
          "userCode": this.userInfo.ui_UserCode,
          "userName": this.userInfo.ui_Name,
          "certNo": this.NoID,
          "phone": "",
          "remark": "",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
        };
//        this.$store.dispatch('updateUserInfo',options)
      }
    },
  }
</script>

<style scoped>
i {
  color: #f60;
}

  .personalDataDetailsWrapNavList {
    font: bold 20px/55px "微软雅黑";
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

  .personalDataDetailsWrapNavList > li  {
    float: left;
    margin-bottom:-1px;
  }

  .personalDataDetailsWrapNavList > li > a {
    padding: 0 30px;
    display: block;
    border-right: 1px solid #dddddd;
  }
  .personalDataDetailsWrapNavList > li > .active {
    border-top: 4px solid #22c233;
    margin-top:-4px;
    background-color: #fff;
    color: #22c233;
  }
  .personalDataDetailsWrapContentList {
    font: 16px/3 "微软雅黑";
  }
  .personalDataDetailsWrapContentList>li>strong {
    display: inline-block;
    width:120px;
    text-align: right;
    color: #666;
  }
  .personalDataDetailsWrapContentList>li>input {
    width:200px;
    height:30px;
    padding:5px;
    border: 1px solid #ccc;
    margin-left:20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
