<template>
  <div>
    <div>页面找不到，请输入正确地址</div>
    <div>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NotFound extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>