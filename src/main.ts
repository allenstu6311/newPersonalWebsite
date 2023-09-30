import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import router from './router'
import "./assets/static/css/global.css"
import { BootstrapVue, IconsPlugin, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



/* add icons to the library */


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

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


