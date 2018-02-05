<template>
  <div>
    <div id="MerchantRegisterWrap">
      <!--注册头部-->
      <div class="MerchantRegisterWrapHeader clearfix">
        <div class="MerchantRegisterWrapHeaderLogoBox">
          <img src="../assets/img/huileyouLogo.jpg" width="300" height="70">
        </div>
        <div class="MerchantRegisterWrapHeaderHomePage">
          <router-link to="HueiLeYouTourHomePage">返回首页</router-link>
        </div>
      </div>
      <!--注册导航-->
      <div class="MerchantRegisterNavWrap">
        <div class="MerchantRegisterNav">
          <div class="MerchantRegisterNavContent clearfix">
            <a href="javascript:;">注册信息</a>
          </div>
        </div>
      </div>
      <!--注册表单-->
      <div class="MerchantRegisterTabel">
        <!--公司信息-->
        <div class="ContactsContent">
          <h5>联系人信息</h5>
          <div class="ContactsBox clearfix">
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="姓名:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="性别:" :required="isOff">
                  <el-radio-group v-model="sexType">
                    <el-radio :label="0">男</el-radio>
                    <el-radio :label="1">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="手机:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="固定电话:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="QQ:">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="电子邮箱:" :required="isOff">
                  <el-input type="text" size="mini" placeholder="非常重要！"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="传真:">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="品牌名:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="供应商编码:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="结算币种编号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="公司规模编码:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="合作类型编码:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="经营范围编码:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="固定电话国际区号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="固定电话区号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="传真区号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="传真国际区号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="传真号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="国家:" :required="isOff">
                  <el-select v-model="countryValue" placeholder="请选择国家" size="mini">
                    <el-option
                      v-for="item in countryData"
                      :key="item.value"
                      :label="item.Country"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="省:" :required="isOff">
                  <el-select v-model="provinceValue" placeholder="请选择省" size="mini" @focus="changeProvince">
                    <el-option
                      v-for="item in provinceDataList"
                      :key="item.sm_af_AreaID"
                      :label="item.sm_af_AreaName"
                      :value="item.sm_af_AreaID">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="市:" :required="isOff">
                  <el-select v-model="cityValue" placeholder="请选择市" size="mini" @focus="changeCity">
                    <el-option
                      v-for="item in cityDataList"
                      :key="item.sm_af_AreaID"
                      :label="item.sm_af_AreaName"
                      :value="item.sm_af_AreaID">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="县:" :required="isOff">
                  <el-select v-model="countyValue" placeholder="请选择县" size="mini" @focus="changeCounty">
                    <el-option
                      v-for="item in countyDataList"
                      :key="item.sm_af_AreaID"
                      :label="item.sm_af_AreaName"
                      :value="item.sm_af_AreaID">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="具体地址:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="注册成立时间:" :required="isOff">
                  <div class="block">
                    <el-date-picker
                      v-model="creatRegisterTimeValue"
                      type="date"
                      placeholder="选择日期"
                      size="mini"
                    >
                    </el-date-picker>
                  </div>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="注册资金:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="优势产品说明:">
                  <el-input type="textarea" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="已合作的网销渠道:">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="是否三证合一:" :required="isOff">
                  <el-radio-group v-model="yesOrOn">
                    <el-radio :label="0">否</el-radio>
                    <el-radio :label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="营业执照号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="营业执照有效期从:" :required="isOff">
                  <div class="block">
                    <el-date-picker
                      v-model="CreatScopeOfOperationTime"
                      type="date"
                      placeholder="选择日期"
                      size="mini">
                    </el-date-picker>
                  </div>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="营业执照有效期到:" :required="isOff">
                  <div class="block">
                    <el-date-picker
                      v-model="EndScopeOfOperationTime"
                      type="date"
                      placeholder="选择日期"
                      size="mini">
                    </el-date-picker>
                  </div>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="营业执照扫描件:" :required="isOff">
                  <a href="javascript:;" class="file">展示图片上传
                    <input type="file" name="" ref="upload" accept="image/*" multiple>
                  </a>
                  <img
                    style="display: block"
                    v-for="item in ImageURL1"
                    v-lazy="item"
                    width="280"
                    height="125"
                    v-show="ImageURL1.length"
                  >
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="税务登记证号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="税务登记证扫描件:" :required="isOff">
                  <a href="javascript:;" class="file">展示图片上传
                    <input type="file" name="" ref="upload1" accept="image/*" multiple>
                  </a>
                  <img
                    style="display: block"
                    v-for="item in ImageURL2"
                    v-lazy="item"
                    width="280"
                    height="125"
                    v-show="ImageURL2.length"
                  >
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="是否通过审核:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="创建时间:" :required="isOff">
                  <div class="block">
                    <el-date-picker
                      v-model="creatTimeValue"
                      type="date"
                      placeholder="选择日期"
                      size="mini">
                    </el-date-picker>
                  </div>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="其他证件:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="其他证件扫描件:" :required="isOff">
                  <a href="javascript:;" class="file">展示图片上传
                    <input type="file" name="" ref="upload2" accept="image/*" multiple>
                  </a>
                  <img
                    style="display: block"
                    v-for="item in ImageURL3"
                    v-lazy="item"
                    width="280"
                    height="125"
                    v-show="ImageURL3.length"
                  >
                </el-form-item>
              </el-form>
            </el-col>
          </div>
        </div>
        <!--结算币种-->
        <div class="ContactsSettlementCurrencyContent">
          <h5>结算币种</h5>
          <div class="ContactsSettlementCurrencyContentBox clearfix">
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="结算币种编号:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="结算币种名称:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="是否有效:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
          </div>
        </div>
        <!--公司规模-->
        <div class="ContactsCompanySizeWrap">
          <h5>公司规模</h5>
          <div class="ContactsCompanySizeWrapBox clearfix">
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="公司规模编码:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="人数:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="是否有效:" :required="isOff">
                  <el-select v-model="ContactsCompanySizeWrapBoxValue" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in ContactsCompanySizeWrapBoxData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
          </div>
        </div>
        <!--合作类型-->
        <div class="ContactsTypeOfCooperation">
          <h5>合作类型</h5>
          <div class="ContactsTypeOfCooperationBox clearfix">
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="合作类型编码:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="合作类型名称:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="是否有效:" :required="isOff">
                  <el-select v-model="ContactsTypeOfCooperationBoxValue" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in ContactsTypeOfCooperationBoxData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
          </div>
        </div>
        <!--经营范围-->
        <div class="ContactsScopeOfOperationWrap">
          <h5>经营范围</h5>
          <div class="ContactsScopeOfOperationWrapBox clearfix">
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="经营范围编码:" :required="isOff">
                  <el-input type="text" size="mini"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="是否有效:" :required="isOff">
                  <el-select v-model="ContactsScopeOfOperationWrapBoxValue" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in ContactsScopeOfOperationWrapBoxData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" id="ScopeOfOperationType" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="经营范围名称:" :required="isOff">
                  <el-checkbox-group v-model="ScopeOfOperationType" @change="changeBox">
                    <el-checkbox label="出境"></el-checkbox>
                    <el-checkbox label="入境"></el-checkbox>
                    <el-checkbox label="境内"></el-checkbox>
                    <el-checkbox label="票务代理"></el-checkbox>
                    <el-checkbox label="住宿"></el-checkbox>
                    <el-checkbox label="赴台游"></el-checkbox>
                    <el-checkbox label="边境"></el-checkbox>
                    <el-checkbox label="汽车租赁"></el-checkbox>
                    <el-checkbox label="邮轮"></el-checkbox>
                    <el-checkbox label="运输服务"></el-checkbox>
                    <el-checkbox label="其他"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-form>
            </el-col>
          </div>
        </div>
      </div>
      <!--信息提交-->
      <div class="ContactsSubmitWrap">
        <a href="javascript:;" @click="InformtionSubmit">提交信息</a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import MerchantRegister from '../assets/css/MerchantRegister.css'

  export default {
    name: '',
    computed: mapGetters([
      'provinceDataList',
      'cityDataList',
      'countyDataList'
    ]),
    data() {
      return {
        isOff: true,
        sexType: 0,
        yesOrOn: 0,
        creatTimeValue: '',
        ScopeOfOperationType: [],
        ContactsScopeOfOperationWrapBoxValue: '',
        ContactsTypeOfCooperationBoxValue: '',
        ContactsCompanySizeWrapBoxValue: '',
        ContactsScopeOfOperationWrapBoxData: [
          {
            value: 0,
            label: '无效'
          },
          {
            value: 1,
            label: '有效'
          }
        ],
        ContactsTypeOfCooperationBoxData: [
          {
            value: 0,
            label: '无效'
          },
          {
            value: 1,
            label: '有效'
          }
        ],
        ContactsCompanySizeWrapBoxData: [
          {
            value: 0,
            label: '无效'
          },
          {
            value: 1,
            label: '有效'
          }
        ],
        CreatScopeOfOperationTime: '',
        EndScopeOfOperationTime: '',
        creatRegisterTimeValue: '',
        countryValue: '',
        provinceValue: '',
        cityValue: '',
        ImageURL1: [],
        ImageURL2: [],
        ImageURL3: [],
        countyValue: '',
        addOptions: {
          MerchantName: '',//姓名
          sexType: 0,//性别
        },
        countryData: [
          {
            Country: '中国',
            value: 0
          }
        ],
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
                        this.ImageURL1.push(data.data);
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
          if (this.$refs.upload1) {
            this.$refs.upload1.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload1.files.length; i++) {
                this.uploadImg(this.$refs.upload1.files[i]).then(data => {
                  this.$store.dispatch('uploadAdminImgs', {
                    imageData: data
                  })
                    .then(data => {
                      if (data) {
                        this.ImageURL2.push(data.data);
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
          if (this.$refs.upload2) {
            this.$refs.upload2.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload2.files.length; i++) {
                this.uploadImg(this.$refs.upload2.files[i]).then(data => {
                  this.$store.dispatch('uploadAdminImgs', {
                    imageData: data
                  })
                    .then(data => {
                      if (data) {
                        this.ImageURL3.push(data.data);
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
      //选择经营范围
      changeBox() {
        console.log(this.ScopeOfOperationType)
      },
      //选择省
      changeProvince() {
        let getAreaProvice = {
          "areaPid": 0
        }
        this.$store.dispatch('initProvinceData', getAreaProvice)
      },
      //选择市
      changeCity() {
        if( !this.provinceValue ){
          this.$notify({
            message: '请先选择省!!',
            type:'error'
          });
          return
        }
        let getCity = {
          "areaPid": this.provinceValue ? this.provinceValue : ''
        }
        this.$store.dispatch('initCityData', getCity)
      },
      //选择县
      changeCounty() {
        if( !this.provinceValue && !this.cityValue ){
          this.$notify({
            message: '请先选择省和市!!',
            type:'error'
          });
          return
        }
        let getCounty = {
          "areaPid": this.cityValue ? this.cityValue : ''
        }
        this.$store.dispatch('initCountyData', getCounty)
      },
      //查询结算币种
      changeMoneyType(){
        var selectBalanceCurrency = {

        }
      },
      //信息提交
      InformtionSubmit() {
      }
    },
    mounted() {
      this.uploaNode()
    }
  }
</script>
<style scoped>
  .file {
    position: relative;
    display: inline-block;
    background: #409EFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
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

</style>
