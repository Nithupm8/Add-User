import Vue from 'vue'
import VueRouter from 'vue-router'
import Adduser from "../components/Adduser.vue"
import VueFormulate from '@braid/vue-formulate'
import axios from 'axios'
Vue.prototype.$axios = axios
window.axios= axios

Vue.use(VueRouter)
Vue.use(VueFormulate)

const routes = [
  {
    path: "/",
    name: "Adduser",
    component: Adduser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
