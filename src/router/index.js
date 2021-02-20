import Vue from 'vue'
import VueRouter from 'vue-router'
import BasePage from '../components/common/BasePage.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'BasePage',
        component: BasePage,
        children: [
            {path: '', name: 'home', component: () => import('../views/Home')},
            {path: '/by-code', name: 'GetMaterialsByCode',component: () => import('../components/sections/GetMaterialsByCode.vue')},
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


export default router
