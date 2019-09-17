import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './views/Home.vue'
import TeamsComponent from '@/views/Teams.vue'
import TeamComponent from '@/views/Team.vue'
import PlayerComponent from '@/views/Player.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsComponent
    },    
    {
      path: '/teams/:id',
      name: 'team',
      component: TeamComponent
    },
    {
      path: '/players/:id',
      name: 'player',
      component: PlayerComponent
    }    
  ]
})
