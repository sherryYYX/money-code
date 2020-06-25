<template>
  <div class="nav">
    <router-link to="/money" class="nav-item">
      <Icon svg-name="money"></Icon>
      记账
    </router-link>
    <router-link to="/labels" class="nav-item">
      <Icon svg-name="label"></Icon>
      标签
    </router-link>
    <router-link to="/statistic" class="nav-item">
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
.nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,1);
  flex-direction: row;
  font-size: 12px;
  > .nav-item{
    padding: 2px 0;
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .icon{
      width: 32px;
      height: 32px;
    }
  }
}
</style>