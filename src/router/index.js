import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Dashboard from '../views/Dashboard.vue'
import User from '../views/user.vue'
import Investigacion from '../views/investigacion.vue'
import userCreate from '../views/userCreate.vue'
import userEdit from '../views/userEdit.vue'
import userDelete from '../views/userDelete.vue'
import invesProducts from '../views/invesProducts.vue'
import investigacionEdit from '../views/investigacionEdit.vue'
import InvesAccion from '../views/invesAccion.vue'
import InvesAccionCreate from '../views/invesAccion-create.vue'
import InvesAccionEdit from '../views/invesAccion-edit.vue'
import Mediciones from '../views/mediciones.vue'
import MedicionesCreate from '../views/medicionesCrear.vue'
import MedicionesEdit from '../views/medicionesEdit.vue'
import InvestProductsCreate from '../views/InvestProductsCreate.vue'
import InvesProductsDelete from '../views/InvesProductsDelete.vue'
import InvestProductsEdit from '../views/InvestProductsEdit.vue'


// import {useAuthStore} from '../stores/counter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/usuario',
      name: 'User',
      component: User
    },
    {
      path: '/userCreate',
      name: 'userCreate',
      component: userCreate
    },
    {
      path: '/userEdit/:key',
      name: 'userEdit',
      component: userEdit
    },
    {
      path: '/userDelete/:key',
      name: 'userDelete',
      component: userDelete
    },
    {
      path: '/investigacion',
      name: 'Investigacion',
      component: Investigacion
    },
    {
      path: '/investProductsCreate',
      name: 'InvestProductsCreate',
      component: InvestProductsCreate
    },
    {
      path: '/investigacionEdit',
      name: 'investigacionEdit',
      component: investigacionEdit
    },
    {
      path: '/investProducts',
      name: 'invesProducts', 
      component: invesProducts
    },
    {
      path: '/invesProductsDelete/:key',
      name: 'invesProductsDelete', 
      component: InvesProductsDelete
    },
    {
      path: '/InvestProductsEdit/:key',
      name: 'InvestProductsEdit', 
      component: InvestProductsEdit
    },
    {
      path: '/invesAccion',
      name: 'InvesAccion',
      component: InvesAccion
    },
    {
      path: '/invesAccion-create',
      name: 'InvesAccionCreate',
      component: InvesAccionCreate
    },
    {
      path: '/invesAccion-edit',
      name: 'InvesAccionEdit',
      component: InvesAccionEdit
    },
    {
      path: '/mediciones',
      name: 'Mediciones',
      component: Mediciones
    },
    {
      path: '/medicionesCreate',
      name: 'MedicionesCreate',
      component: MedicionesCreate
    },
    {
      path: '/medicionesEdit/:key',
      name: 'MedicionesEdit',
      component: MedicionesEdit
    },
    
  ]
})

router.beforeEach( async (to) => {
  // RUTAS EN EL QUE USUARIO PUEDE ACCEDER SI NO SE A LOGEADO
  const publicPages = ['/'];
  const authRequired =! publicPages.includes(to.path);

  // SI LA VARIABLE token ES NULA 
  if(authRequired && !localStorage.token){ 
    return '/';
  }
})

export default router


