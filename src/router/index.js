import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/user/Index.vue'

Vue.use(VueRouter)

const routes = [{
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/index4',
            name: 'index',
            component: Index
        }
        const routes = [{
                path: '/index',
                name: 'index',
                component: Index
            },
            {
                path: '/index2',
                name: 'index',
                component: Index
            }
        ]
        const router = new VueRouter({
            // mode: 'history',
            // base: process.env.BASE_URL,
            // routes
            routes,
            mode: 'history'
        })

        export default router