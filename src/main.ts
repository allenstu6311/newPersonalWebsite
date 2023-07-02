import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import router from './router'
import "./assets/static/css/global.css"
import "./assets/static/js/util"

Vue.use(VueRouter)

new Vue({
    router,
    el: '#app',
    render: (h) => h(App),
    data:function(){
        return{
            test:1234
        }
    },
    mounted(){
        // console.log(this.test)
    },


}).$mount('#app');


