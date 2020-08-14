import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects'
import Skills from '../views/Skills'
import Contact from '../views/Contact'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/proyectos',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/habilidades',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contratame',
    name: 'Contratame',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router