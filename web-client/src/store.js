import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentChat: {
      name: 'Galit Amsalem',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    }
  },
  mutations: {
    swapChat (state, newChat) {
      state.currentChat = newChat
    }
  },
  actions: {
    swapChat (context, newChat) {
      context.commit('swapChat', newChat)
    }
  },
  getters: {
    currentChat: state => {
      return state.currentChat
    }
  }
})
