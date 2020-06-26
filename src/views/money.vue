<template>
  <Layout>
    {{record}}
    <Tags :data-source.sync="tags" @update:value="updateTags"></Tags>
    <Notes @update:value="updateNotes"></Notes>
    <Types @update:value="updateTypes"></Types>
    <NumberPad @update:value="updateNumberPad"></NumberPad>
  </Layout>
</template>

<script lang="js">
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Component from "vue-class-component"
  import Vue from 'vue'
  @Component({
    components: {NumberPad, Types, Notes, Tags}
  })
  export default class Money extends Vue{
    tags = ["衣服",'食物', '住房','交通'] //给 Tags 组件传的标签
    record={
      tags:[], notes:'',type:'', totalNumber:0
    }
    updateTags(e){
      this.record.tags = e
    }
    updateNotes(e){
      this.record.notes = e
    }
    updateTypes(e){
      this.record.type = e
    }
    updateNumberPad(e){
      this.record.totalNumber = e
    }
    mounted(){
      console.log(this.record)
    }
  }
</script>

<style lang="scss" scoped>




</style>