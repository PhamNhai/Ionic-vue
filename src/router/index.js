import Vue from 'vue';
import Home from '../views/Home.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
          import(/* webpackChunkName: "login" */ '../views/authenticate/Login.vue')
    },     
    {
      path: '/signup',
      name: 'signup',
      component: () =>
          import(/* webpackChunkName: "login" */ '../views/authenticate/Signup.vue')
    }
  ]
});