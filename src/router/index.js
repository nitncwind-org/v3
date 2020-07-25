import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/concerts',
        name: 'Concerts',
        component: () => import('../views/Concerts.vue')
    },
    {
        path: '/concours',
        name: 'Concours',
        component: () => import('../views/Concours.vue')
    },
    {
        path: '/link',
        name: 'Link',
        component: () => import('../views/Link.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('../views/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
