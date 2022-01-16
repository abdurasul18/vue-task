import Vue from 'vue'
import Vuex from 'vuex'
import getUser from '@/server'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : ''
  },
  mutations: {
    SET_USER(state, user){
      state.user = user,
      localStorage.setItem('tkn', user?.token)
    }
  },
  actions: {
   async get_user({commit}, user){
      let userData =  await getUser(user)
      commit('SET_USER', userData)
      return user
    }
  },
 
})
