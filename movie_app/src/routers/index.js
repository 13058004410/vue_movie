import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import moviesRouter from './movies'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes: [
      homeRouter,
      moviesRouter,
      mineRouter,
      {
        path:'/*',
        redirect:'/movies'
      }
    ]
})
