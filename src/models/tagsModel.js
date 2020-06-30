const localStorageKeyName = 'tagList';

const  tagListModel = {
  data:[],
  fetch() {
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data

  },

  create(name){
    if(name===''){
      window.alert('标签名不为空')
      return null
    }else if(this.data.indexOf(name)>=0){
      return 'duplicate'
    }else {
      this.data.push(name)
      this.save()
      return "success"
    }

  },

  remove(name){
    const index = this.data.indexOf(name);
    this.data.splice(index, 1)
  },

  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default tagListModel;