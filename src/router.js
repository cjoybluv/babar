import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import NetworkIssue from './views/NetworkIssue.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: '/about',
      name: 'about',
      meta: { requiresAuth: false },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { requiresAuth: false },
      component: () => import('./views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/checklists',
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('auth/getFromLocal')
          .then(() => {
            next({
              name: 'checklists',
              params: { ownerId: store.getters.ownerId }
            })
          })
          .catch(() => {
            next({ name: 'login' })
          })
      }
    },
    {
      path: '/checklists/:ownerId',
      name: 'checklists',
      meta: { requiresAuth: true },
      component: () => import('./views/Checklists.vue'),
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('checklist/fetchAll', routeTo.params.ownerId)
          .then(checklists => {
            routeTo.params.checklists = checklists
            next()
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: '404', params: { resource: 'checklist' } })
            } else {
              next({ name: 'network-issue' })
            }
          })
      }
    },
    {
      path: '/404',
      name: '404',
      meta: { requiresAuth: false },
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      meta: { requiresAuth: false },
      component: NetworkIssue
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store
      .dispatch('auth/getFromLocal')
      .then(() => {
        next()
      })
      .catch(() => {
        next({
          name: 'login'
        })
      })
  } else {
    next()
  }
})

export default router
