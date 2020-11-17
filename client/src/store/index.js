import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import blog from './blog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading : true
  },
  mutations: {
    SET_LOADING_PAGE(state, status){
      state.loading = status
    }
  },
  actions: {
    loading({commit}){
      commit('SET_LOADING_PAGE', false)
    }
  },
  modules: {
    auth, blog
  }
})
