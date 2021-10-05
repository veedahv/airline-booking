import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FlightCard from '../components/FlightCard.vue'
import BookingForm from '../components/BookingForm.vue'
import FlightForm from '../components/FlightForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/FlightCard',
    name: 'FlightCard',
    component: FlightCard
  },
  {
    path: '/FlightForm',
    name: 'FlightForm',
    component: FlightForm
  },
  {
    path: '/BookingForm',
    name: 'BookingForm',
    component: BookingForm
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
