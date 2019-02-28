import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    // history 在本地运行有 bug
    mode: 'hash',
    routes: [
      {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home/index'),
      },
      {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login/index'),
      },
      {
          path: '/register',
          name: 'register',
          component: () => import('@/views/Register/index'),
      },
      {
          path: '/devices/:id',
          name: 'detail',
          component: () => import('@/views/DeviceInformation/index'),
      },
      {
          path: '/maintain/:id',
          name: 'maintain',
          component: () => import('@/views/Maintain/index'),
      },
      {
          path: '/user',
          name: 'user',
          component: () => import('@/views/HomePage/index'),
      },
      {
            path: '/user/profile',
            name: 'profile',
            component: () => import('@/views/HomePage/components/Profile'),
      },
      {
          path: '/workOrder',
          name: 'workOrder',
          component: () => import('@/views/WorkOrderList/index'),
      },
      {
          path: '/workorders/:id',
          name: 'workOrderDetail',
          component: () => import('@/views/WorkOrderInformation/index'),
      },
    ],
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')
  
    if (authRequired && !loggedIn) {
      return next('/login')
    }
  
    next()
  })