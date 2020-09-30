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
        path: '/news/:id',
        component: () => import('../views/NewsDetail.vue')
    },
    {
        path: '/news',
        component: () => import('../views/News.vue')
    },
    {
        path: '/concerts/:id',
        name: 'ConcertsDetail',
        component: () => import('../views/ConcertsDetail.vue')
    },
    {
        path: '/concerts',
        name: 'Concerts',
        component: () => import('../views/Concerts.vue')
    },
    {
        path: '/concours',
        component: () => import('../views/Concours.vue'),
        children: [
            {
                path: '/',
                name: '404',
                component: () => import('../views/404.vue')
            },
            {
                path: 'winds',
                name: 'Winds',
                component: () => import('../views/Winds.vue')
            },
            {
                path: 'ensemble',
                name: 'Ensemble',
                component: () => import('../views/Ensemble.vue')
            }
        ]
    },
    {
        path: '/link',
        name: 'Link',
        component: () => import('../views/Link.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
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
