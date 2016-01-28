<style media="screen" lang="sass">
  @import "../common/css/base.scss";

  .component-head{
    height : px2rem(50px);
    line-height : px2rem(50px);
    border-bottom:1px solid #ddd;
    display:flex;
    position:absolute;
    top:0;
    left:0;
    width:90%;
    padding:0 5%;
    .logo{
      flex:1;
      a{
        color:#f66;
        font-size: px2rem(30px);
        text-decoration:none;
      }
    }

    .about{
      cursor:pointer;
    }
  }
</style>

<template>
  <div id="component-head" class="component-head">
    <div class="logo">
      <a v-link="{ path : '/home' }">
        {{name}}
      </a>
    </div>
    <a class="about" v-link="{ path: '/about' }">about</a>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data () {
      return {
        name: 'Vue'
      }
    }
  }
</script>
