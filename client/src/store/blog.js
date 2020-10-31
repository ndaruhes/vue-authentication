import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default{
    namespaced: true,
    state: {
        blogs: [],
    },
    getters: {
        blogs(state){
            return state.blogs
        }
    },
    mutations: {
        blogIndex(state, data){
            state.blogs = data;
        }
    },
    actions: {
        async getBlogs({commit}){
            let response = await axios.get('blog');
            console.log(response.data.data)
            commit('blogIndex', response.data.data)
        }
    }
}
