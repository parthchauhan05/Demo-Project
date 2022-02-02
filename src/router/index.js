import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: '/list',
  },
  {
    path: "/list",
    name: "List",
    component: () => import(/* webpackChunkName: "list" */ "../views/List.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import(/* webpackChunkName: "table" */ "../views/Table.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import(/* webpackChunkName: "form" */ "../views/Form.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
