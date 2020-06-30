<template>
  <Layout>
    <Tags :data-source.sync="tags" @update:value="updateTags"></Tags>
    <Notes @update:value="updateNotes"></Notes>
    <Types @update:value="updateTypes"></Types>
    <NumberPad @update:value="updateNumberPad" @submit="saveRecord"></NumberPad>
  </Layout>
</template>

<script lang="js">
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Component from "vue-class-component"
  import Vue from 'vue'
  import {Watch} from "vue-property-decorator"
  import recordModel from "@/models/recordModel"
  import tagListModel from "@/models/tagsModel"

  const recordList = recordModel.fetch()
  const tagList = tagListModel.fetch()

  @Component({
    components: {NumberPad, Types, Notes, Tags}
  })

  export default class Money extends Vue{
    tags =  tagList //给 Tags 组件传的标签
    record = {
      tags:[], notes:'',type:'', totalNumber:0, date:Date
    }
    recordList = recordList
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


    saveRecord(){
      const newRecord = JSON.parse(JSON.stringify(this.record))
      newRecord.date = new Date()
      this.recordList.push(newRecord)
      console.log(this.recordList)
    }
    @Watch('recordList')
    recordListChanged(){
      recordModel.save(this.recordList)
    }

    // @Watch('tags')
    // tagsChanged(){
    //   tagsModel.save(this.tags)
    // }
  }
</script>

<style lang="scss" scoped>




</style>