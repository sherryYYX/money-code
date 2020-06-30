<template>
  <Layout>
    <div>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag" >
          <span>{{tag}}</span>
        </li>
      </ol>
      <div class="newTag-wrapper">
        <button class="newTag" @click="createTag">新增标签</button>
        <button class="newTag" @click="removeTag">删除标签</button>
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
    selected
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
     tagListModel.remove(name)
  }
}
</script>

<style lang="scss" scoped>
.tags{
  background: white;
  font-size: 16px;
  padding-left: 16px;
  >li{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
  }
}
  .newTag{
    background: #767676;
    color:white;
    border-radius: 4px;
    border:none;
    height: 40px;
    padding: 0 16px;
    &-wrapper{
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }

</style>