import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import FixedMenu from "../components/FixedMenu.vue";
// import ToDoList from "../views/ToDoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/todolist",
    name: "todolist",
    component: () => import("../views/ToDoList.vue"),
  },
  {
    path: "/fixedmenu",
    name: "fixedmenu",
    component: () => import("../components/FixedMenu.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
