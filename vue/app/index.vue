<style media="screen">
  @import "./common/css/base.scss";

  .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: px2rem(40px);
    h1{
      vertical-align:middle;
      text-align: center;
    }
  }
</style>

<template id="component-content">
  <div class="content">
    <comp-header></comp-header>
    <h1 class="animated flipInY">
      {{msg}}
    </h1>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue';
  import CompHeader from './components/header.vue';

  export default {
    data () {
      return {
        msg: 'Hello from vue-loader!'
      }
    },
    components: {
      CompHeader
    }
  }
</script>
