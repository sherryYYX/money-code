<template>
  <Layout>
    <div>
      <statistics-nav></statistics-nav>
      <div class="content">
        <slot/>
      </div>
    </div>
  </Layout>
</template>

<script lang="js">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import StatisticsNav from '@/components/Statistics/StatisticsNav.vue';
  import recordModel from '@/models/recordModel';

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












