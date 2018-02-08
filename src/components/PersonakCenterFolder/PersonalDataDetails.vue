<template>
    <div>
      <div class="personalDataDetailsWrap">
        <ul class="personalDataDetailsWrapNavList clearfix">
          <li><a href="javascript:;">基本信息</a></li>
        </ul>
        <ul class="personalDataDetailsWrapContentList">
          <li>
            <strong><i>*</i>昵称:</strong>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters([]),
        data() {
            return {}
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
<style scope>
  .personalDataDetailsWrap {

  }
</style>
