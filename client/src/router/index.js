import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Blog from '../views/Blog.vue'
import Dashboard from '../views/Dashboard.vue'

// Blog
import IndexBlog from '../views/blog/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home Page' }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: 'Login Page' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: { title: 'Blog Page' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard' },
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'login'
        })
      }
      next();
    },
  },
  {
    path: '/dashboard/blog',
    name: 'page.blog',
    component: IndexBlog,
    meta: {title: 'Manage Blog Page'}
  }
]

const router = new VueRouter({
  mode: 'history',
  // linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
});

export default router
