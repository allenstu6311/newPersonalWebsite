import VueRouter from 'vue-router'
import home from "../views/home.vue"
import project from "../views/project.vue"

export const routes = [
    {
        path: '/',
        name: '首頁',
        component: home
    },
    {
        path: '/project',
        name: 'ˊ專案經驗',
        component: project
    },
    {
        path: '/*',
        redirect: '/'
    }
]


// 创建路由实例
const router = new VueRouter({
    routes,
    //畫面至頂
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }

})

export default router
