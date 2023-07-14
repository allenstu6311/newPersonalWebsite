import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import router from './router'
import "./assets/static/css/global.css"
import "./assets/static/js/util"
import { BootstrapVue, IconsPlugin, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)

new Vue({
    router,
    el: '#app',
    //render 負責將模板轉換成虛擬DOM
    render: (h) => h(App),
}).$mount('#app');


