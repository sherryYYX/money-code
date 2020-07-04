<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Layout extends Vue {

  }
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .content{
    border: 1px solid green;
    background: #f2f2f2;
    overflow: auto;
    flex-grow: 1;


  }
}
</style>