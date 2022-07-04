import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../components/Log_in/Sign_up/SignUpPage.vue')
  },
  {
    path: '/HomeNav',
    name: 'homePage',
    component: () => import('../components/Home/HomePage.vue')
  },
  {
    path: '/TripsNav',
    name: 'tripsTour',
    component: () => import('../components/Trips/TripsPage.vue')
  },
  {
    path: '/aboutUs',
    name: 'about',
    component: () => import('../components/About_us/AboutUsPage.vue')
  },
  {
    path: '/LogInNav',
    name: 'logIn',
    component: () => import('../components/Log_in/logInPage.vue')
  },
  {
    path: '/booking',
    name: 'bookingLink',
    component: () => import('../components/Home/header/booking/bookingLink.vue')
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
