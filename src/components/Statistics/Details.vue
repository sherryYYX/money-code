<template>
  <Layout>
    <div class="nativeBody">
      <div class="title">我的记账</div>

      <div class="container">
        <div class="month">
          <div>本月支出</div>
          <span class="monthExpense">￥{{result('-','month')}}</span>
          <div class="budget">
            <span>本月收入<span class="monthIncome">￥{{result('+','month')}}</span> </span>
          </div>
        </div>
      </div>


      <div class="today">
            <span>
              今日支出
              <span class="todayColor">
                ￥{{result('-','day')}}
              </span>
            </span>
        <span>
              今日收入
              <span class="todayColorGreen">
                ￥{{result('+','day')}}
              </span>
            </span>
      </div>

      <div >
        <ol class="records">
          <li v-for="item in recordList" :key="item.date">
            <div class="tags">
              {{tagString(item.tags)}}
              <div>{{item.notes}}</div>
            </div>

            <span class="total">
                   <div>
                  ¥{{item.type}}{{item.totalNumber}}
                   </div>
                  {{beautify(item.date)}}
                </span>
          </li>
        </ol>
      </div>

    </div>
  </Layout>
</template>

<script lang="js">
  import Vue from 'vue';
  import {Component,} from 'vue-property-decorator';
  import Statistic from '@/views/statistic.vue';
  import recordModel from "@/models/recordModel"
  import dayjs from 'dayjs'


  @Component({
       components: {Statistic}
  })

  export default class Details extends Vue {

    recordList =  recordModel.fetch()

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
   //   return groupList
   //
   //  }






  }
</script>

<style lang="scss" scoped>
  .title{
    padding-left: 16px;
    padding-top: 8px;
    background: #ddd;
    font-weight: bold;
  }
  .container{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .month{
      color: #666;
      font-size: 16px;
      width: 100vw;
      margin: 8px 12px;
      padding: 16px;
      background: #fafafa;
      border-radius: 4px;
      box-shadow:  -6px -6px 10px rgba(255, 255, 255, 0.5),
                   6px 6px 20px rgba(0,0,0,0.1);
      .monthExpense{
        font-size: 28px;
        color: red;
      }
      .monthIncome{
        color: #42b983;
      }
    }
  }

  .records{
    > li{
      color: #666;
      font-size: 16px;
      margin: 8px 12px;
      padding: 16px;
      background: #fafafa;
      border-radius: 4px;
      box-shadow:  -6px -6px 10px rgba(255, 255, 255, 0.5),
      6px 6px 20px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .tags{
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        >div{
          word-wrap:break-word;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-weight: normal;
          font-size: 16px;
          flex-wrap: wrap;
        }
      }
      .total{
        color: #c5c5c5;
        font-size: 12px;
        >div{
          font-size: 20px;
          font-weight: bold;
          color: black;
        }
      }

    }
  }
  .today{
    padding: 12px;
    margin: 10px 12px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .todayColor{
      color: red;
      font-size: 18px;
    }
    .todayColorGreen{
      color: #42b983;
      font-size: 18px;
    }
  }
</style>