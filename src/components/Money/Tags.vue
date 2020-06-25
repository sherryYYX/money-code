<template>
  <div class="tags">
    <ul class="current">
      <li>衣服</li>
      <li>食物</li>
      <li>住房</li>
      <li>交通</li>
      <li>衣服</li>
      <li>食物</li>
      <li>住房</li>
      <li>交通</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/helper";
  .tags {
    overflow-y: scroll;
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 128px;
    position: relative;
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        $bg: #d9d9d9;
        background: $bg;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
        &.selected {
          background: darken($bg, 50%);
          color: white;
        }
      }
    }
    > .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
        position: absolute;
        left: 12px;
        bottom: 10px;

      }
    }
  }

</style>