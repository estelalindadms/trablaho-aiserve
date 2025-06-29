import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue' 
import TelaInicial from '@/views/TelaInicial.vue'
import LinkedIn from '@/views/Linkedin.vue'
import Vale from '@/views/Vale.vue'
import Coca from '@/views/Coca.vue'
import Senai from '@/views/Senai.vue'
import Ambev from '@/views/Ambev.vue'
import Cacau from '@/views/Cacau.vue'

const routes = [
  { 
    path: '/', 
    name: 'login',
    component: Login 
  },
  { 
    path: '/home', 
    name: 'home', 
    component: TelaInicial 
  },
  { path: '/linkedin', name: 'linkedin', component: LinkedIn },
  { path: '/vale', name: 'vale', component: Vale },
  { path: '/coca', name: 'coca', component: Coca },
  { path: '/senai', name: 'senai', component: Senai },
  { path: '/ambev', name: 'ambev', component: Ambev },
  { path: '/cacau', name: 'cacau', component: Cacau },
  { path: '/:pathMatch(.*)*', redirect: '/' } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
