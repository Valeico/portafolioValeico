import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SkillsView from '../views/SkillsView.vue';
import Error404 from '../views/Error404View.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/:pathMatch(.*)*',
      name: "error-404",
      meta: { 
          title: 'Pagina no encontrada'
      },
      component: Error404
    }
  ]
})

export default router
