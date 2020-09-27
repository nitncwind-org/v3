import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'トップページ',
        component: Home
    },
    {
        path: '/about',
        name: '活動について',
        component: () => import('../views/About.vue')
    },
    {
        path: '/concerts/:id',
        name: '演奏会情報',
        component: () => import('../views/ConcertsDetail.vue')
    },
    {
        path: '/concerts',
        name: '演奏会',
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
                name: '吹奏楽コンクール',
                component: () => import('../views/Winds.vue')
            },
            {
                path: 'ensemble',
                name: 'アンサンブルコンテスト',
                component: () => import('../views/Ensemble.vue')
            }
        ]
    },
    {
        path: '/link',
        name: 'リンク集',
        component: () => import('../views/Link.vue')
    },
    {
        path: '/contact',
        name: 'お問い合わせ',
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
