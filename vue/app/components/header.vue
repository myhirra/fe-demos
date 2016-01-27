<style media="screen" lang="sass">
  @import "../common/css/base.scss";
  .logo{
    color:#f66;
  }
</style>

<template id="component-head">
  <div class="logo">
    {{name}}
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data () {
      return {
        name: 'I\'m header'
      }
    }
  }
</script>
