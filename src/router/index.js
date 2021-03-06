import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/user/Index.vue'

import Home from '../views/admin/Home.vue'
import UserList from '../views/admin/UserList.vue'
import Books from '../views/admin/Books.vue'
import Notice from '../views/admin/Notice.vue'
import Login from '../views/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import NoFind from '../views/404.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/user',
  name: 'user',
  component: UserList
},
{
  path: '/books',
  name: 'books',
  component: Books
},
{
  path: '/notice',
  name: 'notice',
  component: Notice
},
{
  path: '/helloWorld',
  name: 'HelloWorld',
  component: HelloWorld
},
{
  path: '/1',
  name: 'index',
  component: Index
},

{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/index',
  name: 'index',
  component: Index,
  children: [{
    path: 'info',
    component: () =>
      import('../views/user/Info.vue')
  },
  {
    path: 'bookshelf',
    component: () =>
      import('../views/user/Bookshelf.vue')
  },
  {
    path: 'history',
    component: () =>
      import('../views/user/History.vue')
  },
  {
    path: 'library',
    component: () =>
      import('../views/user/Library2.vue')
  },
  {
    path: 'notice',
    component: () =>
      import('../views/user/Notice.vue')
  },

  {
    path: '',
    component: () =>
      import('../views/user/Library2.vue'),
    default: true
  },
  {
    path: 'library2',
    component: () =>
      import('../views/user/Library2.vue'),
    default: true
  }
  ]
},
{
  path: '/home',
  name: 'home',
  component: Home
},
{
  path: '*',
  name: '404',
  component: NoFind
},
{
  path: '/',
  name: 'login',
  component: Login
}
  // { path: '*', redirect: '/login' }
]
const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  // routes
  routes,
  mode: 'history'
})

// 挂载路由导航守卫，如果用户未登陆，则跳转到登录页面
router.beforeEach((to, form, next) => {
  if (to.path === '/login') {
    return next()
  }
  const user = window.sessionStorage.getItem('user')
  console.log('tooken', user)
  if (!user) {
    return next('/login')
  } else {
    return next()
  }
})
export default router
