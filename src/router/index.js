import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyVue from "../views/MyVue.vue"
import ItemDetailView from "../views/ItemDetailView.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Index from "../views/Index.vue"
import DownLoad from "../views/DownLoad.vue"
import Member from "../views/Member.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign_in',
      name: 'login',
      component: Login
    },
    {
      path: '/sign_up',
      name: 'regiester',
      component: Register
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
        {
          path: 'download',
          name: 'download',
          component: DownLoad
        },
        {
          path: 'member',
          name: 'member',
          component: Member
        }
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: MyVue,
    },
    {
      path: '/items/:id',
      name: 'item-details',
      props: true,
      component: ItemDetailView,
    },
  ]
})

export default router
