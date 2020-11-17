import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default{
    namespaced: true,
    state: {
        blogs: [],
        message: '',
        loading: true
    },
    getters: {
        blogs(state){
            return state.blogs
        },
        message(state){
            return state.message
        },
        loading(state){
            return state.loading
        }
    },
    mutations: {
        SET_BLOGS(state, data){
            state.blogs = data;
        },
        SET_LOADING_STATUS(state, status){
            state.loading = status;
        }
    },
    actions: {
        async getBlogs({commit}){
            await axios.get('blog').then((response) => {
                commit('SET_BLOGS', response.data.data)
                commit('SET_LOADING_STATUS', false)
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
