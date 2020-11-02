import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default{
    namespaced: true,
    state: {
        blogs: [],
        message: ''
    },
    getters: {
        blogs(state){
            return state.blogs
        },
        message(state){
            return state.message
        }
    },
    mutations: {
        SET_BLOGS(state, data){
            state.blogs = data;
        }
    },
    actions: {
        async getBlogs({commit}){
            await axios.get('blog').then((response) => {
                commit('SET_BLOGS', response.data.data)
            })
        },
        async createBlog({dispatch, state}, credentials){
            await axios.post('blog/create', credentials).then((response) => {
                state.message = response.data
                return dispatch('getBlogs')
            })
        },
        async deleteBlog({dispatch}, endpoint){
            await axios.delete('blog/' + endpoint).then(() => {
                return dispatch('getBlogs')
            })
        }
    }
}
