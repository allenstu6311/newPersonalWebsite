import VueRouter from 'vue-router'
import Vue from 'vue'
import home from "../views/home.vue"
import about from "../views/about.vue"


// 定义路由规则
export const routes = [
    {
        path: '/',
        name: '首頁',
        component: home
    },
    {
        path: '/about',
        name: '關於我',
        component: about
    },
]

// 创建路由实例
const router = new VueRouter({
    routes
})

export default router
