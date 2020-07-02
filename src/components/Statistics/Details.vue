<template>
      <statistic>
           <div>
             <div class="title">我的记账本</div>
             <div class="parcel">
               <div>本月支出</div>
               <span class="expenses">￥{{result('-','month')}}</span>

               <div class="budget">
                 <span>本月收入<a>￥{{result('+','month')}}</a></span>
               </div>

             </div>
             <div class="today">
               <span>今日支出<a>￥{{result('-','day')}}</a></span>
               <span>今日收入<a>￥{{result('+','day')}}</a></span>
             </div>
             <div class="records">
               <ol>
                 <li v-for="item in recordList" :key="item.date">
                   <span>{{tagString(item.tags)}} ${{item.totalNumber}}</span>
                 </li>
               </ol>
<!--               <router-link class="record" v-for="item in recordList" :key="item.date" :to="`general/edit/${item.id}`">-->
<!--                 <span class="icon-span">{{item.tag}}<span>{{item.notes}}</span></span>-->
<!--                 <span class="amount"><span >￥{{item.type}}{{item.totalNumber}}</span>{{beautify(item.date)}}</span>-->
<!--               </router-link>-->
             </div>




<!--             <ol>-->
<!--               <li v-for="(group,index) in groupList" :key="index">-->
<!--                 {{group.title}}-->
<!--                 今日支出：{{group.expendTotal}}： 今日收入：${{group.incomeTotal}}-->
<!--                 <ol>-->
<!--                   <li v-for="(item,index) in group.items" :key="index">-->
<!--                     <span>{{tagString(item.tags)}}</span>-->
<!--                     <span>{{item.notes}}</span>-->
<!--                     <span>¥{{item.type+item.totalNumber}}</span>-->
<!--                   </li>-->
<!--                 </ol>-->
<!--               </li>-->
<!--             </ol>-->
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

     //result('-','day')
    result(type, time){
      let daily=0;
      let monthly=0;
      const now = dayjs();
      const {recordList} = this;
      const newList=JSON.parse(JSON.stringify(recordList)).filter(r=>r.type===type);
      for(let i=0;i<newList.length;i++){
        if(now.isSame(dayjs(newList[i].date),'day')){
          daily+=newList[i].totalNumber;
        }
        if(now.isSame(dayjs(newList[i].date),'month')){
          monthly+=newList[i].totalNumber;
        }
      }
      if(time==='day'){return daily;}
      if(time==='month'){return monthly;}
    }
    beautify(string) {
      const day = dayjs(string);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天  '+day.format('HH:mm');
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天  '+day.format('HH:mm');
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天  '+day.format('HH:mm');
      } else if (day.isSame(now, 'year')) {
        return day.format('M月D日  HH:mm');
      } else {
        return day.format('YYYY年M月D日  HH:mm');
      }
    }












   //  //将tags：['衣服'] => 衣服
   //  tagString(tags){
   //    return tags.length===0 ? '无':tags.join(',')
   //  }
   //
   // get  groupList(){
   //   let monthly=0;
   //    const recordList=this.recordList
   //    //按照时间排序
   //    const newRecordList= JSON.parse(JSON.stringify(recordList))
   //      .sort((a,b)=>dayjs(b.date).valueOf()-dayjs(a.date).valueOf())
   //    //往第一组里放第一个
   //    const groupList = [{title:dayjs(newRecordList[0].date).format('YYYY-MM-DD'),expendTotal:0,incomeTotal:0, items:[newRecordList[0]]}]
   //    for(let i = 1; i < newRecordList.length; i++){
   //      const current = newRecordList[i] //拿到新的数
   //      const last = groupList[groupList.length-1] //拿到所有组的最后一组
   //      //最后一组的标题日期与新的数是否相等,如果相等把新数放到最后一组的items;
   //      if(dayjs(last.title).isSame(dayjs(current.date), 'day')){
   //        last.items.push(current)
   //      }else {
   //        //如果不想等，另起一个新组，把新数的日期作为标题
   //        groupList.push({title:dayjs(current.date).format('YYYY-MM-DD'),expendTotal:0,incomeTotal:0, items:[current]})
   //      }
   //    }
   //   const now = dayjs();
   //   for(let i=0;i<groupList.length;i++){
   //     if(now.isSame(dayjs(groupList[i].date),'month')){
   //       monthly+=groupList[i].totalNumber;
   //     }
   //   }
   //   console.log('monthly')
   //   console.log(monthly)
   //   groupList.map(group=>{
   //      const expend = group.items.filter(item=>{
   //        if(item.type === '-'){
   //          return item.totalNumber
   //        }
   //      })
   //      const income = group.items.filter(item=>{
   //        if(item.type === '+'){
   //          return item.totalNumber
   //        }
   //      })
   //      group.expendTotal = expend.reduce((sum, item)=>{
   //        return sum - item.totalNumber
   //      },0)
   //      group.incomeTotal = income.reduce((sum, item)=>{
   //        return sum + item.totalNumber
   //      },0)
   //
   //    })
   //    console.log(groupList)
   //    return groupList
   //  }


  }
</script>

<style lang="scss" scoped>

</style>