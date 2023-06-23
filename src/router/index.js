import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from '../components/MainPage'
import TaskList from '../components/TaskList'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/tasklist',
    component: TaskList
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
