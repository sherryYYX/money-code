<template>
      <statistic>
           <div>
             <ol>
               <li v-for="(group,index) in groupList" :key="index">
                 {{group.title}}
                 <ol>
                   <li v-for="(item,index) in group.items" :key="index">
                     <span>{{tagString(item.tags)}}</span>
                     <span>{{item.notes}}</span>
                     <span>¥{{item.type+item.totalNumber}}</span>
                   </li>
                 </ol>
               </li>
             </ol>
           </div>
        <button>点击结果</button>
      </statistic>
</template>

<script lang="js">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Statistic from '@/views/statistic.vue';
  import recordModel from "@/models/recordModel"
  import dayjs from 'dayjs'

  const recordList = recordModel.fetch()
  @Component({
       components: {Statistic}
  })
  export default class Details extends Vue {
    recordList = recordList

    //将tags：['衣服'] => 衣服
    tagString(tags){
      return tags.length===0 ? '无':tags.join(',')
    }

    get groupList(){
      const recordList=this.recordList
      console.log(recordList)
      const newRecordList= JSON.parse(JSON.stringify(recordList)).sort((a,b)=>dayjs(b.date).valueOf()-dayjs(a.date).valueOf())
      console.log(newRecordList)
      const groupList = [{title:dayjs(newRecordList[0].date).format('YYYY-MM-DD'), items:[newRecordList[0]]}] //往第一组里放第一个
      for(let i = 1; i < newRecordList.length; i++){
        const current = newRecordList[i] //拿到新的数
        const last = groupList[groupList.length-1] //拿到所有组的最后一组
        //最后一组的标题日期与新的数是否相等,如果相等把新数放到最后一组的items;
        if(dayjs(last.title).isSame(dayjs(current.date), 'day')){
          last.items.push(current)
        }else {
          //如果不想等，另起一个新组，把新数的日期作为标题
          groupList.push({title:dayjs(current.date).format('YYYY-MM-DD'), items:[current]})
        }
      }
      console.log(groupList)
      return groupList
    }

  }
</script>

<style lang="scss" scoped>

</style>