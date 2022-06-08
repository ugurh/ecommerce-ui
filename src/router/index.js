import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import AddCategory from '../views/category/AddCategory'
import CategoryPage from '../views/CategoryPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/admin/category/create',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: "/admin/category",
    name: "CategoryPage",
    component: CategoryPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
