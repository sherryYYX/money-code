<template>
  <Layout>
    <div class="tags">
      <ul class="current">
        <li>衣服</li>
        <li>食物</li>
        <li>住房</li>
        <li>交通</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>

    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text">
      </label>
    </div>

    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button style="grid-area: number-1">1</button>
        <button style="grid-area: number-2">2</button>
        <button style="grid-area: number-3">3</button>
        <button style="grid-area: number-d">删除</button>
        <button style="grid-area: number-4">4</button>
        <button style="grid-area: number-5">5</button>
        <button style="grid-area: number-6">6</button>
        <button style="grid-area: number-s">清空</button>
        <button style="grid-area: number-7">7</button>
        <button style="grid-area: number-8">8</button>
        <button style="grid-area: number-9">9</button>
        <button style="grid-area: number-o" class="ok">OK</button>
        <button style="grid-area: number-0" class="zero">0</button>
        <button style="grid-area: number-p">.</button>
      </div>
    </div>



  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Money extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/helper";
  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
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
      }
    }
  }

  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }

  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }

  .numberPad {
    background-color: #eee;
    .output {
      font-size: 48px;
      font-family: Helvetica,serif ;
      padding: 0 20px;
      text-align: right;
      color: #666;
      line-height: 60px;
    }
    .buttons {
      $button-width:80px;
      $button-height:80px;

      display: grid;
      grid-template-areas:"number-1 number-2 number-3 number-d"
          "number-4 number-5 number-6 number-s"
          "number-7 number-8 number-9 number-o"
          "number-0 number-0 number-p number-o";
      grid-template-columns: repeat(4,$button-width);
      grid-template-rows: repeat(4,$button-height);

      box-shadow: -8px -8px 16px -10px rgba(255,255,255,1),8px 8px 16px -10px rgba(0,0,0,0.15);
      padding: 10px 18px;
      border-radius: 20px;
      > button {
        margin: 6px;
        padding: 0;
        border: 0;
        display: block;
        outline: none;
        border-radius: calc(80px/2);
        font-size: 24px;
        font-family: Helvetica,serif;
        font-weight: normal;
        color: #999999;
        background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
        box-shadow: -4px -4px 10px -8px rgba(255,255,255,1),4px 4px 10px -8px rgba(0,0,0, 0.3);
        border: none;
        &:active{
          box-shadow: -4px -4px 10px -8px rgba(255,255,255,1) inset ,4px 4px 10px -8px rgba(0,0,0, 0.3) inset;
          border: none;
        }
      }
    }
  }
</style>