import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Teams from '@/views/Teams.vue'
import Team from '@/views/Team.vue'
import Player from '@/views/Player.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },    
    {
      path: '/teams/:id',
      name: 'team',
      component: Team
    },
    {
      path: '/players/:id',
      name: 'player',
      component: Player
    }    
  ]
})
