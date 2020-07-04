const recordModel ={
  data:[],
  //
  fetch(){
    this.data=JSON.parse(window.localStorage.getItem('recordList')||'[]' )
    return this.data
  },
  //
  create(record){
    const newRecord = JSON.parse(JSON.stringify(record)) //克隆
    newRecord.date = new Date().toISOString() //添加的日期转成ISO8601；
    this.data.push(newRecord)
    this.save()
  },
  //
  save(){
    window.localStorage.setItem('recordList',JSON.stringify(this.data))
  }
}
export default recordModel