<template>
  <div>
    <router-link to="/money">
      <Icon svg-name="money"></Icon>
      记账
    </router-link>
    <router-link to="/labels">
      <Icon svg-name="label"></Icon>
      标签
    </router-link>
    <router-link to="/statistic">
      <Icon svg-name="statistics"></Icon>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  @Component({
    components: {Icon}
  })
  export default class Nav extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>