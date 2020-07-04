<template>
  <div class="nav">
    <router-link to="/statistic/details"  class="nav-item" active-class="selected">
      记账明细
    </router-link>
    <router-link to="/statistic/chart" class="nav-item" active-class="selected">
      图表展示
    </router-link>
  </div>
</template>

<script lang="js">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class StatisticsNav extends Vue {

  }
</script>

<style lang="scss" scoped>
  .nav {
    background: #5b5d69;
    display: flex;
    text-align: center;
    font-size: 18px;
    color: white;
    > .nav-item {
      width: 50%;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected {
        background: #fff;
        color: #333;
      }
    }
  }
</style>