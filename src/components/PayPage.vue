<template>
  <div>
    <div class="codeBox" :class="hide" ref="ewm"></div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        i: false,
        isLoad: 0,
        timer: null,
        hide: false,
      }
    },
    computed: mapGetters([
      'payStr'
    ]),
    methods: {
      initPay(){
        let payOptions = {
          "userID": "qianke",
          "password": "qianke123",
          "stationID": "qianlidagzh",
          "money": '1'
        };
        return this.$store.dispatch('payWechat', payOptions)
      },
    },
    mounted(){
      var qrcode = new QRCode(this.$refs.ewm, {
        width: 200,
        height: 200
      });

      if (this.i == false) {
        setTimeout(()=>{
          this.initPay().then(data => {
            qrcode.makeCode(data.list);
            if (this.isLoad > 0) {
              return;
            }
            this.timer = setInterval(() => {
              let options = {
                "userID": "qianke",
                "password": "qianke123",
                "stationID": "qianlidagzh",
                "orderNo": data.backstring
              }
              this.$store.dispatch('getOrderStatus', options)
              .then(resulte => {
                if (this.isLoad > 0) {
                  return;
                }

                if (resulte.list == "SUCCESS") {
                  this.isLoad++;
                  clearInterval(this.timer);
                  this.$router.push({name:'MyTourOrder'});
                }
              })
            }, 300)
          })
        },30)
      }
      this.i = true;
    }
  }
</script>
<style scoped>
  .codeBox {
    width: 200px;
    height: 200px;
    border:1px solid #ddd;
    margin: 20px auto 0;
  }
  #qrcode{
    height: 200px;
    width: 200px;
    margin: auto;
  }
  .hide{
    visibility:hidden;
  }
  .textBox {
    width:100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 40px;
  }
</style>
