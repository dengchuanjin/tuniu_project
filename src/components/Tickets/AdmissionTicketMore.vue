<template>
  <div>
    <div class="AdmissionTicketMoreWrap clearfix">
      <!--LeftCity-->
      <div class="ScenicSpotList">
        <!--景点分类-->
        <div class="ScenicSpotType">
          <strong>景点分类</strong>
          <dl>
            <dt>按地区<a href="javascript:;">[四川]</a></dt>
            <dd v-for="item,index in cityList.scenicSpotTypeList"><a href="javascript:;">{{item}}</a></dd>
            <dt>按主题</dt>
            <dd v-for="item,index in cityList.themeTypeList"><a href="javascript:;">{{item}}</a></dd>
          </dl>
        </div>
        <!--景点大全-->
        <div class="AllScenicSpotType">
          <strong>景点大全</strong>
          <dl>
            <dt>华东</dt>
            <dd v-for="item,index in cityList.eastChinaList"><a href="javascript:;">{{item}}</a></dd>
            <dt>华北</dt>
            <dd v-for="item,index in cityList.northChinaList"><a href="javascript:;">{{item}}</a></dd>
            <dt>华中</dt>
            <dd v-for="item,index in cityList.centralChinaList"><a href="javascript:;">{{item}}</a></dd>
            <dt>华南</dt>
            <dd v-for="item,index in cityList.southChinaList"><a href="javascript:;">{{item}}</a></dd>
            <dt>东北</dt>
            <dd v-for="item,index in cityList.northeastList"><a href="javascript:;">{{item}}</a></dd>
            <dt>西南</dt>
            <dd v-for="item,index in cityList.southwestList"><a href="javascript:;">{{item}}</a></dd>
            <dt>西北</dt>
            <dd v-for="item,index in cityList.northwestList"><a href="javascript:;">{{item}}</a></dd>
            <dt>港澳</dt>
            <dd v-for="item,index in cityList.hongKongAndMacaoList"><a href="javascript:;">{{item}}</a></dd>
            <dt>境外</dt>
            <dd v-for="item,index in cityList.abroadList"><a href="javascript:;">{{item}}</a></dd>
          </dl>
        </div>
      </div>
      <!--RightRecommend-->
      <div class="RecommendScenicSpot">
        <div class="propList">
          <div class="aboutScenicSpot clearfix" v-for="item,index in aboutScenicSpot">
            <strong>{{item.title}}</strong>
            <ul class="propListScenicSpotList">
              <li v-for="ite,index in item.aboutScenicSpotData"><a href="javascript:;">{{ite}}</a></li>
            </ul>
          </div>
        </div>
        <div class="screenAdmissionTicketType clearfix">
          <div class="salesVolume"><a href="javascript:;" title="按销量排序">销量</a></div>
          <div class="comment"><a href="javascript:;" title="按点评数排序">点评</a></div>
          <div class="satisfied"><a href="javascript:;" title="按满意度排序">满意</a></div>
          <div class="price"><a href="javascript:;" title="按价格排序">价格</a></div>
        </div>
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
        cityList: {
          scenicSpotTypeList: [
            '成都(35)',
            '绵阳(13)',
            '乐山(9)',
            '广元(8)',
            '阿坝(6)',
            '宜宾(6)',
            '广安(4)',
            '南充(4)',
            '凉山(4)',
            '雅安(4)'
          ],//按地区
          themeTypeList: [
            '名胜风光',
            '古镇园林',
            '水上乐园',
            '家庭亲子',
            '境外精选',
            '赏花田园',
            '主题乐园',
            '演出表演',
            '城市生活',
            '拜佛祈福',
            '节假日旅游胜地'
          ],//按主题
          eastChinaList: [
            '上海',
            '江苏',
            '浙江',
            '安徽',
            '福建',
            '山东'
          ],//华东
          northChinaList: [
            '北京',
            '天津',
            '河北',
            '山西',
            '内蒙古'
          ],//华北
          centralChinaList: [
            '湖北',
            '湖南',
            '江西',
            '河南'
          ],//华中
          southChinaList: [
            '广东',
            '广西',
            '海南'
          ],//华南
          northeastList: [
            '辽宁',
            '吉林',
            '黑龙江'
          ],//东北
          southwestList: [
            '重庆',
            '四川',
            '贵州',
            '云南',
            '西藏'
          ],//西南
          northwestList: [
            '陕西',
            '甘肃',
            '青海',
            '宁夏',
            '新疆'
          ],//西北
          hongKongAndMacaoList: [
            '香港',
            '澳门',
            '台湾'
          ],//港澳
          abroadList: [
            '亚洲',
            '欧洲',
            '北美洲',
            '大洋洲'
          ],//境外
        },
        aboutScenicSpot: [
          {
            title: '景点主题:',
            aboutScenicSpotData: [
              '全部',
              '名胜风光',
              '古镇园林',
              '水上乐园',
              '家庭亲子',
              '境外精选',
              '赏花田园',
              '主题乐园',
              '演出表演',
              '城市生活',
              '拜佛祈福',
              '节假日旅游胜地'
            ]
          },
          {
            title: '景点地区:',
            aboutScenicSpotData: [
              '全部',
              '江苏',
              '西藏',
              '海南',
              '上海',
              '大洋洲',
              '浙江',
              '北京',
              '吉林',
              '陕西',
              '黑龙江',
              '福建',
              '欧洲',
              '澳门',
              '香港',
              '台湾',
              '广东',
              '宁夏',
              '湖南',
              '新疆',
              '山东',
              '贵州',
              '云南',
              '安徽',
              '江西',
              '河北',
              '山西',
              '辽宁',
              '重庆',
              '河南',
              '四川',
              '甘肃',
              '内蒙古',
              '北美洲',
              '湖北',
              '天津',
              '广西',
              '青海',
              '亚洲'
            ]
          },
          {
            title: '所属城市:',
            aboutScenicSpotData: [
              '全部',
              '成都',
              '绵阳',
              '乐山',
              '广元',
              '阿坝',
              '宜宾',
              '广安',
              '南充',
              '凉山',
              '雅安',
              '自贡',
              '巴中',
              '德阳',
              '遂宁',
              '甘孜',
              '泸州',
              '眉山',
              '内江',
              '攀枝花',
              '利州区'
            ]
          },
          {
            title: '价格区间:',
            aboutScenicSpotData: [
              '全部',
              '50元以下',
              '50-100元',
              '100元以上'
            ]
          }
        ]
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      }
    },
  }
</script>
<style scoped>
  .AdmissionTicketMoreWrap {
    background-color: #fff;
    width: 1190px;
    margin: 20px auto 0;
  }

  .ScenicSpotList {
    float: left;
    width: 190px;
    margin-right: 10px;
  }

  .ScenicSpotType {
    border: 1px solid #eaeaea;
    font: 12px/26px "宋体";
  }

  .ScenicSpotType dt a {
    display: inline-block;
    color: #4e9700;
    font-weight: bold;
    margin-left: 5px;
  }

  .ScenicSpotType dt:first-of-type {
    padding: 0;
    border: none;
  }

  .ScenicSpotType dt {
    padding-top: 10px;
    border-top: 1px dashed #ccc;
  }

  .ScenicSpotType a:hover {
    color: #f60;
  }

  .ScenicSpotType dl {
    padding: 0 10px 10px;
  }

  .ScenicSpotType dd {
    display: inline-block;
    width: 84px;
  }

  .ScenicSpotList > div > strong {
    display: block;
    font: bold 14px/2 "宋体";
    background: url("../../assets/img/o_pro_icon.png") repeat-x 0 -48px;
    text-indent: 5px;
    margin-bottom: 8px;
  }

  .AllScenicSpotType {
    margin-top: 10px;
    border: 1px solid #ccc;
  }

  .AllScenicSpotType a {
    color: #404040;
  }

  .AllScenicSpotType a:hover {
    color: #f60;
  }

  .AllScenicSpotType dl {
    padding: 0 10px 10px;
    font: 12px/22px "宋体";
  }

  .AllScenicSpotType dt:first-of-type {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }

  .AllScenicSpotType dt {
    color: #888888;
    margin-top: 10px;
    padding-top: 5px;
    border-top: 1px dashed #ccc;
  }

  .AllScenicSpotType dd {
    display: inline-block;
    margin-right: 18px;
  }

  /*RightRecommend*/

  .RecommendScenicSpot {
    float: left;
    width: 990px;
  }

  .propList {
    padding: 10px;
    border: 1px solid #ccc;
  }

  .aboutScenicSpot {
    margin-top: 15px;
    font: bold 14px/ 24px "宋体";
  }

  .aboutScenicSpot > strong {
    color: #404040;
    width: 90px;
    float: left;
    text-align: center;
  }

  .propListScenicSpotList {
    float: left;
    width: 878px;
  }

  .propListScenicSpotList > li {
    float: left;
  }

  .propListScenicSpotList > li > a:hover,
  .propListScenicSpotList > li > a.active {
    background: #ffae2c;
    color: #fff;
  }

  .propListScenicSpotList > li > a {
    color: #404040;
    padding: 0 10px;
  }

  .screenAdmissionTicketType {
    padding: 10px 0 10px 20px;
    margin-bottom: 10px;
  }

  .screenAdmissionTicketType a {
    color: #404040;
  }

  .screenAdmissionTicketType > .salesVolume > a,
  .screenAdmissionTicketType > .comment > a,
  .screenAdmissionTicketType > .satisfied > a{
    background: url("../../assets/img/ticketMore.png") no-repeat 20px -87px;
  }

  .screenAdmissionTicketType > .salesVolume.active > a,
  .screenAdmissionTicketType > .comment.active > a,
  .screenAdmissionTicketType > .satisfied.active > a {
    background: url("../../assets/img/ticketMore.png") no-repeat 20px -110px;
  }

  .screenAdmissionTicketType > div {
    float: left;
    font: 12px/28px "宋体";
    width: 45px;
  }

  .screenAdmissionTicketType > div.active {
    font-weight: bold;
  }

  .screenAdmissionTicketType > .price > a {
    background: url("../../assets/img/ticketMore.png") no-repeat 20px -135px;
  }

  .screenAdmissionTicketType > div.active > a {
    color: #ff6600;
  }

</style>
