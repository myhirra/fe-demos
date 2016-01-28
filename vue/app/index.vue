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

<template>
  <div class="content">
    <comp-header></comp-header>

    <router-view class="view"></router-view>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue';
  import CompHeader from './components/header.vue';
  import CompAbout from './components/about.vue';
  import HomeHeader from './components/home.vue';

  export default {
    components: {
      CompHeader
    }
  }
</script>
