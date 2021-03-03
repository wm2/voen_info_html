import Vue from 'vue'
import VueRouter from 'vue-router'
import BasePage from '../components/site/common/BasePage.vue'
import Layout from '../components/Layout'
import Meta from 'vue-meta'

Vue.use(VueRouter);
Vue.use(Meta)

const routes = [
    {
        path: "/crm",
        component: Layout,
        children: [
            // {
            //   path: '/',
            //   name: 'Home',
            //   component: Home
            // },
            {
                path: 'user/me',
                name: 'user/me',
                component: () => import('@/pages/PageUser'),
            },
            {
                path: 'reports/',
                name: 'reports/',
                component: () => import('@/components/Reports'),
            },
            {
                path: 'video_reports/',
                name: 'video_reports/',
                component: () => import('@/components/VideoReports'),
            },
            {
                path: 'reports/add',
                name: 'reports/add',
                component: () => import('@/pages/PageReportAdd'),
                props: true
            },
            {
                path: 'deals/',
                name: 'deals/',
                component: () => import('@/pages/PageDeals')
            },
            {
                path: 'deals/:id',
                name: 'deals/:id',
                component: () => import('@/pages/PageDeal'),
                props: true
            },
            {
                path: 'reports/:id',
                name: 'reports/:id',
                component: () => import('@/pages/PageReport'),
                props: true,
            },

            {
                path: 'video_reports/:id',
                name: 'video_reports/reports/:id',
                component: () => import('@/pages/PageReport'),
                props: true,
            },
            {
                path: 'reports/add/form',
                name: 'reports/add/form',
                component: () => import('@/forms/AddReportForm')
            },
            {
                path: 'reports/:report_id/clients/add',
                name: 'reports/:report_id/clients/add',
                component: () => import('@/pages/PageClientsAdd'),
                props: true
            },
            {
                path: 'clients/add/form',
                name: 'clients/add/form',
                component: () => import('@/forms/AddClient')
            },
            {
                path: 'clients/',
                name: 'clients/',
                component: () => import('@/components/allClients')
            },
            {
                path: 'clients/:id',
                name: 'clients/:id',
                component: () => import('@/pages/PageClient'),
                props: true
            },
            {
                path: 'csv/',
                name: 'csv/',
                component: () => import('@/components/CsvParser')
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
        ]
    },
    {
        path: '/',
        name: 'BasePage',
        component: BasePage,
        children: [
            {path: ':id', name: 'home', component: () => import('../views/Home'), props: true},
            {
                path: '',
                name: 'GetMaterialsByCode',
                component: () => import('../components/site/sections/GetMaterialsByCode.vue')
            },
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


export default router
