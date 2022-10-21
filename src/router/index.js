import { createRouter,createWebHistory } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import SubPage0101 from '@/components/SubPage0101.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:HomeView
    },
    {
        path:'/sub0101',    // url값
        name:'sub0101',
        component:SubPage0101
    }
]

const router = createRouter({
    //routes:routes // key,value값이 같으면 하나만 써도 됨
    history:createWebHistory(),
    routes
})

export default router