const localStorageKeyName = 'tagList';

const  tagListModel = {

  data:[],
  fetch() {
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data

  },

  create(name){
    if(name===''|| name === null){
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

  remove(tag){
    const index = this.data.indexOf(tag);
    this.data.splice(index, 1)
    this.save()
  },

  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default tagListModel;