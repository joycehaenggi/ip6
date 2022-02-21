import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/newHazard/:actualTitleNameNewHazard/:itemIdNewHazard/:checkedCheckboxesArrayNewHazard*',
    name: 'NewHazard',
    mode: "history",
    Props: true, // if props is set to true, $route.params will be set as the component property
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewHazard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
