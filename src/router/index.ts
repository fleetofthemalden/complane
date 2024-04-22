import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPage.vue'
import FlightInfoStepView from '@/views/FlightInfoStep.vue'
import InFlightStepView from '@/views/InFlightStep.vue'
import SendToPeteView from '@/views/SendToPete/SendToPete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/flight-info',
      name: 'flightInfo',
      component: FlightInfoStepView
    },
    {
      path: '/in-flight',
      name: 'inFlight',
      component: InFlightStepView
    },
    {
      path: '/send-to-pete',
      name: 'sendToPete',
      component: SendToPeteView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/AboutView.vue')
    // },
  ]
})

export default router
