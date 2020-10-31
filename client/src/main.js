import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/js/all'
import VueProgressBar from 'vue-progressbar'
import Toasted from 'vue-toasted'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

window.$ = window.jQuery = require('jquery');
require('overlayscrollbars');
require('admin-lte');
require('@/store/subscriber')

Vue.config.productionTip = false
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
Vue.use(Toasted)

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});

// store.dispatch('auth/attempt', localStorage.getItem('token'))
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')