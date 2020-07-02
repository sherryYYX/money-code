<template>
      <statistic>
            <div>chart</div>
      </statistic>
</template>

<script lang="js">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Statistic from '@/views/statistic.vue';
  @Component({
    components: {Statistic}
  })
  export default class Chart extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>