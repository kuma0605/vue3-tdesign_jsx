import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/IndexView.vue'),
      children:[
        {
          path: "",
          name: "mainhome",
          component: () => import('../views/HomeView.vue'),
        },
        /* {
          path: "layout/:whichApp",
          name: "layout",
          component: () => import('@/views/LayoutView.vue'),
          children: [
            {
              path: "mytodo",
              component: () => import('@/views/todo/mytodo.vue'),
            },
            {
              path: "mystart",
              component: () => import('@/views/todo/mystart.vue'),
            }
          ]
        } */
        {
          path: "layout",
          name: "layout",
          component: () => import('@/views/LayoutView.vue'),
          children: [
            {
              path: "todo",
              component: () => import('../components/CommonView.vue'),
              children:[
                {
                  path: "mytodo",
                  component: () => import('@/views/todo/mytodo.vue'),
                },
                {
                  path: "mystart",
                  component: () => import('@/views/todo/mystart.vue'),
                }
              ]
            },
            {
              path: "devicerecord",
              component: () => import('../components/CommonView.vue'),
              children:[
                {
                  path: "dashboard",
                  component: () => import('@/views/deviceRecord/dashboard.vue'),
                },
              ]
            }
          ]
        }
      ]
    },
  ]
})

export default router
