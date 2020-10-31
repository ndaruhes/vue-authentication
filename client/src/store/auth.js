import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default{
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    getters: {
        authenticated(state){
            return state.token && state.user
        },
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token;
        },
        SET_USER(state, data){
            state.user = data;
        }
    },
    actions: {
        async login({dispatch}, credentials){
            let response = await axios.post('auth/login', credentials);
            // console.log(response.data.token);
            return dispatch('attempt', response.data.token)
        },
        async attempt({commit, state}, token){
            if(token){
                commit('SET_TOKEN', token);
            }
            if(!state.token){
                return
            }
            try{
                // let response = await axios.get('auth/profile', {
                //     headers: {
                //         'Authorization': 'Bearer ' + token
                //     }
                // });

                let response = await axios.get('auth/profile')
                commit('SET_USER', response.data);
            }catch(e){
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },
        // async logout({commit}){
        //     try{
        //         return await axios.post('auth/logout').then(() => {
        //             commit('SET_TOKEN', null);
        //             commit('SET_USER', null);
        //         })
        //     }catch(e){
        //         console.log('Error');
        //     } 
        // }
        logout({commit}){
            return axios.post('auth/logout').then(() => {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            })
        }
    },
}