<template>
  <div class="types">
        <chart   :class="selected && data==='chart'"   @click="selectedType('chart')">记账明细</chart>
        <details :class="selected && data==='details'" @click="selectedType('details')">图层展示</details>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Chart from '@/components/Statistics/Chart.vue';
  import Details from '@/components/Statistics/Details.vue';
  @Component({
    components: {Chart, Details}
  })
  export default class StatisticTabs extends Vue {
    data = 'details'||'chart'
    selectedType(data: string){
      if(data !=='details' && data !== 'chart'){
        throw new Error('type is unknown')
      }
      this.data=data;
    }
  }
</script>

<style lang="scss" scoped>
  .types {
    background: #5b5d69;
    display: flex;
    text-align: center;
    font-size: 18px;
    color: white;
    > li {
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