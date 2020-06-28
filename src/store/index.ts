import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tag:"衣服",
    tags:['衣服'],


    // tags: ["衣服",'食物', '住房','交通']
  },
  mutations: {
    save (tags) {
      window.localStorage.setItem('tags', JSON.stringify(tags))
    },

    fetch (tags) {
      JSON.stringify(window.localStorage.getItem('tags'))
      return tags
    }
  },
})

export default store

// store.commit('save')
// console.log(store.commit('fetch'));

