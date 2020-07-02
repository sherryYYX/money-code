<template>
  <Layout>
    <div>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag"  @click="selected(tag)"
            :class="selectedTags.indexOf(tag)===0 && 'selected'">
          <span>{{tag}}</span>
        </li>
      </ol>
      <div class="newTag-wrapper">
        <button class="newTag" @click="createTag">新增标签</button>
        <button class="newTag newTag-remove" @click="removeTag">删除标签</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="js">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import tagListModel from "@/models/tagsModel"

@Component
  export default class Labels extends Vue{
  tags = tagListModel.data
  selectedTags=new Array(1)

  selected(tag){
      this.selectedTags=tag
  }

  createTag(){
      const name = window.prompt('请输入标签名')
      const message = tagListModel.create(name)
      if(message === 'duplicate'){
        window.alert('重复')
      }else if(message === 'success'){
        return
      }else if(message === 'null'){
        return
      }
  }

  removeTag(){
   const removeTagValue = this.selectedTags
    tagListModel.remove(removeTagValue)
  }
}
</script>

<style lang="scss" scoped>
.tags{
  background: white;
  font-size: 18px;
  padding: 0 18px;
  >li{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
  }
}
  .newTag{
    background: #64bd92;
    color:white;
    border-radius: 4px;
    border:none;
    height: 40px;
    padding: 0 16px;
    &-wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      padding: 56px 48px;
      margin-top: 44-16px;
    }
    &-remove{
      background: red;
    }
  }
.selected{
  background: #f3dcd6;
}

</style>