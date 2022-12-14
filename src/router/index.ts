import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import Home from '@/views/Home.vue'
import MovieDetails from '@/views/MovieDetails.vue'
import MovieSearch from '@/views/MovieSearch.vue'
import NotFound from '@/views/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'Movie Details',
    component: MovieDetails,
    props: true,
  },
  {
    path: '/search',
    name: 'Search Movies',
    component: MovieSearch,
    props: route => ({ query: route.query.q })
  },
  { path: '/:pathMatch(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router