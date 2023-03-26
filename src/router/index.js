import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyVue from "../views/MyVue.vue"
import ItemDetailView from "../views/ItemDetailView.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Index from "../views/Index.vue"
import DownLoad from "../views/DownLoad.vue"
import Member from "../views/Member.vue"
import Technology from "../views/Technology.vue"
import Back from "../views/Back.vue"
import Qianduan from "../views/Qianduan.vue"
import Andriod from "../views/Andriod.vue"
import IOS from "../views/IOS.vue"
import Artificial from "../views/Artificial.vue"


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
        },
        {
          path: 'technology',
          name: 'technology',
          component: Technology,
          redirect: '/technology/back',
          children: [
            {
              path: 'back',
              name: 'back',
              component: Back
            },
            {
              path: 'qianduan',
              name: 'qianduan',
              component: Qianduan
            },
            {
              path: 'andriod',
              name: 'andriod',
              component: Andriod
            },
            {
              path: 'ios',
              name: 'ios',
              component: IOS
            },
            {
              path: 'artificial',
              name: 'artificial',
              component: Artificial
            },
          ]
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
