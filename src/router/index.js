import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/msite/Msite.vue'
import Search from '../pages/search/Search.vue'
import Order from '../pages/order/Order.vue'
import Profile from '../pages/profile/Profile.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
  
})
