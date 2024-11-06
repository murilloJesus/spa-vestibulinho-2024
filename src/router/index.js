import EscolherFluxo from '@/views/EscolherFluxo.vue'
import ParaAluno from '@/views/ParaAluno.vue'
import ParaResponsavel from '@/views/ParaResponsavel.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: EscolherFluxo,
    },
    {
      path: '/aluno',
      name: 'Para o Aluno',
      component: ParaAluno,
    },
    {
      path: '/responsavel',
      name: 'Para o Responsável',
      component: ParaResponsavel,
    },
  ],
})

export default router
