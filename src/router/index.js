import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const scrollBehavior = () => ({ y: 0 })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior,
})

router.beforeEach((to, _, next) => {
  if (to.meta && to.meta.isDark) {
    document.documentElement.classList.add('theme-dark')
  } else {
    document.documentElement.classList.remove('theme-dark')
  }

  next()
})

export default router
