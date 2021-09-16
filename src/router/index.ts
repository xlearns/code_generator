import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HOME from '@/view/Home.vue'
const routes:any = [
  {
    path:"/",
    name:"home",
    component:HOME
  }
]
const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router