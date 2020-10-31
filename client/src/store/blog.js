import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default{
    namespaced: true,
    state: {
        blog: null
    },
    getters: {
        blogs(state){
            return state.blog
        }
    },
    mutations: {
        blogIndex(state, data){
            state.blog = data;
        }
    },
    actions: {
        async getBlogs({commit}){
            let response = await axios.get('blog');
            console.log(response.data.data)
            return commit('blogIndex', response.data.data)
        }
    }
}
