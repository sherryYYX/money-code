<template>
  <Layout>
      <statistics-nav></statistics-nav>
      <div class="content">
        <slot/>
      </div>
  </Layout>
</template>

<script lang="js">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import recordModel from '@/models/recordModel';
  import StatisticsNav from "@/components/Statistics/StatisticsNav"

  const recordList = recordModel.fetch()

  @Component({
    components: {StatisticsNav}
  })
  export default class Statistic extends Vue {
    recordList = recordList
  }
</script>

<style lang="scss" scoped>

</style>












