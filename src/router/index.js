import Vue from 'vue';
import Home from '../views/Home.vue';
import { IonicVueRouter } from '@ionic/vue';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter : guardMyroute,
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter : guardMyroute,
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
  ],
});

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("tweetr-token"))
  isAuthenticated = true;
  else
    isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  }
  else {
    next('/login'); // go to '/login';
  }
}