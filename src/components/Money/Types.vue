<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected' " @click="selectedType('-')">支出</li>
      <li :class="type === '+' && 'selected' " @click="selectedType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  @Component
  export default class Types extends Vue{
    @Prop(Number) xxx: number | undefined;
    type = '-';
    selectedType(type: string){
      if(type !=='-' && type !== '+'){
        throw new Error('type is unknown')
      }
      this.type=type;
    }
    @Watch('type')
    typeChanged(type: string){
      this.$emit('update:value',type)
    }
  }

</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 56px;
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

</style>