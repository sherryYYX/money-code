<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tags " :key="tag"
          :class="{selected: selectedTags.indexOf(tag) >= 0}"
          @click="toggle(tag)">{{tag}}</li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="js">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from "@/models/tagsModel"
  @Component
  export default class Tags extends Vue {
    tags = tagListModel.data
    selectedTags=[]; //存储用户选中当标签

    //选中和取消选中标签开关
    toggle(tag){
      const index = this.selectedTags.indexOf(tag)
      if(index >= 0){
        this.selectedTags.splice(index,1)
      }else {
        this.selectedTags.push(tag)
      }
      this.$emit('update:value',this.selectedTags)
    }

    //新增标签
    createTag(){
      const name = window.prompt('请输入标签名')
      const message=tagListModel.create(name)
      if(message === 'duplicate'){
        window.alert('重复')
      }else if(message === 'success'){
        return
      }else if(message === 'null'){
        return
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/helper";
  .tags {
   overflow: auto;
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 150px;
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