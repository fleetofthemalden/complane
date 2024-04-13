import { createRouter, createWebHistory } from 'vue-router';
import ViteDocsView from '@/views/ViteDocs.vue';
import LandingPageView from '@/views/LandingPage.vue';
import InFlightStepView from '@/views/InFlightStep.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/in-flight',
      name: 'inFlight',
      component: InFlightStepView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/AboutView.vue')
    // },
    {
      path: '/vite-docs',
      name: 'viteDocs',
      component: ViteDocsView
    }
  ]
});

export default router;
