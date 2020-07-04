const localStorageKeyName = 'tagList';

const  tagListModel = {

  data:['衣服','食物','住房','交通'],
  fetch() {
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    if(!this.data || this.data.length === 0){
      this.create('衣服')
      this.create('食物')
      this.create('住房')
      this.create('交通')
    }
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